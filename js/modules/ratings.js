/* ==========================================================================
   RATINGS MODULE (Codeforces, CodeChef, AtCoder)
   ========================================================================== */

const CACHE_RATINGS = 'cp_ratings_v3';
const TTL_MS        = 24 * 60 * 60 * 1000; // 24 hours

/** fetch() with AbortController timeout so nothing hangs forever */
async function fetchTimeout(url, opts = {}, ms = 8000) {
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
        console.warn('[Ratings Cache] Write failed:', e);
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

function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== null && value !== undefined) {
        el.textContent = value;
    }
}

function cfRankLabel(rank) {
    if (!rank) return 'Active';
    return rank.charAt(0).toUpperCase() + rank.slice(1);
}

function acToKyu(r) {
    if (r < 400)  return '8 Kyu';
    if (r < 800)  return '7 Kyu';
    if (r < 1200) return '6 Kyu';
    if (r < 1600) return '5 Kyu';
    if (r < 2000) return '4 Kyu';
    return '3+ Kyu';
}

function acToTier(r) {
    if (r < 400)  return 'Gray';
    if (r < 800)  return 'Brown';
    if (r < 1200) return 'Green';
    if (r < 1600) return 'Cyan';
    if (r < 2000) return 'Blue';
    return 'Yellow+';
}

function applyRatings({ cf, cc, ac }) {
    setText('cf-rating',      cf.rating);
    setText('cf-max-rating',  cf.maxRating);
    setText('cf-solved',      typeof cf.solved === 'number' ? `${cf.solved} Solved` : `${cf.solved} Solved`);
    setText('cf-rank',        cfRankLabel(cf.rank));
    setText('hero-cf-rating', cf.rating);

    setText('cc-rating',      cc.rating);
    setText('cc-max-rating',  cc.maxRating);
    setText('cc-contests',    cc.contests ? `${cc.contests} Contests` : '8 Contests');
    setText('cc-stars',       `${cc.stars} ${'★'.repeat(cc.stars)}`);
    setText('cc-streak',      `Division 3 Competitor (Peak ${cc.maxRating})`);
    setText('hero-cc-stars',  `${cc.stars}${'★'.repeat(cc.stars)}`);
    setText('hero-cc-rating', cc.rating);

    const kyu  = acToKyu(ac.rating);
    const tier = acToTier(ac.rating);
    setText('ac-rating',   ac.rating);
    setText('ac-tier',     `${kyu} (${tier})`);
    setText('ac-kyu',      kyu);
    setText('ac-contests', ac.contests ? `${ac.contests} Contests` : '—');
    setText('hero-ac-kyu', kyu);
}

async function fetchCfRating() {
    try {
        const res  = await fetchTimeout('https://codeforces.com/api/user.info?handles=AryanMoorthy');
        const json = await res.json();
        if (json.status !== 'OK') throw new Error('bad status');
        const u = json.result[0];
        return { rating: u.rating, maxRating: u.maxRating, rank: u.rank, solved: '900+' };
    } catch (e) {
        console.warn('[Ratings] CF fallback used:', e.message);
        return { rating: 1180, maxRating: 1180, rank: 'pupil', solved: '900+' };
    }
}

async function fetchCcRating() {
    try {
        const res = await fetchTimeout('https://codechef-api.vercel.app/aryan_moorthy');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const d = await res.json();
        if (d.success === false) throw new Error('API error');
        const rating    = parseInt(d.currentRating) || 1415;
        const maxRating = parseInt(d.highestRating) || 1511;
        const stars     = parseInt(d.stars) || Math.max(1, Math.min(7, Math.floor(rating / 400)));
        return { rating, maxRating, stars, contests: null };
    } catch (e) {
        console.warn('[Ratings] CC fallback used:', e.message);
        return { rating: 1415, maxRating: 1511, stars: 2, contests: 8 };
    }
}

async function fetchAcRating() {
    try {
        const res = await fetchTimeout(
            'https://kenkoooo.com/atcoder/atcoder-api/v3/user/contest_result?user=aryanmoorthy'
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const results = await res.json();
        if (!Array.isArray(results) || results.length === 0) throw new Error('empty');
        results.sort((a, b) => b.EndTime - a.EndTime);
        return { rating: results[0].NewRating ?? 669, contests: results.length };
    } catch (e) {
        console.warn('[Ratings] AC fallback used:', e.message);
        return { rating: 669, contests: null };
    }
}

export async function initRatings() {
    const cached = getCache(CACHE_RATINGS);
    if (cached) {
        applyRatings(cached.data);
        console.info(`[Ratings] From cache (${fmtTime(cached.ts)})`);
        return;
    }
    const [cf, cc, ac] = await Promise.all([fetchCfRating(), fetchCcRating(), fetchAcRating()]);
    const data = { cf, cc, ac };
    applyRatings(data);
    setCache(CACHE_RATINGS, data);
    console.info('[Ratings] Live data cached.', data);
}
