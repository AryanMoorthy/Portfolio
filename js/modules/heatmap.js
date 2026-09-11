import { FALLBACK_ACTIVITY } from './heatmapData.js';

const CACHE_HEATMAP = 'cp_heatmap_v7';
const TTL_MS        = 24 * 60 * 60 * 1000; // 24 hours
const MONTHS        = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/** fetch() with AbortController timeout */
async function fetchTimeout(url, opts = {}, ms = 12000) {
    const ctrl = new AbortController();
    const id   = setTimeout(() => ctrl.abort(), ms);
    try {
        const res = await fetch(url, { ...opts, signal: ctrl.signal });
        clearTimeout(id);
        return res;
    } catch (e) {
        clearTimeout(id);
        throw e;
    }
}

/** Formats timestamp to YYYY-MM-DD in the user's LOCAL timezone */
function toLocalDateStr(ms) {
    const d = new Date(ms);
    const yyyy = d.getFullYear();
    const mm   = String(d.getMonth() + 1).padStart(2, '0');
    const dd   = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function getCache(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const { data, ts } = JSON.parse(raw);
        if (Date.now() - ts > TTL_MS) {
            localStorage.removeItem(key);
            return null;
        }
        return { data, ts };
    } catch {
        return null;
    }
}

function setCache(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
    } catch (e) {
        console.warn('[Heatmap Cache] Write failed:', e);
    }
}

