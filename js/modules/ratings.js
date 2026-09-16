/* ==========================================================================
   RATINGS MODULE (Codeforces, CodeChef, AtCoder)
   ========================================================================== */

const CACHE_RATINGS = 'cp_ratings_v6';
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

function getCcStars(r) {
    if (r < 1400) return 1;
    if (r < 1600) return 2;
    if (r < 1800) return 3;
    if (r < 2000) return 4;
    if (r < 2200) return 5;
    if (r < 2500) return 6;
    return 7;
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
    if (cf) {
        setText('cf-rating',      cf.rating);
        setText('cf-max-rating',  cf.maxRating);
        setText('cf-solved',      typeof cf.solved === 'number' ? `${cf.solved} Solved` : `${cf.solved}`);
        setText('cf-rank',        cfRankLabel(cf.rank));
        setText('cf-streak',      `Longest Streak: ${cf.streak || 206} Consecutive Days`);
        setText('hero-cf-rating', cf.rating);

        const heroBadge = document.querySelector('.badge-top span');
        if (heroBadge && cf.solved && cf.streak) {
            heroBadge.textContent = `${cf.solved} Solved | ${cf.streak}d Streak`;
        }
    }

    if (cc) {
        setText('cc-rating',      cc.rating);
        setText('cc-max-rating',  cc.maxRating);
        setText('cc-contests',    cc.contests ? `${cc.contests} Contests` : '9 Contests');
        setText('cc-stars',       `${cc.stars} ${'★'.repeat(cc.stars)}`);
        setText('cc-streak',      `Division 3 Competitor (Peak ${cc.maxRating})`);
        setText('hero-cc-stars',  `${cc.stars}${'★'.repeat(cc.stars)}`);
        setText('hero-cc-rating', cc.rating);
    }

    if (ac) {
        const kyu  = acToKyu(ac.rating);
        const tier = acToTier(ac.rating);
        setText('ac-rating',   ac.rating);
        setText('ac-tier',     `${kyu} (${tier})`);
        setText('ac-kyu',      kyu);
        setText('ac-contests', ac.contests ? `${ac.contests} Contests` : '11 Contests');
        setText('hero-ac-kyu', kyu);
    }
}

/** Compute longest consecutive-day streak from a Set of 'YYYY-MM-DD' strings */
function calcLongestStreak(dateSet) {
    if (!dateSet.size) return 0;
    const sorted = Array.from(dateSet).sort();
    let longest = 1, current = 1;
    for (let i = 1; i < sorted.length; i++) {
        const prev = new Date(sorted[i - 1]);
        const curr = new Date(sorted[i]);
        const diff = (curr - prev) / 86400000;
        if (diff === 1) {
            current++;
            if (current > longest) longest = current;
        } else if (diff > 1) {
            current = 1;
        }
    }
    return longest;
}

async function fetchCfRating() {
    try {
        const infoRes  = await fetchTimeout('https://codeforces.com/api/user.info?handles=AryanMoorthy');
        const infoJson = await infoRes.json();
        if (infoJson.status !== 'OK') throw new Error('bad status');
        const u = infoJson.result[0];

        let solved = 782;
        let streak = 206;
        try {
            const statRes  = await fetchTimeout(
                'https://codeforces.com/api/user.status?handle=AryanMoorthy&from=1&count=10000',
                {}, 12000
            );
            const statJson = await statRes.json();
            if (statJson.status === 'OK') {
                const seenKeys = new Set();
                const solveDays = new Set();
                for (const s of statJson.result) {
                    if (s.verdict !== 'OK') continue;
                    const key = `${s.problem.contestId ?? 'ext'}-${s.problem.index ?? s.problem.name}`;
                    if (!seenKeys.has(key)) {
                        seenKeys.add(key);
                    }
                    const d = new Date(s.creationTimeSeconds * 1000);
                    const ds = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
                    solveDays.add(ds);
                }
                if (seenKeys.size > 0) solved = seenKeys.size;
                const calcStreak = calcLongestStreak(solveDays);
                if (calcStreak > 0) streak = calcStreak;
            }
        } catch (e) {
            console.warn('[Ratings] CF status detail fetch warning:', e.message);
        }

        return {
            rating: u.rating,
            maxRating: u.maxRating,
            rank: u.rank,
            solved: solved,
            streak: streak
        };
    } catch (e) {
        console.warn('[Ratings] CF fallback used:', e.message);
        return { rating: 1171, maxRating: 1180, rank: 'newbie', solved: 782, streak: 206 };
    }
}

async function fetchCcRating() {
    try {
        const res = await fetchTimeout('https://cp-rating-api.vercel.app/codechef/aryan_moorthy', {}, 5000);
        if (res.ok) {
            const d = await res.json();
            const rating = parseInt(String(d.rating || '').trim());
            if (!isNaN(rating) && rating > 0) {
                const maxRating = parseInt(String(d.highestRating || '').trim()) || 1511;
                const stars = getCcStars(rating);
                const contests = parseInt(d.participation) || 9;
                return { rating, maxRating, stars, contests };
            }
        }
    } catch (e) {
        console.warn('[Ratings] CC Primary API error:', e.message);
    }

    try {
        const res = await fetchTimeout('https://r.jina.ai/https://www.codechef.com/users/aryan_moorthy', {}, 7000);
        if (res.ok) {
            const text = await res.text();
            const ratingMatch = text.match(/CodeChef Rating[^\d]*(\d{3,4})/i);
            const highestMatch = text.match(/Highest Rating\s*(\d{3,4})/i);
            const contestsMatch = text.match(/Contests\s*\((\d+)\)/i);
            if (ratingMatch) {
                const rating = parseInt(ratingMatch[1]);
                const maxRating = highestMatch ? parseInt(highestMatch[1]) : 1511;
                const stars = getCcStars(rating);
                const contests = contestsMatch ? parseInt(contestsMatch[1]) : 9;
                return { rating, maxRating, stars, contests };
            }
        }
    } catch (e) {
        console.warn('[Ratings] CC Backup Jina API error:', e.message);
    }

    return { rating: 1404, maxRating: 1511, stars: 2, contests: 9 };
}

async function fetchAcRating() {
    try {
        const res = await fetchTimeout(
            'https://atcoder.jp/users/aryanmoorthy/history/json'
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const results = await res.json();
        if (!Array.isArray(results) || results.length === 0) throw new Error('empty');
        results.sort((a, b) => new Date(b.EndTime) - new Date(a.EndTime));
        const latest = results.find(r => r.IsRated) || results[0];
        return { rating: latest.NewRating ?? 721, contests: results.length };
    } catch (e) {
        console.warn('[Ratings] AC fallback used:', e.message);
        return { rating: 721, contests: 11 };
    }
}

export async function initRatings() {
    try {
        localStorage.removeItem('cp_ratings_v4');
        localStorage.removeItem('cp_ratings_v5');
    } catch (e) {}

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