function fmtTime(ts) {
    return new Date(ts).toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function levelFor(n) {
    if (n === 0) return 0;
    if (n <= 2)  return 1;
    if (n <= 5)  return 2;
    if (n <= 9)  return 3;
    return 4;
}

function cfRatingColorClass(r) {
    if (!r) return '';
    if (r < 1200) return 'r-gray';
    if (r < 1400) return 'r-green';
    if (r < 1600) return 'r-cyan';
    if (r < 1900) return 'r-blue';
    if (r < 2100) return 'r-purple';
    return 'r-orange';
}

// --- Floating Problem Popup Tooltip Setup ---
let hmTooltip = null;
let tipTimer = null;

function ensureTooltip() {
    if (hmTooltip) return;
    hmTooltip = document.createElement('div');
    hmTooltip.id = 'hm-tooltip';
    hmTooltip.className = 'hm-tooltip';
    document.body.appendChild(hmTooltip);

    hmTooltip.addEventListener('mouseenter', () => clearTimeout(tipTimer));
    hmTooltip.addEventListener('mouseleave', hideTooltipGracefully);
    document.addEventListener('scroll', () => { if (hmTooltip) hmTooltip.style.display = 'none'; }, { passive: true });
}

function hideTooltipGracefully() {
    tipTimer = setTimeout(() => {
        if (hmTooltip) hmTooltip.style.display = 'none';
    }, 180);
}

function showTooltip(cell, dateLabel, dayData) {
    ensureTooltip();
    clearTimeout(tipTimer);

    if (!dayData || dayData.count === 0) {
        hmTooltip.innerHTML = `<div class="hm-tip-empty">No solves — ${dateLabel}</div>`;
    } else {
        const items = dayData.problems.slice(0, 15).map(p => {
            const ratingBadge = p.rating
                ? `<span class="hm-tip-rating ${p.platform === 'CF' ? cfRatingColorClass(p.rating) : ''}">${p.rating}</span>`
                : '';
            return `<li>
                <span class="hm-tip-badge hm-tip-${p.platform.toLowerCase()}">${p.platform}</span>
                <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="hm-tip-link" title="${p.name}">${p.name}</a>
                ${ratingBadge}
            </li>`;
        }).join('');

        const more = dayData.problems.length > 15
            ? `<li class="hm-tip-more">+${dayData.problems.length - 15} more problems…</li>`
            : '';

        hmTooltip.innerHTML = `
            <div class="hm-tip-header">
                <strong>${dayData.count} problem${dayData.count > 1 ? 's' : ''} solved</strong>
                <span class="hm-tip-date">${dateLabel}</span>
            </div>
            <ul class="hm-tip-list">${items}${more}</ul>
        `;
    }

    hmTooltip.style.display = 'block';
    positionTooltip(cell);
}

function positionTooltip(cell) {
    const rect    = cell.getBoundingClientRect();
    const tw      = hmTooltip.offsetWidth;
    const th      = hmTooltip.offsetHeight;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let left = rect.left + scrollX + rect.width / 2 - tw / 2;
    let top  = rect.top  + scrollY - th - 8;

    left = Math.max(scrollX + 8, Math.min(left, scrollX + window.innerWidth - tw - 8));
    if (top < scrollY + 8) top = rect.bottom + scrollY + 8; // flip below if not enough headroom

    hmTooltip.style.left = `${left}px`;
    hmTooltip.style.top  = `${top}px`;
}

// --- Heatmap Renderer ---
function renderHeatmap(activityByDate) {
    const grid       = document.getElementById('heatmap-grid');
    const monthRow   = document.getElementById('heatmap-months');
    const totalBadge = document.getElementById('heatmap-total');
    const loadingEl  = document.getElementById('heatmap-loading');

    if (!grid) return;
    if (loadingEl) loadingEl.remove();
    grid.innerHTML = '';
    if (monthRow) monthRow.innerHTML = '';

    // 52-week window ending today, starting on Monday
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);
    const dow = startDate.getDay();
    startDate.setDate(startDate.getDate() - (dow === 0 ? 6 : dow - 1));

    const fragment  = document.createDocumentFragment();
    const monthCols = {};
    let totalSolved = 0;
    let col = 0;
    let d   = new Date(startDate);

    while (d <= today) {
        const mk = d.getFullYear() * 100 + d.getMonth();
        if (!(mk in monthCols)) monthCols[mk] = col;

        const dateStr = toLocalDateStr(d.getTime());
        const dayData = activityByDate[dateStr] || null;
        const count   = dayData ? dayData.count : 0;
        totalSolved  += count;

        const cell = document.createElement('div');
        cell.className = `heatmap-cell l${levelFor(count)}`;

        const dateLabel = d.toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const capturedLabel = dateLabel;
        const capturedData  = dayData;

        cell.addEventListener('mouseenter', () => showTooltip(cell, capturedLabel, capturedData));
        cell.addEventListener('mouseleave', hideTooltipGracefully);

        fragment.appendChild(cell);

        d.setDate(d.getDate() + 1);
        if (d.getDay() === 1) col++; // Monday starts a new column
    }

    grid.appendChild(fragment);

    // Month headers
    if (monthRow) {
        const CELL_W = 13, GAP_W = 3, colW = CELL_W + GAP_W;
        const entries = Object.entries(monthCols).sort((a, b) => +a[0] - +b[0]);
        for (let i = 0; i < entries.length; i++) {
            const [key, sc] = entries[i];
            const ec    = i + 1 < entries.length ? entries[i + 1][1] : col + 1;
            const width = (ec - sc) * colW;
            if (width < colW * 2) continue;
            const lbl       = document.createElement('div');
            lbl.className   = 'heatmap-month-label';
            lbl.style.width = `${width}px`;
            lbl.textContent = MONTHS[parseInt(key) % 100];
            monthRow.appendChild(lbl);
        }
    }

    if (totalBadge) {
        totalBadge.textContent = `${totalSolved.toLocaleString()} problems solved this year`;
    }
}

function showHeatmapError(msg) {
    const el = document.getElementById('heatmap-loading');
    if (el) el.innerHTML = `<i class="fas fa-exclamation-circle" style="color:#f87171"></i> ${msg}`;
}

// --- CF Solves Fetcher ---
async function fetchCfActivity() {
    const yearAgoMs = Date.now() - 366 * 24 * 3600 * 1000;
    try {
        const res = await fetchTimeout(
            'https://codeforces.com/api/user.status?handle=AryanMoorthy&from=1&count=5000',
            {}, 12000
        );
        const json = await res.json();
        if (json.status !== 'OK') throw new Error('CF status error');

        const map = {};
        for (const s of json.result) {
            if (s.verdict !== 'OK') continue;
            const ms = s.creationTimeSeconds * 1000;
            if (ms < yearAgoMs) continue;
            const date = toLocalDateStr(ms);
            const key  = `${s.problem.contestId ?? 'ext'}-${s.problem.index ?? s.problem.name}`;
            if (!map[date]) map[date] = { keys: new Set(), problems: [] };
            if (!map[date].keys.has(key)) {
                map[date].keys.add(key);
                const cid    = s.problem.contestId;
                const idx    = s.problem.index;
                const rating = s.problem.rating || null;
                const url    = cid
                    ? `https://codeforces.com/contest/${cid}/problem/${idx}`
                    : `https://codeforces.com/problemset`;
                map[date].problems.push({ name: s.problem.name, url, rating, platform: 'CF' });
            }
        }
        const out = {};
        for (const [date, { problems }] of Object.entries(map)) {
            out[date] = { count: problems.length, problems };
        }
        return out;
    } catch (e) {
        console.warn('[Heatmap] CF fetch skipped/failed:', e.message);
        return {};
    }
}

// --- AtCoder Solves Fetcher ---
async function fetchAcActivity() {
    const yearAgoSec = Math.floor((Date.now() - 366 * 24 * 3600 * 1000) / 1000);
    try {
        const res = await fetchTimeout(
            `https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=aryanmoorthy&from_second=${yearAgoSec}`,
            {}, 12000
        );
        if (!res.ok) throw new Error(`kenkoooo HTTP ${res.status}`);
        const subs = await res.json();

        const map = {};
        for (const s of subs) {
            if (s.result !== 'AC') continue;
            const date = toLocalDateStr(s.epoch_second * 1000);
            if (!map[date]) map[date] = { keys: new Set(), problems: [] };
            if (!map[date].keys.has(s.problem_id)) {
                map[date].keys.add(s.problem_id);
                const parts  = s.problem_id.split('_');
                const name   = parts.length >= 2
                    ? `${parts[0].toUpperCase()} ${parts[parts.length - 1].toUpperCase()}`
                    : s.problem_id.toUpperCase();
                const rating = s.point ? `${s.point} pts` : null;
                const url    = `https://atcoder.jp/contests/${s.contest_id}/tasks/${s.problem_id}`;
                map[date].problems.push({ name, url, rating, platform: 'AC' });
            }
        }
        const out = {};
        for (const [date, { problems }] of Object.entries(map)) {
            out[date] = { count: problems.length, problems };
        }
        return out;
    } catch (e) {
        console.warn('[Heatmap] AC fetch skipped/failed:', e.message);
        return {};
    }
}

function mergeActivity(...maps) {
    const merged = {};
    for (const map of maps) {
        for (const [date, data] of Object.entries(map)) {
            if (!merged[date]) merged[date] = { count: 0, problems: [] };
            merged[date].count   += data.count;
            merged[date].problems = [...merged[date].problems, ...data.problems];
        }
    }
    return merged;
}

export async function initHeatmap() {
    const cached = getCache(CACHE_HEATMAP);
    if (cached && Object.keys(cached.data || {}).length > 0) {
        renderHeatmap(cached.data);
        const note = document.getElementById('heatmap-cache-note');
        if (note) note.textContent = `⚡ Cached · last fetched ${fmtTime(cached.ts)} · refreshes every 24 h`;
        console.info(`[Heatmap] From cache (${fmtTime(cached.ts)})`);
        return;
    }

    // Render immediately using fallback dataset
    if (FALLBACK_ACTIVITY && Object.keys(FALLBACK_ACTIVITY).length > 0) {
        renderHeatmap(FALLBACK_ACTIVITY);
        const note = document.getElementById('heatmap-cache-note');
        if (note) note.textContent = `✨ Active solves loaded · checking for updates...`;
    }

    try {
        const [cfAct, acAct] = await Promise.all([fetchCfActivity(), fetchAcActivity()]);
        const merged = mergeActivity(cfAct, acAct);
        if (Object.keys(merged).length > 0) {
            renderHeatmap(merged);
            setCache(CACHE_HEATMAP, merged);
            const note = document.getElementById('heatmap-cache-note');
            if (note) note.textContent = `✨ Live data loaded · refreshes every 24 h`;
            console.info('[Heatmap] Live activity cached.');
        }
    } catch (e) {
        if (FALLBACK_ACTIVITY) {
            renderHeatmap(FALLBACK_ACTIVITY);
        } else {
            showHeatmapError('Could not load activity data.');
        }
    }
}
