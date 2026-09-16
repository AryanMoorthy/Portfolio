/* ==========================================================================
   ARYAN MOORTHY — PORTFOLIO BUNDLE (Compatible with file:// and http://)
   ========================================================================== */

(function () {
    'use strict';

    /* --- FALLBACK ACTIVITY SNAPSHOT --- */
    const FALLBACK_ACTIVITY = {"2026-09-10":{"count":6,"problems":[{"name":"Love Story","url":"https://codeforces.com/contest/1829/problem/A","rating":800,"platform":"CF"},{"name":"Mr. Perfectly Fine","url":"https://codeforces.com/contest/1829/problem/C","rating":800,"platform":"CF"},{"name":"Gold Rush","url":"https://codeforces.com/contest/1829/problem/D","rating":1000,"platform":"CF"},{"name":"The Lakes","url":"https://codeforces.com/contest/1829/problem/E","rating":1100,"platform":"CF"},{"name":"Forever Winter","url":"https://codeforces.com/contest/1829/problem/F","rating":1300,"platform":"CF"},{"name":"Don't Blame Me","url":"https://codeforces.com/contest/1829/problem/H","rating":1700,"platform":"CF"}]},"2026-09-09":{"count":3,"problems":[{"name":"Strange Birthday Party","url":"https://codeforces.com/contest/1470/problem/A","rating":1300,"platform":"CF"},{"name":"Short Task","url":"https://codeforces.com/contest/1512/problem/G","rating":1700,"platform":"CF"},{"name":"Fun","url":"https://codeforces.com/contest/1996/problem/D","rating":1500,"platform":"CF"}]},"2026-09-08":{"count":6,"problems":[{"name":"Maximize XOR, Minimize Operations","url":"https://codeforces.com/contest/2260/problem/C","rating":null,"platform":"CF"},{"name":"Monocarp and Projects","url":"https://codeforces.com/contest/2260/problem/B","rating":null,"platform":"CF"},{"name":"Monocarp's Contest","url":"https://codeforces.com/contest/2260/problem/A","rating":null,"platform":"CF"},{"name":"Weakened Common Divisor","url":"https://codeforces.com/contest/1025/problem/B","rating":1600,"platform":"CF"},{"name":"Three Activities","url":"https://codeforces.com/contest/1914/problem/D","rating":1200,"platform":"CF"},{"name":"Almost All Divisors","url":"https://codeforces.com/contest/1165/problem/D","rating":1600,"platform":"CF"}]},"2026-09-07":{"count":6,"problems":[{"name":"Serval and Modulo","url":"https://codeforces.com/contest/2085/problem/E","rating":2200,"platform":"CF"},{"name":"Row GCD","url":"https://codeforces.com/contest/1458/problem/A","rating":1600,"platform":"CF"},{"name":"LCM Challenge","url":"https://codeforces.com/contest/235/problem/A","rating":1600,"platform":"CF"},{"name":"Pythagorean Triples","url":"https://codeforces.com/contest/707/problem/C","rating":1500,"platform":"CF"},{"name":"Make It Round","url":"https://codeforces.com/contest/1759/problem/D","rating":1400,"platform":"CF"},{"name":"Divide by three, multiply by two","url":"https://codeforces.com/contest/977/problem/D","rating":1400,"platform":"CF"}]},"2026-09-06":{"count":8,"problems":[{"name":"Ice Skating","url":"https://codeforces.com/contest/217/problem/A","rating":1200,"platform":"CF"},{"name":"Cyclic Components","url":"https://codeforces.com/contest/977/problem/E","rating":1500,"platform":"CF"},{"name":"Journey","url":"https://codeforces.com/contest/839/problem/C","rating":1500,"platform":"CF"},{"name":"MEX Multiset","url":"https://codeforces.com/contest/2259/problem/D","rating":1200,"platform":"CF"},{"name":"ABC474 A","url":"https://atcoder.jp/contests/abc474/tasks/abc474_a","rating":"100 pts","platform":"AC"},{"name":"ABC474 B","url":"https://atcoder.jp/contests/abc474/tasks/abc474_b","rating":"200 pts","platform":"AC"},{"name":"ABC474 C","url":"https://atcoder.jp/contests/abc474/tasks/abc474_c","rating":"300 pts","platform":"AC"},{"name":"ABC474 D","url":"https://atcoder.jp/contests/abc474/tasks/abc474_d","rating":"400 pts","platform":"AC"}]},"2026-09-05":{"count":8,"problems":[{"name":"MEX Multiset","url":"https://codeforces.com/contest/2259/problem/D","rating":1200,"platform":"CF"},{"name":"Minus Two","url":"https://codeforces.com/contest/2259/problem/B","rating":800,"platform":"CF"},{"name":"101","url":"https://codeforces.com/contest/2259/problem/C","rating":1000,"platform":"CF"},{"name":"Moo Language School","url":"https://codeforces.com/contest/2259/problem/A","rating":800,"platform":"CF"},{"name":"Fair Numbers","url":"https://codeforces.com/contest/1411/problem/B","rating":1000,"platform":"CF"},{"name":"News Distribution","url":"https://codeforces.com/contest/1167/problem/C","rating":1400,"platform":"CF"},{"name":"Maze","url":"https://codeforces.com/contest/377/problem/A","rating":1600,"platform":"CF"},{"name":"Shohag Loves XOR (Easy Version)","url":"https://codeforces.com/contest/2039/problem/C1","rating":1200,"platform":"CF"}]},"2026-09-04":{"count":4,"problems":[{"name":"GCD Length","url":"https://codeforces.com/contest/1511/problem/B","rating":1100,"platform":"CF"},{"name":"Another Problem about Beautiful Pairs","url":"https://codeforces.com/contest/2197/problem/D","rating":1600,"platform":"CF"},{"name":"Look Back","url":"https://codeforces.com/contest/1883/problem/E","rating":1700,"platform":"CF"},{"name":"Morning","url":"https://codeforces.com/contest/1883/problem/A","rating":800,"platform":"CF"}]},"2026-09-03":{"count":5,"problems":[{"name":"Bayan Bus","url":"https://codeforces.com/contest/475/problem/A","rating":1100,"platform":"CF"},{"name":"You Are So Beautiful","url":"https://codeforces.com/contest/1883/problem/F","rating":1400,"platform":"CF"},{"name":"Divan and a New Project ","url":"https://codeforces.com/contest/1614/problem/B","rating":1000,"platform":"CF"},{"name":"Dances (Hard Version)","url":"https://codeforces.com/contest/1883/problem/G2","rating":1900,"platform":"CF"},{"name":"Dances (Easy version)","url":"https://codeforces.com/contest/1883/problem/G1","rating":1400,"platform":"CF"}]},"2026-09-02":{"count":3,"problems":[{"name":"Sequence with Digits","url":"https://codeforces.com/contest/1355/problem/A","rating":1200,"platform":"CF"},{"name":"Young Explorers","url":"https://codeforces.com/contest/1355/problem/B","rating":1200,"platform":"CF"},{"name":"Caesar's Legions","url":"https://codeforces.com/contest/118/problem/D","rating":1700,"platform":"CF"}]},"2026-09-01":{"count":3,"problems":[{"name":"Replace Character","url":"https://codeforces.com/contest/2047/problem/B","rating":900,"platform":"CF"},{"name":"Flawed Prize Redemption","url":"https://codeforces.com/contest/106627/problem/F","rating":null,"platform":"CF"},{"name":"Interesting Function","url":"https://codeforces.com/contest/1538/problem/F","rating":1500,"platform":"CF"}]},"2026-08-31":{"count":2,"problems":[{"name":"Data Structures Fan","url":"https://codeforces.com/contest/1872/problem/E","rating":1500,"platform":"CF"},{"name":"Hossam and Friends","url":"https://codeforces.com/contest/1771/problem/B","rating":1400,"platform":"CF"}]},"2026-08-30":{"count":5,"problems":[{"name":"Maximum Even Sum","url":"https://codeforces.com/contest/2137/problem/C","rating":1100,"platform":"CF"},{"name":"Replace with Occurrences","url":"https://codeforces.com/contest/2137/problem/D","rating":1200,"platform":"CF"},{"name":"The Number of Products","url":"https://codeforces.com/contest/1215/problem/B","rating":1400,"platform":"CF"},{"name":"Tetrahedron","url":"https://codeforces.com/contest/166/problem/E","rating":1500,"platform":"CF"},{"name":"k-Tree","url":"https://codeforces.com/contest/431/problem/C","rating":1600,"platform":"CF"}]},"2026-08-29":{"count":13,"problems":[{"name":"Mashmokh and ACM","url":"https://codeforces.com/contest/414/problem/B","rating":1400,"platform":"CF"},{"name":"Carrot Chopdown (Easy Version)","url":"https://codeforces.com/contest/2258/problem/B1","rating":900,"platform":"CF"},{"name":"Odd Eraser","url":"https://codeforces.com/contest/2258/problem/A","rating":800,"platform":"CF"},{"name":"DP A","url":"https://atcoder.jp/contests/dp/tasks/dp_a","rating":"100 pts","platform":"AC"},{"name":"DP B","url":"https://atcoder.jp/contests/dp/tasks/dp_b","rating":"100 pts","platform":"AC"},{"name":"DP C","url":"https://atcoder.jp/contests/dp/tasks/dp_c","rating":"100 pts","platform":"AC"},{"name":"DP D","url":"https://atcoder.jp/contests/dp/tasks/dp_d","rating":"100 pts","platform":"AC"},{"name":"DP E","url":"https://atcoder.jp/contests/dp/tasks/dp_e","rating":"100 pts","platform":"AC"},{"name":"DP F","url":"https://atcoder.jp/contests/dp/tasks/dp_f","rating":"100 pts","platform":"AC"},{"name":"ABC473 A","url":"https://atcoder.jp/contests/abc473/tasks/abc473_a","rating":"100 pts","platform":"AC"},{"name":"ABC473 B","url":"https://atcoder.jp/contests/abc473/tasks/abc473_b","rating":"200 pts","platform":"AC"},{"name":"ABC473 C","url":"https://atcoder.jp/contests/abc473/tasks/abc473_c","rating":"300 pts","platform":"AC"},{"name":"ABC473 E","url":"https://atcoder.jp/contests/abc473/tasks/abc473_e","rating":"450 pts","platform":"AC"}]},"2026-08-28":{"count":5,"problems":[{"name":"Reverse a Substring","url":"https://codeforces.com/contest/1155/problem/A","rating":1000,"platform":"CF"},{"name":"Johnny and Ancient Computer","url":"https://codeforces.com/contest/1362/problem/A","rating":1000,"platform":"CF"},{"name":"Minimizing the Sum","url":"https://codeforces.com/contest/1969/problem/C","rating":1700,"platform":"CF"},{"name":"Maximize the Score","url":"https://codeforces.com/contest/2248/problem/C","rating":1300,"platform":"CF"},{"name":"Zero Path","url":"https://codeforces.com/contest/1695/problem/C","rating":1700,"platform":"CF"}]},"2026-08-27":{"count":3,"problems":[{"name":"Pizza Delivery","url":"https://codeforces.com/contest/2193/problem/F","rating":1600,"platform":"CF"},{"name":"Skibidus and Fanum Tax (easy version)","url":"https://codeforces.com/contest/2065/problem/C1","rating":1100,"platform":"CF"},{"name":"Palindrome Basis","url":"https://codeforces.com/contest/1673/problem/C","rating":1500,"platform":"CF"}]},"2026-08-26":{"count":3,"problems":[{"name":"Combination Lock","url":"https://codeforces.com/contest/2091/problem/C","rating":1000,"platform":"CF"},{"name":"Regular Bracket Sequence","url":"https://codeforces.com/contest/1469/problem/A","rating":1000,"platform":"CF"},{"name":"In Love","url":"https://codeforces.com/contest/1883/problem/D","rating":1500,"platform":"CF"}]},"2026-08-25":{"count":3,"problems":[{"name":"Hypercarp and the Control Panel","url":"https://codeforces.com/contest/2253/problem/B","rating":1100,"platform":"CF"},{"name":"The Best Card","url":"https://codeforces.com/contest/2253/problem/A","rating":800,"platform":"CF"},{"name":"Journey Planning","url":"https://codeforces.com/contest/1320/problem/A","rating":1400,"platform":"CF"}]},"2026-08-24":{"count":5,"problems":[{"name":"Bakry and Partitioning","url":"https://codeforces.com/contest/1592/problem/C","rating":1700,"platform":"CF"},{"name":"Not Assigning","url":"https://codeforces.com/contest/1627/problem/C","rating":1400,"platform":"CF"},{"name":"JOE is on TV!","url":"https://codeforces.com/contest/1293/problem/B","rating":1000,"platform":"CF"},{"name":"Roof Construction","url":"https://codeforces.com/contest/1632/problem/B","rating":1000,"platform":"CF"},{"name":"Sending a Sequence Over the Network","url":"https://codeforces.com/contest/1741/problem/E","rating":1600,"platform":"CF"}]},"2026-08-23":{"count":4,"problems":[{"name":"MEX Reordering","url":"https://codeforces.com/contest/2191/problem/B","rating":1000,"platform":"CF"},{"name":"Slavic's Exam","url":"https://codeforces.com/contest/1999/problem/D","rating":1100,"platform":"CF"},{"name":"Cinema Line","url":"https://codeforces.com/contest/349/problem/A","rating":1100,"platform":"CF"},{"name":"Sum of Distinct Values in a Matrix","url":"https://codeforces.com/contest/2253/problem/C","rating":1500,"platform":"CF"}]},"2026-08-22":{"count":7,"problems":[{"name":"Square?","url":"https://codeforces.com/contest/2167/problem/A","rating":800,"platform":"CF"},{"name":"khba Loves to Sleep!","url":"https://codeforces.com/contest/2167/problem/E","rating":1600,"platform":"CF"},{"name":"String Construction","url":"https://codeforces.com/contest/2250/problem/B","rating":1000,"platform":"CF"},{"name":"Threshold Movement","url":"https://codeforces.com/contest/2250/problem/A","rating":800,"platform":"CF"},{"name":"ABC472 A","url":"https://atcoder.jp/contests/abc472/tasks/abc472_a","rating":"100 pts","platform":"AC"},{"name":"ABC472 B","url":"https://atcoder.jp/contests/abc472/tasks/abc472_b","rating":"200 pts","platform":"AC"},{"name":"ABC472 C","url":"https://atcoder.jp/contests/abc472/tasks/abc472_c","rating":"300 pts","platform":"AC"}]},"2026-08-21":{"count":4,"problems":[{"name":"Digit String","url":"https://codeforces.com/contest/2230/problem/B","rating":1000,"platform":"CF"},{"name":"Zhily and Array Operating","url":"https://codeforces.com/contest/2224/problem/A","rating":800,"platform":"CF"},{"name":"Another Sorting Problem","url":"https://codeforces.com/contest/2231/problem/B","rating":1100,"platform":"CF"},{"name":"Array Replacement","url":"https://codeforces.com/contest/2252/problem/D","rating":1700,"platform":"CF"}]},"2026-08-20":{"count":4,"problems":[{"name":"Risky Tower","url":"https://codeforces.com/contest/2252/problem/C","rating":1400,"platform":"CF"},{"name":"Boss Fight","url":"https://codeforces.com/contest/2252/problem/A","rating":800,"platform":"CF"},{"name":"Always Changing","url":"https://codeforces.com/contest/2252/problem/B","rating":1100,"platform":"CF"},{"name":"A Ribbon for Tomorrow","url":"https://codeforces.com/contest/2256/problem/D","rating":1600,"platform":"CF"}]},"2026-08-19":{"count":3,"problems":[{"name":"Hit the Lottery","url":"https://codeforces.com/contest/996/problem/A","rating":800,"platform":"CF"},{"name":"Pangram","url":"https://codeforces.com/contest/520/problem/A","rating":800,"platform":"CF"},{"name":"A Ribbon for Tomorrow","url":"https://codeforces.com/contest/2256/problem/D","rating":1600,"platform":"CF"}]},"2026-08-18":{"count":3,"problems":[{"name":"Hot Potatoes at the Fairy Warehouse","url":"https://codeforces.com/contest/2256/problem/C","rating":1200,"platform":"CF"},{"name":"Parity and Sum","url":"https://codeforces.com/contest/1993/problem/B","rating":1100,"platform":"CF"},{"name":"Buy Low Sell High","url":"https://codeforces.com/contest/865/problem/D","rating":2400,"platform":"CF"}]},"2026-08-17":{"count":3,"problems":[{"name":"Monster Game","url":"https://codeforces.com/contest/2193/problem/D","rating":1100,"platform":"CF"},{"name":"Hourglass","url":"https://codeforces.com/contest/2184/problem/B","rating":1100,"platform":"CF"},{"name":"Strong Password","url":"https://codeforces.com/contest/1845/problem/C","rating":1400,"platform":"CF"}]},"2026-08-16":{"count":3,"problems":[{"name":"Rudolf and the Ugly String","url":"https://codeforces.com/contest/1941/problem/C","rating":900,"platform":"CF"},{"name":"A Bit Odd","url":"https://codeforces.com/contest/2241/problem/F","rating":1700,"platform":"CF"},{"name":"Domino Tiles","url":"https://codeforces.com/contest/2256/problem/B","rating":1000,"platform":"CF"}]},"2026-08-15":{"count":6,"problems":[{"name":"Whiplash","url":"https://codeforces.com/contest/2254/problem/F","rating":1900,"platform":"CF"},{"name":"ABC471 A","url":"https://atcoder.jp/contests/abc471/tasks/abc471_a","rating":"100 pts","platform":"AC"},{"name":"ABC471 B","url":"https://atcoder.jp/contests/abc471/tasks/abc471_b","rating":"200 pts","platform":"AC"},{"name":"ABC471 C","url":"https://atcoder.jp/contests/abc471/tasks/abc471_c","rating":"300 pts","platform":"AC"},{"name":"ABC471 D","url":"https://atcoder.jp/contests/abc471/tasks/abc471_d","rating":"400 pts","platform":"AC"},{"name":"ABC471 E","url":"https://atcoder.jp/contests/abc471/tasks/abc471_e","rating":"450 pts","platform":"AC"}]},"2026-08-14":{"count":4,"problems":[{"name":"Flip the Bits","url":"https://codeforces.com/contest/1504/problem/B","rating":1200,"platform":"CF"},{"name":"Districts Connection","url":"https://codeforces.com/contest/1433/problem/D","rating":1200,"platform":"CF"},{"name":"Chronostasis","url":"https://codeforces.com/contest/2254/problem/E","rating":1500,"platform":"CF"},{"name":"Three Numbers on the Blackboard","url":"https://codeforces.com/contest/2256/problem/A","rating":800,"platform":"CF"}]},"2026-08-13":{"count":3,"problems":[{"name":"In Search of an Easy Problem","url":"https://codeforces.com/contest/1030/problem/A","rating":800,"platform":"CF"},{"name":"Tram","url":"https://codeforces.com/contest/116/problem/A","rating":800,"platform":"CF"},{"name":"Create The Teams","url":"https://codeforces.com/contest/1380/problem/C","rating":1400,"platform":"CF"}]},"2026-08-12":{"count":3,"problems":[{"name":"Calculating Function","url":"https://codeforces.com/contest/486/problem/A","rating":800,"platform":"CF"},{"name":"Magnets","url":"https://codeforces.com/contest/344/problem/A","rating":800,"platform":"CF"},{"name":"Element Extermination","url":"https://codeforces.com/contest/1375/problem/C","rating":1400,"platform":"CF"}]},"2026-08-11":{"count":3,"problems":[{"name":"Drinks","url":"https://codeforces.com/contest/200/problem/B","rating":800,"platform":"CF"},{"name":"Presents","url":"https://codeforces.com/contest/136/problem/A","rating":800,"platform":"CF"},{"name":"Fortune Telling","url":"https://codeforces.com/contest/1634/problem/B","rating":1400,"platform":"CF"}]},"2026-08-10":{"count":3,"problems":[{"name":"Is your horseshoe on the other hoof?","url":"https://codeforces.com/contest/228/problem/A","rating":800,"platform":"CF"},{"name":"Ultra-Fast Mathematician","url":"https://codeforces.com/contest/61/problem/A","rating":800,"platform":"CF"},{"name":"Berland Regional","url":"https://codeforces.com/contest/1519/problem/C","rating":1400,"platform":"CF"}]},"2026-08-09":{"count":3,"problems":[{"name":"Divisibility Problem","url":"https://codeforces.com/contest/1328/problem/A","rating":800,"platform":"CF"},{"name":"Hulk","url":"https://codeforces.com/contest/705/problem/A","rating":800,"platform":"CF"},{"name":"Burning Midnight Oil","url":"https://codeforces.com/contest/165/problem/B","rating":1500,"platform":"CF"}]},"2026-08-08":{"count":3,"problems":[{"name":"Beautiful Year","url":"https://codeforces.com/contest/271/problem/A","rating":800,"platform":"CF"},{"name":"Vanya and Fence","url":"https://codeforces.com/contest/677/problem/A","rating":800,"platform":"CF"},{"name":"Cellular Network","url":"https://codeforces.com/contest/702/problem/C","rating":1500,"platform":"CF"}]},"2026-08-07":{"count":3,"problems":[{"name":"Lovely Palindromes","url":"https://codeforces.com/contest/688/problem/B","rating":1000,"platform":"CF"},{"name":"Array merging","url":"https://codeforces.com/contest/1831/problem/B","rating":1000,"platform":"CF"},{"name":"Heidi and the Turing Test (Easy)","url":"https://codeforces.com/contest/1184/problem/C1","rating":1600,"platform":"CF"}]},"2026-08-06":{"count":3,"problems":[{"name":"Board Moves","url":"https://codeforces.com/contest/1353/problem/C","rating":1000,"platform":"CF"},{"name":"Petr and Book","url":"https://codeforces.com/contest/139/problem/A","rating":1000,"platform":"CF"},{"name":"The Doctor Meets Vader (Easy)","url":"https://codeforces.com/contest/1184/problem/B1","rating":1400,"platform":"CF"}]},"2026-08-05":{"count":4,"problems":[{"name":"Two Movies","url":"https://codeforces.com/contest/1989/problem/C","rating":1400,"platform":"CF"},{"name":"Queue at the School","url":"https://codeforces.com/contest/266/problem/B","rating":800,"platform":"CF"},{"name":"Bad Boy","url":"https://codeforces.com/contest/1537/problem/B","rating":900,"platform":"CF"},{"name":"Catch the Coin","url":"https://codeforces.com/contest/1989/problem/A","rating":800,"platform":"CF"}]},"2026-08-04":{"count":6,"problems":[{"name":"Masha and the Garland","url":"https://codeforces.com/contest/2244/problem/E","rating":1400,"platform":"CF"},{"name":"Silhouette","url":"https://codeforces.com/contest/2254/problem/D","rating":1300,"platform":"CF"},{"name":"Marenol (hard version)","url":"https://codeforces.com/contest/2254/problem/C2","rating":1200,"platform":"CF"},{"name":"Evanescent","url":"https://codeforces.com/contest/2254/problem/B","rating":900,"platform":"CF"},{"name":"Marenol (easy version)","url":"https://codeforces.com/contest/2254/problem/C1","rating":1000,"platform":"CF"},{"name":"Riptide","url":"https://codeforces.com/contest/2254/problem/A","rating":800,"platform":"CF"}]},"2026-08-03":{"count":4,"problems":[{"name":"Storming Arasaka","url":"https://codeforces.com/contest/2238/problem/D","rating":1500,"platform":"CF"},{"name":"Construct the String","url":"https://codeforces.com/contest/1335/problem/B","rating":900,"platform":"CF"},{"name":"Another Puzzle from Papyrus","url":"https://codeforces.com/contest/2238/problem/A","rating":800,"platform":"CF"},{"name":"Crimson Triples","url":"https://codeforces.com/contest/2238/problem/B","rating":900,"platform":"CF"}]},"2026-08-02":{"count":4,"problems":[{"name":"Subsequence Hate","url":"https://codeforces.com/contest/1363/problem/B","rating":1400,"platform":"CF"},{"name":"Candies","url":"https://codeforces.com/contest/1343/problem/A","rating":900,"platform":"CF"},{"name":"Game With Sticks","url":"https://codeforces.com/contest/451/problem/A","rating":900,"platform":"CF"},{"name":"Jzzhu and Children","url":"https://codeforces.com/contest/450/problem/A","rating":1000,"platform":"CF"}]},"2026-08-01":{"count":4,"problems":[{"name":"Yet Another Counting Problem","url":"https://codeforces.com/contest/1342/problem/C","rating":1600,"platform":"CF"},{"name":"Merge to Match","url":"https://codeforces.com/contest/2248/problem/B","rating":1000,"platform":"CF"},{"name":"Good Pair Queries","url":"https://codeforces.com/contest/2248/problem/D","rating":1400,"platform":"CF"},{"name":"You Delete, I Delete","url":"https://codeforces.com/contest/2248/problem/A","rating":800,"platform":"CF"}]},"2026-07-31":{"count":4,"problems":[{"name":"Building an Aquarium","url":"https://codeforces.com/contest/1873/problem/E","rating":1100,"platform":"CF"},{"name":"Least Product","url":"https://codeforces.com/contest/1917/problem/A","rating":800,"platform":"CF"},{"name":"Erase First or Second Letter","url":"https://codeforces.com/contest/1917/problem/B","rating":1100,"platform":"CF"},{"name":"Modulo Sum","url":"https://codeforces.com/contest/577/problem/B","rating":1900,"platform":"CF"}]},"2026-07-30":{"count":2,"problems":[{"name":"Division by Two and Permutation","url":"https://codeforces.com/contest/1624/problem/C","rating":1100,"platform":"CF"},{"name":"Going Home","url":"https://codeforces.com/contest/1500/problem/A","rating":1800,"platform":"CF"}]},"2026-07-29":{"count":10,"problems":[{"name":"Modular Arithmetic","url":"https://codeforces.com/contest/105669/problem/B","rating":null,"platform":"CF"},{"name":"Mathematical Addition","url":"https://codeforces.com/contest/1584/problem/A","rating":800,"platform":"CF"},{"name":"Powering the Hero (hard version)","url":"https://codeforces.com/contest/1800/problem/C2","rating":1100,"platform":"CF"},{"name":"Conveyor Belts","url":"https://codeforces.com/contest/1811/problem/B","rating":1000,"platform":"CF"},{"name":"Powering the Hero (easy version)","url":"https://codeforces.com/contest/1800/problem/C1","rating":1000,"platform":"CF"},{"name":"Rule of League","url":"https://codeforces.com/contest/1733/problem/B","rating":900,"platform":"CF"},{"name":"Dual Trigger","url":"https://codeforces.com/contest/1951/problem/A","rating":900,"platform":"CF"},{"name":"Find Minimum Operations","url":"https://codeforces.com/contest/2020/problem/A","rating":800,"platform":"CF"},{"name":"Sliding","url":"https://codeforces.com/contest/2035/problem/A","rating":800,"platform":"CF"},{"name":"Kyoya and Colored Balls","url":"https://codeforces.com/contest/553/problem/A","rating":1500,"platform":"CF"}]},"2026-07-28":{"count":2,"problems":[{"name":"Expected Median","url":"https://codeforces.com/contest/1999/problem/F","rating":1500,"platform":"CF"},{"name":"Game 23","url":"https://codeforces.com/contest/1141/problem/A","rating":1000,"platform":"CF"}]},"2026-07-27":{"count":4,"problems":[{"name":"Game 23","url":"https://codeforces.com/contest/1141/problem/A","rating":1000,"platform":"CF"},{"name":"Yarik and Array","url":"https://codeforces.com/contest/1899/problem/C","rating":1100,"platform":"CF"},{"name":"Coprime","url":"https://codeforces.com/contest/1742/problem/D","rating":1100,"platform":"CF"},{"name":"Maximum Sum of Products","url":"https://codeforces.com/contest/1519/problem/D","rating":1600,"platform":"CF"}]},"2026-07-26":{"count":3,"problems":[{"name":"We Be Flipping (Easy Version)","url":"https://codeforces.com/contest/2229/problem/C1","rating":900,"platform":"CF"},{"name":"Heidi Learns Hashing (Easy)","url":"https://codeforces.com/contest/1184/problem/A1","rating":1200,"platform":"CF"},{"name":"Parallel Universes (Easy)","url":"https://codeforces.com/contest/1184/problem/D1","rating":1600,"platform":"CF"}]},"2026-07-25":{"count":4,"problems":[{"name":"George and Accommodation","url":"https://codeforces.com/contest/467/problem/A","rating":800,"platform":"CF"},{"name":"Juicer","url":"https://codeforces.com/contest/709/problem/A","rating":900,"platform":"CF"},{"name":"Tricky Sum","url":"https://codeforces.com/contest/598/problem/A","rating":900,"platform":"CF"},{"name":"Add Modulo 10","url":"https://codeforces.com/contest/1714/problem/E","rating":1400,"platform":"CF"}]},"2026-07-24":{"count":2,"problems":[{"name":"Calendar Ambiguity","url":"https://codeforces.com/contest/1389/problem/E","rating":2200,"platform":"CF"},{"name":"XORinacci","url":"https://codeforces.com/contest/1208/problem/A","rating":900,"platform":"CF"}]},"2026-07-23":{"count":4,"problems":[{"name":"Insomnia cure","url":"https://codeforces.com/contest/148/problem/A","rating":800,"platform":"CF"},{"name":"2023","url":"https://codeforces.com/contest/1916/problem/A","rating":800,"platform":"CF"},{"name":"Two Divisors","url":"https://codeforces.com/contest/1916/problem/B","rating":1000,"platform":"CF"},{"name":"Array Game","url":"https://codeforces.com/contest/1904/problem/C","rating":1400,"platform":"CF"}]},"2026-07-22":{"count":10,"problems":[{"name":"Dungeon","url":"https://codeforces.com/contest/2164/problem/C","rating":1400,"platform":"CF"},{"name":"Array","url":"https://codeforces.com/contest/300/problem/A","rating":1100,"platform":"CF"},{"name":"Swap Columns and Find a Path","url":"https://codeforces.com/contest/2046/problem/A","rating":1200,"platform":"CF"},{"name":"Ilya and a Colorful Walk","url":"https://codeforces.com/contest/1119/problem/A","rating":1100,"platform":"CF"},{"name":"Reachable Numbers","url":"https://codeforces.com/contest/1157/problem/A","rating":1100,"platform":"CF"},{"name":"Berland Poker","url":"https://codeforces.com/contest/1359/problem/A","rating":1000,"platform":"CF"},{"name":"Avoiding Zero","url":"https://codeforces.com/contest/1427/problem/A","rating":900,"platform":"CF"},{"name":"Shuffle Party","url":"https://codeforces.com/contest/1937/problem/A","rating":800,"platform":"CF"},{"name":"Minimal Coprime","url":"https://codeforces.com/contest/2063/problem/A","rating":800,"platform":"CF"},{"name":"Brogramming Contest","url":"https://codeforces.com/contest/2064/problem/A","rating":800,"platform":"CF"}]},"2026-07-21":{"count":1,"problems":[{"name":"Schedule Management","url":"https://codeforces.com/contest/1701/problem/C","rating":1400,"platform":"CF"}]},"2026-07-20":{"count":4,"problems":[{"name":"Teleporters (Easy Version)","url":"https://codeforces.com/contest/1791/problem/G1","rating":1100,"platform":"CF"},{"name":"Bogosort","url":"https://codeforces.com/contest/1312/problem/B","rating":1000,"platform":"CF"},{"name":"Maximum Sum","url":"https://codeforces.com/contest/1832/problem/B","rating":1100,"platform":"CF"},{"name":"Orac and Models","url":"https://codeforces.com/contest/1350/problem/B","rating":1400,"platform":"CF"}]},"2026-07-19":{"count":4,"problems":[{"name":"XXXXX","url":"https://codeforces.com/contest/1364/problem/A","rating":1200,"platform":"CF"},{"name":"An Alternative Way","url":"https://codeforces.com/contest/2241/problem/D","rating":1100,"platform":"CF"},{"name":"Zero Remainder Array","url":"https://codeforces.com/contest/1374/problem/D","rating":1400,"platform":"CF"},{"name":"Required Remainder","url":"https://codeforces.com/contest/1374/problem/A","rating":800,"platform":"CF"}]},"2026-07-18":{"count":7,"problems":[{"name":"Jumping Through Segments","url":"https://codeforces.com/contest/1907/problem/D","rating":1400,"platform":"CF"},{"name":"Inversion of a Subsequence","url":"https://codeforces.com/contest/2247/problem/C","rating":1100,"platform":"CF"},{"name":"Zero Sum","url":"https://codeforces.com/contest/2247/problem/A","rating":800,"platform":"CF"},{"name":"Yet Another Constructive","url":"https://codeforces.com/contest/2247/problem/B","rating":900,"platform":"CF"},{"name":"ABC467 A","url":"https://atcoder.jp/contests/abc467/tasks/abc467_a","rating":"100 pts","platform":"AC"},{"name":"ABC467 B","url":"https://atcoder.jp/contests/abc467/tasks/abc467_b","rating":"200 pts","platform":"AC"},{"name":"ABC467 C","url":"https://atcoder.jp/contests/abc467/tasks/abc467_c","rating":"300 pts","platform":"AC"}]},"2026-07-17":{"count":4,"problems":[{"name":"RemovevomeR","url":"https://codeforces.com/contest/2241/problem/C","rating":1000,"platform":"CF"},{"name":"Longest Regular Bracket Sequence","url":"https://codeforces.com/contest/5/problem/C","rating":1900,"platform":"CF"},{"name":"Delete and Concatenate","url":"https://codeforces.com/contest/2245/problem/B","rating":1100,"platform":"CF"},{"name":"Who Watches the Watchpig?","url":"https://codeforces.com/contest/2245/problem/A","rating":800,"platform":"CF"}]},"2026-07-16":{"count":4,"problems":[{"name":"Card Game","url":"https://codeforces.com/contest/1999/problem/B","rating":1000,"platform":"CF"},{"name":"Paint the Array","url":"https://codeforces.com/contest/1618/problem/C","rating":1100,"platform":"CF"},{"name":"Nastia and Nearly Good Numbers","url":"https://codeforces.com/contest/1521/problem/A","rating":1000,"platform":"CF"},{"name":"Hits Different","url":"https://codeforces.com/contest/1829/problem/G","rating":1600,"platform":"CF"}]},"2026-07-15":{"count":11,"problems":[{"name":"Preparing for Merge Sort","url":"https://codeforces.com/contest/847/problem/B","rating":1600,"platform":"CF"},{"name":"Division and Union","url":"https://codeforces.com/contest/1101/problem/C","rating":1500,"platform":"CF"},{"name":"Binary Palindromes","url":"https://codeforces.com/contest/1251/problem/B","rating":1400,"platform":"CF"},{"name":"Print Check","url":"https://codeforces.com/contest/631/problem/B","rating":1200,"platform":"CF"},{"name":"Update Queries","url":"https://codeforces.com/contest/1986/problem/C","rating":1100,"platform":"CF"},{"name":"Large Addition","url":"https://codeforces.com/contest/1984/problem/B","rating":1100,"platform":"CF"},{"name":"K-Sort","url":"https://codeforces.com/contest/1987/problem/B","rating":1000,"platform":"CF"},{"name":"Painting the Ribbon","url":"https://codeforces.com/contest/1954/problem/A","rating":900,"platform":"CF"},{"name":"Set","url":"https://codeforces.com/contest/2029/problem/A","rating":800,"platform":"CF"},{"name":"Greedy Monocarp","url":"https://codeforces.com/contest/2042/problem/A","rating":800,"platform":"CF"},{"name":"Wrong Addition","url":"https://codeforces.com/contest/1619/problem/C","rating":1200,"platform":"CF"}]},"2026-07-14":{"count":5,"problems":[{"name":"Balanced Substring","url":"https://codeforces.com/contest/873/problem/B","rating":1500,"platform":"CF"},{"name":"Yaroslav and Productivity","url":"https://codeforces.com/contest/2244/problem/D","rating":1200,"platform":"CF"},{"name":"Nikita and Books","url":"https://codeforces.com/contest/2244/problem/B","rating":800,"platform":"CF"},{"name":"Stepan and Permutation","url":"https://codeforces.com/contest/2244/problem/C","rating":1100,"platform":"CF"},{"name":"Iskander and Drawings","url":"https://codeforces.com/contest/2244/problem/A","rating":800,"platform":"CF"}]},"2026-07-13":{"count":4,"problems":[{"name":"Similar Pairs","url":"https://codeforces.com/contest/1360/problem/C","rating":1100,"platform":"CF"},{"name":"Mahmoud and a Triangle","url":"https://codeforces.com/contest/766/problem/B","rating":1000,"platform":"CF"},{"name":"Good times Good times","url":"https://codeforces.com/contest/2241/problem/B","rating":1100,"platform":"CF"},{"name":"Quantity of Strings","url":"https://codeforces.com/contest/150/problem/B","rating":1600,"platform":"CF"}]},"2026-07-12":{"count":4,"problems":[{"name":"Divide and Conquer","url":"https://codeforces.com/contest/2241/problem/A","rating":800,"platform":"CF"},{"name":"ezraft and Array","url":"https://codeforces.com/contest/2246/problem/B","rating":900,"platform":"CF"},{"name":"Final Boss","url":"https://codeforces.com/contest/1985/problem/F","rating":1500,"platform":"CF"},{"name":"farmpiggie and Subset Sum","url":"https://codeforces.com/contest/2246/problem/A","rating":800,"platform":"CF"}]},"2026-07-11":{"count":5,"problems":[{"name":"All Distinct","url":"https://codeforces.com/contest/1692/problem/B","rating":800,"platform":"CF"},{"name":"Marathon","url":"https://codeforces.com/contest/1692/problem/A","rating":800,"platform":"CF"},{"name":"2^Sort","url":"https://codeforces.com/contest/1692/problem/G","rating":1400,"platform":"CF"},{"name":"ABC466 A","url":"https://atcoder.jp/contests/abc466/tasks/abc466_a","rating":"100 pts","platform":"AC"},{"name":"ABC466 B","url":"https://atcoder.jp/contests/abc466/tasks/abc466_b","rating":"200 pts","platform":"AC"}]},"2026-07-10":{"count":4,"problems":[{"name":"Difference of GCDs","url":"https://codeforces.com/contest/1708/problem/B","rating":1100,"platform":"CF"},{"name":"AND Sequences","url":"https://codeforces.com/contest/1513/problem/B","rating":1400,"platform":"CF"},{"name":"Fedya and Array","url":"https://codeforces.com/contest/1793/problem/B","rating":1100,"platform":"CF"},{"name":"Maximum Strength","url":"https://codeforces.com/contest/1834/problem/B","rating":1000,"platform":"CF"}]},"2026-07-09":{"count":1,"problems":[{"name":"Bitwise Balancing","url":"https://codeforces.com/contest/2020/problem/C","rating":1400,"platform":"CF"}]},"2026-07-08":{"count":9,"problems":[{"name":"Queue","url":"https://codeforces.com/contest/490/problem/B","rating":1500,"platform":"CF"},{"name":"Reorder the Array","url":"https://codeforces.com/contest/1007/problem/A","rating":1300,"platform":"CF"},{"name":"Vitamins","url":"https://codeforces.com/contest/1042/problem/B","rating":1200,"platform":"CF"},{"name":"Equal XOR","url":"https://codeforces.com/contest/1944/problem/B","rating":1100,"platform":"CF"},{"name":"Donut Shops","url":"https://codeforces.com/contest/1373/problem/A","rating":1000,"platform":"CF"},{"name":"Array Stabilization","url":"https://codeforces.com/contest/1095/problem/B","rating":900,"platform":"CF"},{"name":"Parity Sort","url":"https://codeforces.com/contest/1851/problem/B","rating":800,"platform":"CF"},{"name":"Bazoka and Mocha's Array","url":"https://codeforces.com/contest/1975/problem/A","rating":800,"platform":"CF"},{"name":"Another Popcount Problem","url":"https://codeforces.com/contest/2240/problem/A","rating":800,"platform":"CF"}]},"2026-07-07":{"count":1,"problems":[{"name":"Walking Robot","url":"https://codeforces.com/contest/1154/problem/D","rating":1500,"platform":"CF"}]},"2026-07-06":{"count":4,"problems":[{"name":"Two Teams Composing","url":"https://codeforces.com/contest/1335/problem/C","rating":1100,"platform":"CF"},{"name":"Block Sequence","url":"https://codeforces.com/contest/1881/problem/E","rating":1500,"platform":"CF"},{"name":"Predominant Frequency Division","url":"https://codeforces.com/contest/2242/problem/B","rating":1000,"platform":"CF"},{"name":"Bigrams","url":"https://codeforces.com/contest/2242/problem/A","rating":800,"platform":"CF"}]},"2026-07-05":{"count":4,"problems":[{"name":"Ternary XOR","url":"https://codeforces.com/contest/1328/problem/C","rating":1200,"platform":"CF"},{"name":"Magic Numbers","url":"https://codeforces.com/contest/320/problem/A","rating":900,"platform":"CF"},{"name":"Mocha and Math","url":"https://codeforces.com/contest/1559/problem/A","rating":900,"platform":"CF"},{"name":"Dreamoon and Sums","url":"https://codeforces.com/contest/476/problem/C","rating":1600,"platform":"CF"}]},"2026-07-04":{"count":6,"problems":[{"name":"A and B and Compilation Errors","url":"https://codeforces.com/contest/519/problem/B","rating":1100,"platform":"CF"},{"name":"Dreamoon and Stairs","url":"https://codeforces.com/contest/476/problem/A","rating":1000,"platform":"CF"},{"name":"Olesya and Rodion","url":"https://codeforces.com/contest/584/problem/A","rating":1000,"platform":"CF"},{"name":"Bear and Friendship Condition","url":"https://codeforces.com/contest/771/problem/A","rating":1500,"platform":"CF"},{"name":"ABC465 A","url":"https://atcoder.jp/contests/abc465/tasks/abc465_a","rating":"100 pts","platform":"AC"},{"name":"ABC465 B","url":"https://atcoder.jp/contests/abc465/tasks/abc465_b","rating":"200 pts","platform":"AC"}]},"2026-07-03":{"count":4,"problems":[{"name":"Constructing the Array","url":"https://codeforces.com/contest/1353/problem/D","rating":1600,"platform":"CF"},{"name":"Vasya and Socks","url":"https://codeforces.com/contest/460/problem/A","rating":900,"platform":"CF"},{"name":"Business trip","url":"https://codeforces.com/contest/149/problem/A","rating":900,"platform":"CF"},{"name":"Two-gram","url":"https://codeforces.com/contest/977/problem/B","rating":900,"platform":"CF"}]},"2026-07-02":{"count":6,"problems":[{"name":"Recovering a Small String","url":"https://codeforces.com/contest/1931/problem/A","rating":800,"platform":"CF"},{"name":"Make Equal","url":"https://codeforces.com/contest/1931/problem/B","rating":800,"platform":"CF"},{"name":"Divisible Pairs","url":"https://codeforces.com/contest/1931/problem/D","rating":1300,"platform":"CF"},{"name":"Make Equal Again","url":"https://codeforces.com/contest/1931/problem/C","rating":1000,"platform":"CF"},{"name":"Rock and Lever","url":"https://codeforces.com/contest/1420/problem/B","rating":1200,"platform":"CF"},{"name":"Another Problem About Dividing Numbers","url":"https://codeforces.com/contest/1538/problem/D","rating":1700,"platform":"CF"}]},"2026-07-01":{"count":4,"problems":[{"name":"1D Eraser","url":"https://codeforces.com/contest/1873/problem/D","rating":800,"platform":"CF"},{"name":"Good Kid","url":"https://codeforces.com/contest/1873/problem/B","rating":800,"platform":"CF"},{"name":"Short Sort","url":"https://codeforces.com/contest/1873/problem/A","rating":800,"platform":"CF"},{"name":"Factorials and Powers of Two","url":"https://codeforces.com/contest/1646/problem/C","rating":1500,"platform":"CF"}]},"2026-06-30":{"count":4,"problems":[{"name":"Lecture","url":"https://codeforces.com/contest/499/problem/B","rating":1000,"platform":"CF"},{"name":"Translation","url":"https://codeforces.com/contest/41/problem/A","rating":800,"platform":"CF"},{"name":"Wrong Subtraction","url":"https://codeforces.com/contest/977/problem/A","rating":800,"platform":"CF"},{"name":"Kuroni and Impossible Calculation","url":"https://codeforces.com/contest/1305/problem/C","rating":1600,"platform":"CF"}]},"2026-06-29":{"count":4,"problems":[{"name":"Ilya and Bank Account","url":"https://codeforces.com/contest/313/problem/A","rating":900,"platform":"CF"},{"name":"Keyboard","url":"https://codeforces.com/contest/474/problem/A","rating":900,"platform":"CF"},{"name":"New Year's Number","url":"https://codeforces.com/contest/1475/problem/B","rating":900,"platform":"CF"},{"name":"Cirno and Number (Easy Version)","url":"https://codeforces.com/contest/2228/problem/C1","rating":1500,"platform":"CF"}]},"2026-06-28":{"count":4,"problems":[{"name":"Sereja and Suffixes","url":"https://codeforces.com/contest/368/problem/B","rating":1100,"platform":"CF"},{"name":"Cake Leveling","url":"https://codeforces.com/contest/2232/problem/B","rating":900,"platform":"CF"},{"name":"Convergence","url":"https://codeforces.com/contest/2232/problem/A","rating":800,"platform":"CF"},{"name":"Rotation Matching","url":"https://codeforces.com/contest/1365/problem/C","rating":1400,"platform":"CF"}]},"2026-06-27":{"count":4,"problems":[{"name":"Word","url":"https://codeforces.com/contest/59/problem/A","rating":800,"platform":"CF"},{"name":"Soldier and Bananas","url":"https://codeforces.com/contest/546/problem/A","rating":800,"platform":"CF"},{"name":"New Year Candles","url":"https://codeforces.com/contest/379/problem/A","rating":1000,"platform":"CF"},{"name":"Chipmunk Theo and Equality","url":"https://codeforces.com/contest/2231/problem/C","rating":1400,"platform":"CF"}]},"2026-06-26":{"count":4,"problems":[{"name":"Ilya and Queries","url":"https://codeforces.com/contest/313/problem/B","rating":1100,"platform":"CF"},{"name":"New Year Transportation","url":"https://codeforces.com/contest/500/problem/A","rating":1000,"platform":"CF"},{"name":"Football","url":"https://codeforces.com/contest/43/problem/A","rating":1000,"platform":"CF"},{"name":"Xenia and Bit Operations","url":"https://codeforces.com/contest/339/problem/D","rating":1700,"platform":"CF"}]},"2026-06-25":{"count":5,"problems":[{"name":"Bad Prices","url":"https://codeforces.com/contest/1213/problem/B","rating":1100,"platform":"CF"},{"name":"Chips Moving","url":"https://codeforces.com/contest/1213/problem/A","rating":900,"platform":"CF"},{"name":"Equalizing by Division (hard version)","url":"https://codeforces.com/contest/1213/problem/D2","rating":1600,"platform":"CF"},{"name":"Equalizing by Division (easy version)","url":"https://codeforces.com/contest/1213/problem/D1","rating":1500,"platform":"CF"},{"name":"Shovels and Swords","url":"https://codeforces.com/contest/1366/problem/A","rating":1100,"platform":"CF"}]},"2026-06-24":{"count":4,"problems":[{"name":"Fence","url":"https://codeforces.com/contest/363/problem/B","rating":1100,"platform":"CF"},{"name":"Sherlock and his girlfriend","url":"https://codeforces.com/contest/776/problem/B","rating":1200,"platform":"CF"},{"name":"Asuna and the Mosquitoes","url":"https://codeforces.com/contest/2092/problem/C","rating":1200,"platform":"CF"},{"name":"Elections in Saransk (easy version)","url":"https://codeforces.com/contest/2236/problem/F1","rating":1700,"platform":"CF"}]},"2026-06-23":{"count":5,"problems":[{"name":"Arpa’s hard exam and Mehrdad’s naive cheat","url":"https://codeforces.com/contest/742/problem/A","rating":1000,"platform":"CF"},{"name":"Laptops","url":"https://codeforces.com/contest/456/problem/A","rating":1100,"platform":"CF"},{"name":"Fancy Fence","url":"https://codeforces.com/contest/270/problem/A","rating":1100,"platform":"CF"},{"name":"AGAGA XOOORRR","url":"https://codeforces.com/contest/1516/problem/B","rating":1500,"platform":"CF"},{"name":"Quests","url":"https://codeforces.com/contest/1914/problem/C","rating":1100,"platform":"CF"}]},"2026-06-22":{"count":4,"problems":[{"name":"Eating Candies","url":"https://codeforces.com/contest/1669/problem/F","rating":1100,"platform":"CF"},{"name":"Fedor and New Game","url":"https://codeforces.com/contest/467/problem/B","rating":1100,"platform":"CF"},{"name":"Friendly Gifts","url":"https://codeforces.com/contest/2236/problem/E","rating":1700,"platform":"CF"},{"name":"Brand New Tatar TV Show","url":"https://codeforces.com/contest/2236/problem/D","rating":1300,"platform":"CF"}]},"2026-06-21":{"count":5,"problems":[{"name":"Coins and Queries","url":"https://codeforces.com/contest/1003/problem/D","rating":1600,"platform":"CF"},{"name":"Treasure","url":"https://codeforces.com/contest/494/problem/A","rating":1500,"platform":"CF"},{"name":"Video Posts","url":"https://codeforces.com/contest/1070/problem/K","rating":1100,"platform":"CF"},{"name":"Mere Array","url":"https://codeforces.com/contest/1401/problem/C","rating":1300,"platform":"CF"},{"name":"Bear and Elections","url":"https://codeforces.com/contest/574/problem/A","rating":1200,"platform":"CF"}]},"2026-06-20":{"count":8,"problems":[{"name":"Minimal Square","url":"https://codeforces.com/contest/1360/problem/A","rating":800,"platform":"CF"},{"name":"Honest Coach","url":"https://codeforces.com/contest/1360/problem/B","rating":800,"platform":"CF"},{"name":"Message Transmission Error (hard version)","url":"https://codeforces.com/contest/2010/problem/C2","rating":1700,"platform":"CF"},{"name":"Message Transmission Error (easy version)","url":"https://codeforces.com/contest/2010/problem/C1","rating":1400,"platform":"CF"},{"name":"ABC463 A","url":"https://atcoder.jp/contests/abc463/tasks/abc463_a","rating":"100 pts","platform":"AC"},{"name":"ABC463 B","url":"https://atcoder.jp/contests/abc463/tasks/abc463_b","rating":"200 pts","platform":"AC"},{"name":"ABC463 C","url":"https://atcoder.jp/contests/abc463/tasks/abc463_c","rating":"300 pts","platform":"AC"},{"name":"ABC463 D","url":"https://atcoder.jp/contests/abc463/tasks/abc463_d","rating":"400 pts","platform":"AC"}]},"2026-06-19":{"count":7,"problems":[{"name":"Spreadsheet","url":"https://codeforces.com/contest/1/problem/B","rating":1600,"platform":"CF"},{"name":"Mirror Grid","url":"https://codeforces.com/contest/1703/problem/E","rating":1200,"platform":"CF"},{"name":"Double Strings","url":"https://codeforces.com/contest/1703/problem/D","rating":1100,"platform":"CF"},{"name":"Cypher","url":"https://codeforces.com/contest/1703/problem/C","rating":800,"platform":"CF"},{"name":"ICPC Balloons","url":"https://codeforces.com/contest/1703/problem/B","rating":800,"platform":"CF"},{"name":"YES or YES?","url":"https://codeforces.com/contest/1703/problem/A","rating":800,"platform":"CF"},{"name":"Yet Another Problem About Pairs Satisfying an Inequality","url":"https://codeforces.com/contest/1703/problem/F","rating":1300,"platform":"CF"}]},"2026-06-18":{"count":5,"problems":[{"name":"Annoying the Ghost","url":"https://codeforces.com/contest/2237/problem/B","rating":1000,"platform":"CF"},{"name":"Duck Surplus","url":"https://codeforces.com/contest/2237/problem/C","rating":1000,"platform":"CF"},{"name":"Destroying Towers","url":"https://codeforces.com/contest/2237/problem/A","rating":800,"platform":"CF"},{"name":"Good Key, Bad Key","url":"https://codeforces.com/contest/1703/problem/G","rating":1600,"platform":"CF"},{"name":"New Palindrome","url":"https://codeforces.com/contest/1832/problem/A","rating":800,"platform":"CF"}]},"2026-06-17":{"count":3,"problems":[{"name":"Range Update Point Query","url":"https://codeforces.com/contest/1791/problem/F","rating":1500,"platform":"CF"},{"name":"Negatives and Positives","url":"https://codeforces.com/contest/1791/problem/E","rating":1100,"platform":"CF"},{"name":"Grouping Increases","url":"https://codeforces.com/contest/1919/problem/C","rating":1400,"platform":"CF"}]},"2026-06-16":{"count":4,"problems":[{"name":"Before an Exam","url":"https://codeforces.com/contest/4/problem/B","rating":1200,"platform":"CF"},{"name":"Mysterious Present","url":"https://codeforces.com/contest/4/problem/D","rating":1700,"platform":"CF"},{"name":"Bracket Coloring","url":"https://codeforces.com/contest/1837/problem/D","rating":1400,"platform":"CF"},{"name":"Best Binary String","url":"https://codeforces.com/contest/1837/problem/C","rating":1000,"platform":"CF"}]},"2026-06-15":{"count":3,"problems":[{"name":"Cost of a Bracket Sequence","url":"https://codeforces.com/contest/2233/problem/C","rating":1400,"platform":"CF"},{"name":"Nearest Beautiful Number (hard version)","url":"https://codeforces.com/contest/1560/problem/F2","rating":2100,"platform":"CF"},{"name":"Nearest Beautiful Number (easy version)","url":"https://codeforces.com/contest/1560/problem/F1","rating":1900,"platform":"CF"}]},"2026-06-14":{"count":6,"problems":[{"name":"Binary String Reconstruction","url":"https://codeforces.com/contest/1352/problem/F","rating":1500,"platform":"CF"},{"name":"Lucky?","url":"https://codeforces.com/contest/1676/problem/A","rating":800,"platform":"CF"},{"name":"Equal Candies","url":"https://codeforces.com/contest/1676/problem/B","rating":800,"platform":"CF"},{"name":"Most Similar Words","url":"https://codeforces.com/contest/1676/problem/C","rating":800,"platform":"CF"},{"name":"X-Sum","url":"https://codeforces.com/contest/1676/problem/D","rating":1000,"platform":"CF"},{"name":"Longest Strike","url":"https://codeforces.com/contest/1676/problem/F","rating":1300,"platform":"CF"}]},"2026-06-13":{"count":9,"problems":[{"name":"Maximum Crossings (Easy Version)","url":"https://codeforces.com/contest/1676/problem/H1","rating":1400,"platform":"CF"},{"name":"Maximum Crossings (Hard Version)","url":"https://codeforces.com/contest/1676/problem/H2","rating":1500,"platform":"CF"},{"name":"Sum of Odd Integers","url":"https://codeforces.com/contest/1327/problem/A","rating":1100,"platform":"CF"},{"name":"Elections","url":"https://codeforces.com/contest/1593/problem/A","rating":800,"platform":"CF"},{"name":"Save More Mice","url":"https://codeforces.com/contest/1593/problem/C","rating":1000,"platform":"CF"},{"name":"Half of Same","url":"https://codeforces.com/contest/1593/problem/D2","rating":1900,"platform":"CF"},{"name":"ABC462 A","url":"https://atcoder.jp/contests/abc462/tasks/abc462_a","rating":"100 pts","platform":"AC"},{"name":"ABC462 B","url":"https://atcoder.jp/contests/abc462/tasks/abc462_b","rating":"200 pts","platform":"AC"},{"name":"ABC462 C","url":"https://atcoder.jp/contests/abc462/tasks/abc462_c","rating":"300 pts","platform":"AC"}]},"2026-06-12":{"count":4,"problems":[{"name":"Omsk Programmers","url":"https://codeforces.com/contest/2236/problem/C","rating":1000,"platform":"CF"},{"name":"Tatar TV Show","url":"https://codeforces.com/contest/2236/problem/B","rating":800,"platform":"CF"},{"name":"Games on the Train","url":"https://codeforces.com/contest/2236/problem/A","rating":800,"platform":"CF"},{"name":"XOR, Expression and Two Binary Numbers","url":"https://codeforces.com/contest/2234/problem/D","rating":1500,"platform":"CF"}]},"2026-06-11":{"count":4,"problems":[{"name":"Sum of Round Numbers","url":"https://codeforces.com/contest/1352/problem/A","rating":800,"platform":"CF"},{"name":"Special Permutation","url":"https://codeforces.com/contest/1352/problem/G","rating":1600,"platform":"CF"},{"name":"Red-Blue Shuffle","url":"https://codeforces.com/contest/1459/problem/A","rating":800,"platform":"CF"},{"name":"Move and Turn","url":"https://codeforces.com/contest/1459/problem/B","rating":1300,"platform":"CF"}]},"2026-06-10":{"count":7,"problems":[{"name":"Row GCD","url":"https://codeforces.com/contest/1459/problem/C","rating":1600,"platform":"CF"},{"name":"Approximating a Constant Range","url":"https://codeforces.com/contest/602/problem/B","rating":1400,"platform":"CF"},{"name":"Different Distances","url":"https://codeforces.com/contest/2233/problem/B","rating":900,"platform":"CF"},{"name":"String","url":"https://codeforces.com/contest/2062/problem/A","rating":800,"platform":"CF"},{"name":"Cirno and Operations","url":"https://codeforces.com/contest/2062/problem/C","rating":1200,"platform":"CF"},{"name":"Clockwork","url":"https://codeforces.com/contest/2062/problem/B","rating":900,"platform":"CF"},{"name":"Minimal string","url":"https://codeforces.com/contest/797/problem/C","rating":1700,"platform":"CF"}]},"2026-06-09":{"count":12,"problems":[{"name":"AI Project Development","url":"https://codeforces.com/contest/2233/problem/A","rating":800,"platform":"CF"},{"name":"Find The Array","url":"https://codeforces.com/contest/1463/problem/B","rating":1400,"platform":"CF"},{"name":"Lunatic Never Content","url":"https://codeforces.com/contest/1826/problem/B","rating":1100,"platform":"CF"},{"name":"Multiplication Table","url":"https://codeforces.com/contest/577/problem/A","rating":1000,"platform":"CF"},{"name":"Bachgold Problem","url":"https://codeforces.com/contest/749/problem/A","rating":800,"platform":"CF"},{"name":"Equation","url":"https://codeforces.com/contest/1269/problem/A","rating":800,"platform":"CF"},{"name":"Buying a TV Set","url":"https://codeforces.com/contest/1041/problem/B","rating":1000,"platform":"CF"},{"name":"Nearly Lucky Number","url":"https://codeforces.com/contest/110/problem/A","rating":800,"platform":"CF"},{"name":"Kefa and Park","url":"https://codeforces.com/contest/580/problem/C","rating":1500,"platform":"CF"},{"name":"Gardener and Tree","url":"https://codeforces.com/contest/1593/problem/E","rating":1600,"platform":"CF"},{"name":"Christmas Spruce","url":"https://codeforces.com/contest/913/problem/B","rating":1200,"platform":"CF"},{"name":"All are Same","url":"https://codeforces.com/contest/1593/problem/D1","rating":1100,"platform":"CF"}]},"2026-06-08":{"count":5,"problems":[{"name":"Rumor","url":"https://codeforces.com/contest/893/problem/C","rating":1300,"platform":"CF"},{"name":"Seating Arrangement (Easy Version)","url":"https://codeforces.com/contest/2232/problem/C1","rating":1300,"platform":"CF"},{"name":"Seating Arrangement (Hard Version)","url":"https://codeforces.com/contest/2232/problem/C2","rating":1500,"platform":"CF"},{"name":"k-LCM (easy version)","url":"https://codeforces.com/contest/1497/problem/C1","rating":1200,"platform":"CF"},{"name":"k-LCM (hard version)","url":"https://codeforces.com/contest/1497/problem/C2","rating":1600,"platform":"CF"}]},"2026-06-07":{"count":9,"problems":[{"name":"Pythagorean Triples","url":"https://codeforces.com/contest/1487/problem/D","rating":1500,"platform":"CF"},{"name":"Vessels, Heights and Two Versions (Easy Version)","url":"https://codeforces.com/contest/2234/problem/C","rating":1200,"platform":"CF"},{"name":"Palindrome, Twelve and Two Terms","url":"https://codeforces.com/contest/2234/problem/B","rating":800,"platform":"CF"},{"name":"Euclid, Sequence and Two Numbers","url":"https://codeforces.com/contest/2234/problem/A","rating":800,"platform":"CF"},{"name":"Phone Numbers","url":"https://codeforces.com/contest/1060/problem/A","rating":800,"platform":"CF"},{"name":"Cashier","url":"https://codeforces.com/contest/1059/problem/A","rating":1000,"platform":"CF"},{"name":"ABC461 A","url":"https://atcoder.jp/contests/abc461/tasks/abc461_a","rating":"100 pts","platform":"AC"},{"name":"ABC461 B","url":"https://atcoder.jp/contests/abc461/tasks/abc461_b","rating":"200 pts","platform":"AC"},{"name":"ABC461 C","url":"https://atcoder.jp/contests/abc461/tasks/abc461_c","rating":"300 pts","platform":"AC"}]},"2026-06-06":{"count":3,"problems":[{"name":"Plus and Multiply","url":"https://codeforces.com/contest/1542/problem/B","rating":1500,"platform":"CF"},{"name":"Amr and Pins","url":"https://codeforces.com/contest/507/problem/B","rating":1400,"platform":"CF"},{"name":"k-th divisor","url":"https://codeforces.com/contest/762/problem/A","rating":1400,"platform":"CF"}]},"2026-06-05":{"count":2,"problems":[{"name":"Everything Everywhere","url":"https://codeforces.com/contest/2226/problem/B","rating":900,"platform":"CF"},{"name":"Johnny and Another Rating Drop","url":"https://codeforces.com/contest/1362/problem/C","rating":1400,"platform":"CF"}]},"2026-06-04":{"count":7,"problems":[{"name":"Eating Queries","url":"https://codeforces.com/contest/1676/problem/E","rating":1100,"platform":"CF"},{"name":"Doremy's Perfect Math Class","url":"https://codeforces.com/contest/1764/problem/B","rating":900,"platform":"CF"},{"name":"Just Eat It!","url":"https://codeforces.com/contest/1285/problem/B","rating":1300,"platform":"CF"},{"name":"Dice Roll Sequence","url":"https://codeforces.com/contest/2195/problem/C","rating":1100,"platform":"CF"},{"name":"Xenia and Ringroad","url":"https://codeforces.com/contest/339/problem/B","rating":1000,"platform":"CF"},{"name":"Raising Bacteria","url":"https://codeforces.com/contest/579/problem/A","rating":1000,"platform":"CF"},{"name":"Minimize the Difference","url":"https://codeforces.com/contest/2013/problem/D","rating":1900,"platform":"CF"}]},"2026-06-03":{"count":3,"problems":[{"name":"Combinatorics Homework","url":"https://codeforces.com/contest/1574/problem/B","rating":1100,"platform":"CF"},{"name":"Encrypting Messages","url":"https://codeforces.com/contest/177/problem/D2","rating":1500,"platform":"CF"},{"name":"Encrypting Messages","url":"https://codeforces.com/contest/177/problem/D1","rating":1200,"platform":"CF"}]},"2026-06-02":{"count":9,"problems":[{"name":"Boats Competition","url":"https://codeforces.com/contest/1399/problem/C","rating":1200,"platform":"CF"},{"name":"Karen and Game","url":"https://codeforces.com/contest/816/problem/C","rating":1700,"platform":"CF"},{"name":"Karen and Morning","url":"https://codeforces.com/contest/816/problem/A","rating":1000,"platform":"CF"},{"name":"K-divisible Sum","url":"https://codeforces.com/contest/1476/problem/A","rating":1000,"platform":"CF"},{"name":"Distinct Split","url":"https://codeforces.com/contest/1791/problem/D","rating":1000,"platform":"CF"},{"name":"Dragons","url":"https://codeforces.com/contest/230/problem/A","rating":1000,"platform":"CF"},{"name":"Karen and Coffee","url":"https://codeforces.com/contest/816/problem/B","rating":1400,"platform":"CF"},{"name":"Greg and Array","url":"https://codeforces.com/contest/295/problem/A","rating":1400,"platform":"CF"},{"name":"Find the Different Ones!","url":"https://codeforces.com/contest/1927/problem/D","rating":1300,"platform":"CF"}]},"2026-06-01":{"count":6,"problems":[{"name":"Candy Box (easy version)","url":"https://codeforces.com/contest/1183/problem/D","rating":1400,"platform":"CF"},{"name":"Construct an Array","url":"https://codeforces.com/contest/2231/problem/A","rating":800,"platform":"CF"},{"name":"Epic Transformation","url":"https://codeforces.com/contest/1506/problem/D","rating":1400,"platform":"CF"},{"name":"Almost Prime","url":"https://codeforces.com/contest/26/problem/A","rating":900,"platform":"CF"},{"name":"Regular Bracket Sequence","url":"https://codeforces.com/contest/26/problem/B","rating":1400,"platform":"CF"},{"name":"Exams","url":"https://codeforces.com/contest/479/problem/C","rating":1400,"platform":"CF"}]},"2026-05-31":{"count":1,"problems":[{"name":"Product 1 Modulo N","url":"https://codeforces.com/contest/1514/problem/C","rating":1600,"platform":"CF"}]},"2026-05-30":{"count":1,"problems":[{"name":"Make Them Equal","url":"https://codeforces.com/contest/1633/problem/D","rating":1600,"platform":"CF"}]},"2026-05-29":{"count":1,"problems":[{"name":"Kefa and Company","url":"https://codeforces.com/contest/580/problem/B","rating":1500,"platform":"CF"}]},"2026-05-28":{"count":4,"problems":[{"name":"Vasya and String","url":"https://codeforces.com/contest/676/problem/C","rating":1500,"platform":"CF"},{"name":"Binary Cut","url":"https://codeforces.com/contest/1971/problem/D","rating":1100,"platform":"CF"},{"name":"Copying Homework","url":"https://codeforces.com/contest/1252/problem/A","rating":1000,"platform":"CF"},{"name":"Down with Brackets","url":"https://codeforces.com/contest/2110/problem/B","rating":900,"platform":"CF"}]},"2026-05-27":{"count":2,"problems":[{"name":"Reverse a Permutation","url":"https://codeforces.com/contest/2193/problem/B","rating":800,"platform":"CF"},{"name":"Array Walk","url":"https://codeforces.com/contest/1389/problem/B","rating":1600,"platform":"CF"}]},"2026-05-26":{"count":2,"problems":[{"name":"Team","url":"https://codeforces.com/contest/401/problem/C","rating":1400,"platform":"CF"},{"name":"Phoenix and Beauty","url":"https://codeforces.com/contest/1348/problem/B","rating":1400,"platform":"CF"}]},"2026-05-25":{"count":1,"problems":[{"name":"MEX Game 1","url":"https://codeforces.com/contest/1943/problem/A","rating":1300,"platform":"CF"}]},"2026-05-24":{"count":1,"problems":[{"name":"Number Game","url":"https://codeforces.com/contest/1370/problem/C","rating":1400,"platform":"CF"}]},"2026-05-23":{"count":2,"problems":[{"name":"Hamburgers","url":"https://codeforces.com/contest/371/problem/C","rating":1600,"platform":"CF"},{"name":"Everything Nim","url":"https://codeforces.com/contest/1965/problem/A","rating":1400,"platform":"CF"}]},"2026-05-22":{"count":2,"problems":[{"name":"Magic Powder - 2","url":"https://codeforces.com/contest/670/problem/D2","rating":1500,"platform":"CF"},{"name":"Magic Powder - 1","url":"https://codeforces.com/contest/670/problem/D1","rating":1400,"platform":"CF"}]},"2026-05-21":{"count":2,"problems":[{"name":"Arrival of the General","url":"https://codeforces.com/contest/144/problem/A","rating":800,"platform":"CF"},{"name":"Special Elements","url":"https://codeforces.com/contest/1352/problem/E","rating":1500,"platform":"CF"}]},"2026-05-20":{"count":1,"problems":[{"name":"Drazil and Factorial","url":"https://codeforces.com/contest/515/problem/C","rating":1400,"platform":"CF"}]},"2026-05-19":{"count":6,"problems":[{"name":"Manhattan Circle","url":"https://codeforces.com/contest/1985/problem/D","rating":900,"platform":"CF"},{"name":"Good Prefixes","url":"https://codeforces.com/contest/1985/problem/C","rating":1000,"platform":"CF"},{"name":"Maximum Multiple Sum","url":"https://codeforces.com/contest/1985/problem/B","rating":800,"platform":"CF"},{"name":"Creating Words","url":"https://codeforces.com/contest/1985/problem/A","rating":800,"platform":"CF"},{"name":"Preparing Olympiad","url":"https://codeforces.com/contest/550/problem/B","rating":1400,"platform":"CF"},{"name":"Powered Addition","url":"https://codeforces.com/contest/1338/problem/A","rating":1500,"platform":"CF"}]},"2026-05-18":{"count":5,"problems":[{"name":"Optimal Purchase","url":"https://codeforces.com/contest/2230/problem/A","rating":800,"platform":"CF"},{"name":"Little Girl and Game","url":"https://codeforces.com/contest/276/problem/B","rating":1300,"platform":"CF"},{"name":"Mean Inequality","url":"https://codeforces.com/contest/1526/problem/A","rating":800,"platform":"CF"},{"name":"Potions (Hard Version)","url":"https://codeforces.com/contest/1526/problem/C2","rating":1600,"platform":"CF"},{"name":"Potions (Easy Version)","url":"https://codeforces.com/contest/1526/problem/C1","rating":1500,"platform":"CF"}]},"2026-05-17":{"count":1,"problems":[{"name":"Fadi and LCM","url":"https://codeforces.com/contest/1285/problem/C","rating":1400,"platform":"CF"}]},"2026-05-16":{"count":4,"problems":[{"name":"Remilia Plays Soku","url":"https://codeforces.com/contest/2228/problem/B","rating":1100,"platform":"CF"},{"name":"Marisa Steals Reimu's Takeout","url":"https://codeforces.com/contest/2228/problem/A","rating":800,"platform":"CF"},{"name":"Consecutive Subsequence","url":"https://codeforces.com/contest/977/problem/F","rating":1700,"platform":"CF"},{"name":"Split","url":"https://codeforces.com/contest/2158/problem/B","rating":1200,"platform":"CF"}]},"2026-05-15":{"count":3,"problems":[{"name":"Zhily and Mex and Max","url":"https://codeforces.com/contest/2224/problem/B","rating":1200,"platform":"CF"},{"name":"Even-Odd Game","url":"https://codeforces.com/contest/1472/problem/D","rating":1200,"platform":"CF"},{"name":"Woodcutters","url":"https://codeforces.com/contest/545/problem/C","rating":1500,"platform":"CF"}]},"2026-05-14":{"count":2,"problems":[{"name":"Gray's numerical sequence","url":"https://codeforces.com/contest/106035/problem/K","rating":null,"platform":"CF"},{"name":"Pair of Topics","url":"https://codeforces.com/contest/1324/problem/D","rating":1400,"platform":"CF"}]},"2026-05-13":{"count":1,"problems":[{"name":"Number of Pairs","url":"https://codeforces.com/contest/1538/problem/C","rating":1300,"platform":"CF"}]},"2026-05-12":{"count":2,"problems":[{"name":"Red Versus Blue","url":"https://codeforces.com/contest/1659/problem/A","rating":1000,"platform":"CF"},{"name":"3SUM","url":"https://codeforces.com/contest/1692/problem/F","rating":1300,"platform":"CF"}]},"2026-05-11":{"count":3,"problems":[{"name":"Move Brackets","url":"https://codeforces.com/contest/1374/problem/C","rating":1000,"platform":"CF"},{"name":"Vanya and Lanterns","url":"https://codeforces.com/contest/492/problem/B","rating":1200,"platform":"CF"},{"name":"Divisibility by Eight","url":"https://codeforces.com/contest/550/problem/C","rating":1500,"platform":"CF"}]},"2026-05-10":{"count":1,"problems":[{"name":"Good Subarrays","url":"https://codeforces.com/contest/1398/problem/C","rating":1600,"platform":"CF"}]},"2026-05-09":{"count":2,"problems":[{"name":"Mortal Kombat Tower","url":"https://codeforces.com/contest/1418/problem/C","rating":1500,"platform":"CF"},{"name":"Basketball Exercise","url":"https://codeforces.com/contest/1195/problem/C","rating":1400,"platform":"CF"}]},"2026-05-08":{"count":1,"problems":[{"name":"Maximum Median","url":"https://codeforces.com/contest/1201/problem/C","rating":1400,"platform":"CF"}]},"2026-05-07":{"count":4,"problems":[{"name":"Zero Array","url":"https://codeforces.com/contest/1201/problem/B","rating":1500,"platform":"CF"},{"name":"Vlad and Division","url":"https://codeforces.com/contest/1926/problem/D","rating":1300,"platform":"CF"},{"name":"Winner","url":"https://codeforces.com/contest/2/problem/A","rating":1500,"platform":"CF"},{"name":"Vlad and a Sum of Sum of Digits","url":"https://codeforces.com/contest/1926/problem/C","rating":1200,"platform":"CF"}]},"2026-05-06":{"count":1,"problems":[{"name":"Tea Queue","url":"https://codeforces.com/contest/920/problem/B","rating":1200,"platform":"CF"}]},"2026-05-05":{"count":2,"problems":[{"name":"Indian Summer","url":"https://codeforces.com/contest/44/problem/A","rating":900,"platform":"CF"},{"name":"Meximum Array 2","url":"https://codeforces.com/contest/2157/problem/C","rating":1400,"platform":"CF"}]},"2026-05-04":{"count":1,"problems":[{"name":"Pipeline","url":"https://codeforces.com/contest/287/problem/B","rating":1700,"platform":"CF"}]},"2026-05-03":{"count":1,"problems":[{"name":"Vacations","url":"https://codeforces.com/contest/698/problem/A","rating":1400,"platform":"CF"}]},"2026-05-02":{"count":1,"problems":[{"name":"Boredom","url":"https://codeforces.com/contest/455/problem/A","rating":1500,"platform":"CF"}]},"2026-05-01":{"count":1,"problems":[{"name":"Adding Digits","url":"https://codeforces.com/contest/260/problem/A","rating":1400,"platform":"CF"}]},"2026-04-30":{"count":5,"problems":[{"name":"Palindromex","url":"https://codeforces.com/contest/2227/problem/D","rating":1200,"platform":"CF"},{"name":"Snowfall","url":"https://codeforces.com/contest/2227/problem/C","rating":800,"platform":"CF"},{"name":"Party Monster","url":"https://codeforces.com/contest/2227/problem/B","rating":800,"platform":"CF"},{"name":"Koshary","url":"https://codeforces.com/contest/2227/problem/A","rating":800,"platform":"CF"},{"name":"Ancient Prophesy","url":"https://codeforces.com/contest/260/problem/B","rating":1600,"platform":"CF"}]},"2026-04-29":{"count":3,"problems":[{"name":"Array","url":"https://codeforces.com/contest/2209/problem/B","rating":900,"platform":"CF"},{"name":"Course Wishes","url":"https://codeforces.com/contest/2216/problem/A","rating":900,"platform":"CF"},{"name":"DZY Loves Chessboard","url":"https://codeforces.com/contest/445/problem/A","rating":1200,"platform":"CF"}]},"2026-04-28":{"count":3,"problems":[{"name":"Stripes","url":"https://codeforces.com/contest/1742/problem/C","rating":900,"platform":"CF"},{"name":"Klever Permutation","url":"https://codeforces.com/contest/1927/problem/E","rating":1400,"platform":"CF"},{"name":"Taxi","url":"https://codeforces.com/contest/158/problem/B","rating":1100,"platform":"CF"}]},"2026-04-27":{"count":1,"problems":[{"name":"Grid Covering","url":"https://codeforces.com/contest/2217/problem/C","rating":1300,"platform":"CF"}]},"2026-04-26":{"count":1,"problems":[{"name":"Table Decorations","url":"https://codeforces.com/contest/478/problem/C","rating":1800,"platform":"CF"}]},"2026-04-25":{"count":2,"problems":[{"name":"Queue","url":"https://codeforces.com/contest/545/problem/D","rating":1300,"platform":"CF"},{"name":"A Wonderful Contest","url":"https://codeforces.com/contest/2222/problem/A","rating":800,"platform":"CF"}]},"2026-04-24":{"count":1,"problems":[{"name":"Stones on the Table","url":"https://codeforces.com/contest/266/problem/A","rating":800,"platform":"CF"}]},"2026-04-23":{"count":1,"problems":[{"name":"Ternary String","url":"https://codeforces.com/contest/1354/problem/B","rating":1200,"platform":"CF"}]},"2026-04-22":{"count":1,"problems":[{"name":"Romantic Glasses","url":"https://codeforces.com/contest/1915/problem/E","rating":1300,"platform":"CF"}]},"2026-04-21":{"count":4,"problems":[{"name":"Red-Black Pairs","url":"https://codeforces.com/contest/2225/problem/C","rating":1100,"platform":"CF"},{"name":"Alternating String","url":"https://codeforces.com/contest/2225/problem/B","rating":900,"platform":"CF"},{"name":"A Number Between Two Others","url":"https://codeforces.com/contest/2225/problem/A","rating":800,"platform":"CF"},{"name":"Dreamoon and WiFi","url":"https://codeforces.com/contest/476/problem/B","rating":1300,"platform":"CF"}]},"2026-04-20":{"count":1,"problems":[{"name":"Arranging The Sheep","url":"https://codeforces.com/contest/1520/problem/E","rating":1400,"platform":"CF"}]},"2026-04-19":{"count":1,"problems":[{"name":"Wonder Room","url":"https://codeforces.com/contest/466/problem/B","rating":2000,"platform":"CF"}]},"2026-04-18":{"count":4,"problems":[{"name":"Bear and Big Brother","url":"https://codeforces.com/contest/791/problem/A","rating":800,"platform":"CF"},{"name":"Palindrome Game (hard version)","url":"https://codeforces.com/contest/1527/problem/B2","rating":1900,"platform":"CF"},{"name":"Palindrome Game (easy version)","url":"https://codeforces.com/contest/1527/problem/B1","rating":1200,"platform":"CF"},{"name":"Omkar and Last Class of Math","url":"https://codeforces.com/contest/1372/problem/B","rating":1300,"platform":"CF"}]},"2026-04-17":{"count":1,"problems":[{"name":"I Hate 1111","url":"https://codeforces.com/contest/1526/problem/B","rating":1400,"platform":"CF"}]},"2026-04-16":{"count":1,"problems":[{"name":"Random Teams","url":"https://codeforces.com/contest/478/problem/B","rating":1300,"platform":"CF"}]},"2026-04-15":{"count":2,"problems":[{"name":"Two Substrings","url":"https://codeforces.com/contest/550/problem/A","rating":1500,"platform":"CF"},{"name":"Word Capitalization","url":"https://codeforces.com/contest/281/problem/A","rating":800,"platform":"CF"}]},"2026-04-14":{"count":1,"problems":[{"name":"Little Girl and Maximum Sum","url":"https://codeforces.com/contest/276/problem/C","rating":1500,"platform":"CF"}]},"2026-04-13":{"count":1,"problems":[{"name":"Buying Shovels","url":"https://codeforces.com/contest/1360/problem/D","rating":1300,"platform":"CF"}]},"2026-04-12":{"count":1,"problems":[{"name":"Polycarp and Div 3","url":"https://codeforces.com/contest/1005/problem/D","rating":1500,"platform":"CF"}]},"2026-04-11":{"count":1,"problems":[{"name":"Decrease the Sum of Digits","url":"https://codeforces.com/contest/1409/problem/D","rating":1500,"platform":"CF"}]},"2026-04-10":{"count":1,"problems":[{"name":"Hossam and Trainees","url":"https://codeforces.com/contest/1771/problem/C","rating":1600,"platform":"CF"}]},"2026-04-09":{"count":1,"problems":[{"name":"Pashmak and Flowers","url":"https://codeforces.com/contest/459/problem/B","rating":1300,"platform":"CF"}]},"2026-04-08":{"count":2,"problems":[{"name":"The Equalizer","url":"https://codeforces.com/contest/2217/problem/A","rating":800,"platform":"CF"},{"name":"Add 0 or K","url":"https://codeforces.com/contest/2134/problem/B","rating":1200,"platform":"CF"}]},"2026-04-07":{"count":1,"problems":[{"name":"Given Length and Sum of Digits...","url":"https://codeforces.com/contest/489/problem/C","rating":1400,"platform":"CF"}]},"2026-04-06":{"count":1,"problems":[{"name":"Two Buttons","url":"https://codeforces.com/contest/520/problem/B","rating":1400,"platform":"CF"}]},"2026-04-05":{"count":1,"problems":[{"name":"Product Queries","url":"https://codeforces.com/contest/2193/problem/E","rating":1300,"platform":"CF"}]},"2026-04-04":{"count":5,"problems":[{"name":"The 67th OEIS Problem","url":"https://codeforces.com/contest/2218/problem/D","rating":1100,"platform":"CF"},{"name":"The 67th Permutation Problem","url":"https://codeforces.com/contest/2218/problem/C","rating":800,"platform":"CF"},{"name":"The 67th 6-7 Integer Problem","url":"https://codeforces.com/contest/2218/problem/B","rating":800,"platform":"CF"},{"name":"The 67th Integer Problem","url":"https://codeforces.com/contest/2218/problem/A","rating":800,"platform":"CF"},{"name":"Divide and Equalize","url":"https://codeforces.com/contest/1881/problem/D","rating":1300,"platform":"CF"}]},"2026-04-03":{"count":5,"problems":[{"name":"Numbers Box","url":"https://codeforces.com/contest/1447/problem/B","rating":1000,"platform":"CF"},{"name":"Different Divisors","url":"https://codeforces.com/contest/1474/problem/B","rating":1000,"platform":"CF"},{"name":"Add and Divide","url":"https://codeforces.com/contest/1485/problem/A","rating":1000,"platform":"CF"},{"name":"Odd Selection","url":"https://codeforces.com/contest/1363/problem/A","rating":1200,"platform":"CF"},{"name":"Heapify 1","url":"https://codeforces.com/contest/2195/problem/B","rating":900,"platform":"CF"}]},"2026-04-02":{"count":2,"problems":[{"name":"Sorting Game","url":"https://codeforces.com/contest/2190/problem/A","rating":1200,"platform":"CF"},{"name":"Friendly Numbers","url":"https://codeforces.com/contest/2197/problem/A","rating":800,"platform":"CF"}]},"2026-04-01":{"count":6,"problems":[{"name":"Odd One Out","url":"https://codeforces.com/contest/2214/problem/A","rating":null,"platform":"CF"},{"name":"Would It Be Unrated?","url":"https://codeforces.com/contest/2095/problem/C","rating":null,"platform":"CF"},{"name":"Piecing It Together","url":"https://codeforces.com/contest/2095/problem/A","rating":null,"platform":"CF"},{"name":"Anna and the Valentine's Day Gift","url":"https://codeforces.com/contest/1931/problem/E","rating":1400,"platform":"CF"},{"name":"Sieve of Erato67henes","url":"https://codeforces.com/contest/2195/problem/A","rating":800,"platform":"CF"},{"name":"Parkour Design","url":"https://codeforces.com/contest/2202/problem/A","rating":800,"platform":"CF"}]},"2026-03-31":{"count":1,"problems":[{"name":"Cat Cycle","url":"https://codeforces.com/contest/1487/problem/B","rating":1200,"platform":"CF"}]},"2026-03-30":{"count":1,"problems":[{"name":"Sort the Array","url":"https://codeforces.com/contest/451/problem/B","rating":1300,"platform":"CF"}]},"2026-03-29":{"count":3,"problems":[{"name":"Simply Sitting on Chairs","url":"https://codeforces.com/contest/2210/problem/B","rating":900,"platform":"CF"},{"name":"A Simple Sequence","url":"https://codeforces.com/contest/2210/problem/A","rating":800,"platform":"CF"},{"name":"M-arrays","url":"https://codeforces.com/contest/1497/problem/B","rating":1200,"platform":"CF"}]},"2026-03-28":{"count":2,"problems":[{"name":"Antimedian Deletion","url":"https://codeforces.com/contest/2211/problem/A","rating":800,"platform":"CF"},{"name":"IQ test","url":"https://codeforces.com/contest/25/problem/A","rating":1300,"platform":"CF"}]},"2026-03-27":{"count":1,"problems":[{"name":"Books","url":"https://codeforces.com/contest/279/problem/B","rating":1400,"platform":"CF"}]},"2026-03-26":{"count":2,"problems":[{"name":"Less or Equal","url":"https://codeforces.com/contest/977/problem/C","rating":1200,"platform":"CF"},{"name":"Expression","url":"https://codeforces.com/contest/479/problem/A","rating":1000,"platform":"CF"}]},"2026-03-25":{"count":1,"problems":[{"name":"AND 0, Sum Big","url":"https://codeforces.com/contest/1514/problem/B","rating":1200,"platform":"CF"}]},"2026-03-24":{"count":1,"problems":[{"name":"Prinzessin der Verurteilung","url":"https://codeforces.com/contest/1536/problem/B","rating":1200,"platform":"CF"}]},"2026-03-23":{"count":1,"problems":[{"name":"Product of Three Numbers","url":"https://codeforces.com/contest/1294/problem/C","rating":1300,"platform":"CF"}]},"2026-03-22":{"count":2,"problems":[{"name":"Road To Zero","url":"https://codeforces.com/contest/1342/problem/A","rating":1000,"platform":"CF"},{"name":"Flipping Game","url":"https://codeforces.com/contest/327/problem/A","rating":1200,"platform":"CF"}]},"2026-03-21":{"count":1,"problems":[{"name":"Petya and Strings","url":"https://codeforces.com/contest/112/problem/A","rating":800,"platform":"CF"}]},"2026-03-20":{"count":1,"problems":[{"name":"Sale","url":"https://codeforces.com/contest/34/problem/B","rating":900,"platform":"CF"}]},"2026-03-19":{"count":2,"problems":[{"name":"Number of Ways","url":"https://codeforces.com/contest/466/problem/C","rating":1700,"platform":"CF"},{"name":"Cut Ribbon","url":"https://codeforces.com/contest/189/problem/A","rating":1300,"platform":"CF"}]},"2026-03-18":{"count":4,"problems":[{"name":"Flowers","url":"https://codeforces.com/contest/474/problem/D","rating":1700,"platform":"CF"},{"name":"Black and White Stripe","url":"https://codeforces.com/contest/1690/problem/D","rating":1000,"platform":"CF"},{"name":"Shoe Shuffling","url":"https://codeforces.com/contest/1691/problem/B","rating":1000,"platform":"CF"},{"name":"Stable Groups","url":"https://codeforces.com/contest/1539/problem/C","rating":1200,"platform":"CF"}]},"2026-03-17":{"count":3,"problems":[{"name":"Minimum Product","url":"https://codeforces.com/contest/1409/problem/B","rating":1100,"platform":"CF"},{"name":"Odd Grasshopper","url":"https://codeforces.com/contest/1607/problem/B","rating":900,"platform":"CF"},{"name":"Pleasant Pairs","url":"https://codeforces.com/contest/1541/problem/B","rating":1200,"platform":"CF"}]},"2026-03-16":{"count":5,"problems":[{"name":"Right Maximum","url":"https://codeforces.com/contest/2204/problem/B","rating":800,"platform":"CF"},{"name":"Spring","url":"https://codeforces.com/contest/2204/problem/C","rating":1000,"platform":"CF"},{"name":"Passing the Ball","url":"https://codeforces.com/contest/2204/problem/A","rating":800,"platform":"CF"},{"name":"Luke is a Foodie","url":"https://codeforces.com/contest/1704/problem/B","rating":1000,"platform":"CF"},{"name":"Grandma Capa Knits a Scarf","url":"https://codeforces.com/contest/1582/problem/C","rating":1200,"platform":"CF"}]},"2026-03-15":{"count":1,"problems":[{"name":"Same Parity Summands","url":"https://codeforces.com/contest/1352/problem/B","rating":1200,"platform":"CF"}]},"2026-03-14":{"count":3,"problems":[{"name":"Bingo Candies","url":"https://codeforces.com/contest/2208/problem/A","rating":800,"platform":"CF"},{"name":"Array Cloning Technique","url":"https://codeforces.com/contest/1665/problem/B","rating":900,"platform":"CF"},{"name":"Make Them Equal","url":"https://codeforces.com/contest/1594/problem/C","rating":1200,"platform":"CF"}]},"2026-03-13":{"count":3,"problems":[{"name":"AB Balance","url":"https://codeforces.com/contest/1606/problem/A","rating":900,"platform":"CF"},{"name":"Differential Sorting","url":"https://codeforces.com/contest/1635/problem/C","rating":1200,"platform":"CF"},{"name":"Beautiful Array","url":"https://codeforces.com/contest/1715/problem/B","rating":1000,"platform":"CF"}]},"2026-03-12":{"count":2,"problems":[{"name":"Minimum LCM","url":"https://codeforces.com/contest/1765/problem/M","rating":1000,"platform":"CF"},{"name":"Make it Divisible by 25","url":"https://codeforces.com/contest/1593/problem/B","rating":900,"platform":"CF"}]},"2026-03-11":{"count":2,"problems":[{"name":"Dolce Vita","url":"https://codeforces.com/contest/1671/problem/C","rating":1200,"platform":"CF"},{"name":"Case of the Zeros and Ones","url":"https://codeforces.com/contest/556/problem/A","rating":900,"platform":"CF"}]},"2026-03-10":{"count":1,"problems":[{"name":"Stone Age Problem","url":"https://codeforces.com/contest/1679/problem/B","rating":1200,"platform":"CF"}]},"2026-03-09":{"count":5,"problems":[{"name":"Exciting Bets","url":"https://codeforces.com/contest/1543/problem/A","rating":900,"platform":"CF"},{"name":"EhAb AnD gCd","url":"https://codeforces.com/contest/1325/problem/A","rating":800,"platform":"CF"},{"name":"Moore's Law","url":"https://codeforces.com/contest/630/problem/B","rating":1200,"platform":"CF"},{"name":"Monsters","url":"https://codeforces.com/contest/1849/problem/B","rating":1000,"platform":"CF"},{"name":"Kuriyama Mirai's Stones","url":"https://codeforces.com/contest/433/problem/B","rating":1200,"platform":"CF"}]},"2026-03-08":{"count":2,"problems":[{"name":"Luntik and Subsequences","url":"https://codeforces.com/contest/1582/problem/B","rating":900,"platform":"CF"},{"name":"BerSU Ball","url":"https://codeforces.com/contest/489/problem/B","rating":1200,"platform":"CF"}]},"2026-03-07":{"count":2,"problems":[{"name":"Basketball Together","url":"https://codeforces.com/contest/1725/problem/B","rating":1000,"platform":"CF"},{"name":"Same Differences","url":"https://codeforces.com/contest/1520/problem/D","rating":1200,"platform":"CF"}]},"2026-03-06":{"count":1,"problems":[{"name":"Chewbaсca and Number","url":"https://codeforces.com/contest/514/problem/A","rating":1200,"platform":"CF"}]},"2026-03-05":{"count":2,"problems":[{"name":"Strange Partition","url":"https://codeforces.com/contest/1471/problem/A","rating":900,"platform":"CF"},{"name":"Binary Deque","url":"https://codeforces.com/contest/1692/problem/E","rating":1200,"platform":"CF"}]},"2026-03-04":{"count":4,"problems":[{"name":"Sum of Medians","url":"https://codeforces.com/contest/1440/problem/B","rating":900,"platform":"CF"},{"name":"Cheap Travel","url":"https://codeforces.com/contest/466/problem/A","rating":1200,"platform":"CF"},{"name":"Make AP","url":"https://codeforces.com/contest/1624/problem/B","rating":900,"platform":"CF"},{"name":"Three Indices","url":"https://codeforces.com/contest/1380/problem/A","rating":900,"platform":"CF"}]},"2026-03-03":{"count":5,"problems":[{"name":"01 Game","url":"https://codeforces.com/contest/1373/problem/B","rating":900,"platform":"CF"},{"name":"Deletive Editing","url":"https://codeforces.com/contest/1666/problem/D","rating":900,"platform":"CF"},{"name":"Make It Increasing","url":"https://codeforces.com/contest/1675/problem/B","rating":900,"platform":"CF"},{"name":"AvtoBus","url":"https://codeforces.com/contest/1679/problem/A","rating":900,"platform":"CF"},{"name":"Virus","url":"https://codeforces.com/contest/1704/problem/C","rating":1200,"platform":"CF"}]},"2026-03-02":{"count":17,"problems":[{"name":"Removing Smallest Multiples","url":"https://codeforces.com/contest/1734/problem/C","rating":1200,"platform":"CF"},{"name":"Scuza","url":"https://codeforces.com/contest/1742/problem/E","rating":1200,"platform":"CF"},{"name":"Sereja and Dima","url":"https://codeforces.com/contest/381/problem/A","rating":800,"platform":"CF"},{"name":"Pair Programming","url":"https://codeforces.com/contest/1547/problem/C","rating":1100,"platform":"CF"},{"name":"Traffic Light","url":"https://codeforces.com/contest/1744/problem/C","rating":1000,"platform":"CF"},{"name":"Alternating Subsequence","url":"https://codeforces.com/contest/1343/problem/C","rating":1200,"platform":"CF"},{"name":"Balanced Team","url":"https://codeforces.com/contest/1133/problem/C","rating":1200,"platform":"CF"},{"name":"Queries about less or equal elements","url":"https://codeforces.com/contest/600/problem/B","rating":1300,"platform":"CF"},{"name":"Interesting drink","url":"https://codeforces.com/contest/706/problem/B","rating":1100,"platform":"CF"},{"name":"T-primes","url":"https://codeforces.com/contest/230/problem/B","rating":1300,"platform":"CF"},{"name":"Worms","url":"https://codeforces.com/contest/474/problem/B","rating":1200,"platform":"CF"},{"name":"Registration System","url":"https://codeforces.com/contest/4/problem/C","rating":1300,"platform":"CF"},{"name":"Tom Riddle's Diary","url":"https://codeforces.com/contest/855/problem/A","rating":800,"platform":"CF"},{"name":"Boxes Packing","url":"https://codeforces.com/contest/903/problem/C","rating":1200,"platform":"CF"},{"name":"Chat Order","url":"https://codeforces.com/contest/637/problem/B","rating":1200,"platform":"CF"},{"name":"Last minute enhancements","url":"https://codeforces.com/contest/1466/problem/B","rating":800,"platform":"CF"},{"name":"Generous Kefa","url":"https://codeforces.com/contest/841/problem/A","rating":900,"platform":"CF"}]},"2026-03-01":{"count":4,"problems":[{"name":"NIT Destroys the Universe","url":"https://codeforces.com/contest/1696/problem/B","rating":900,"platform":"CF"},{"name":"Matryoshkas","url":"https://codeforces.com/contest/1790/problem/D","rating":1200,"platform":"CF"},{"name":"Mainak and Array","url":"https://codeforces.com/contest/1726/problem/A","rating":900,"platform":"CF"},{"name":"Not Dividing","url":"https://codeforces.com/contest/1794/problem/B","rating":900,"platform":"CF"}]},"2026-02-28":{"count":2,"problems":[{"name":"Dora and Search","url":"https://codeforces.com/contest/1793/problem/C","rating":1200,"platform":"CF"},{"name":"Portal","url":"https://codeforces.com/contest/2200/problem/D","rating":1300,"platform":"CF"}]},"2026-02-27":{"count":7,"problems":[{"name":"Specialty String","url":"https://codeforces.com/contest/2200/problem/C","rating":900,"platform":"CF"},{"name":"Playing in a Casino","url":"https://codeforces.com/contest/1808/problem/B","rating":1200,"platform":"CF"},{"name":"Deletion Sort","url":"https://codeforces.com/contest/2200/problem/B","rating":800,"platform":"CF"},{"name":"Eating Game","url":"https://codeforces.com/contest/2200/problem/A","rating":800,"platform":"CF"},{"name":"Odd Queries","url":"https://codeforces.com/contest/1807/problem/D","rating":900,"platform":"CF"},{"name":"Simons and Making It Beautiful","url":"https://codeforces.com/contest/2205/problem/A","rating":800,"platform":"CF"},{"name":"Simons and Cakes for Success","url":"https://codeforces.com/contest/2205/problem/B","rating":800,"platform":"CF"}]},"2026-02-26":{"count":3,"problems":[{"name":"Permutation Swap","url":"https://codeforces.com/contest/1828/problem/B","rating":900,"platform":"CF"},{"name":"Comparison String","url":"https://codeforces.com/contest/1837/problem/B","rating":900,"platform":"CF"},{"name":"Contrast Value","url":"https://codeforces.com/contest/1832/problem/C","rating":1200,"platform":"CF"}]},"2026-02-25":{"count":3,"problems":[{"name":"Beautiful Numbers","url":"https://codeforces.com/contest/2203/problem/B","rating":1000,"platform":"CF"},{"name":"Towers of Boxes","url":"https://codeforces.com/contest/2203/problem/A","rating":800,"platform":"CF"},{"name":"Vika and the Bridge","url":"https://codeforces.com/contest/1848/problem/B","rating":1200,"platform":"CF"}]},"2026-02-24":{"count":1,"problems":[{"name":"Boy or Girl","url":"https://codeforces.com/contest/236/problem/A","rating":800,"platform":"CF"}]},"2026-02-23":{"count":2,"problems":[{"name":"Assembly via Minimums","url":"https://codeforces.com/contest/1857/problem/C","rating":1200,"platform":"CF"},{"name":"Beautiful Matrix","url":"https://codeforces.com/contest/263/problem/A","rating":800,"platform":"CF"}]},"2026-02-21":{"count":4,"problems":[{"name":"Friends and the Restaurant","url":"https://codeforces.com/contest/1729/problem/D","rating":1200,"platform":"CF"},{"name":"Flipping Binary String","url":"https://codeforces.com/contest/2192/problem/B","rating":1000,"platform":"CF"},{"name":"String Rotation Game","url":"https://codeforces.com/contest/2192/problem/A","rating":800,"platform":"CF"},{"name":"Double-ended Strings","url":"https://codeforces.com/contest/1506/problem/C","rating":1000,"platform":"CF"}]},"2026-02-20":{"count":5,"problems":[{"name":"USB vs. PS/2","url":"https://codeforces.com/contest/762/problem/B","rating":1400,"platform":"CF"},{"name":"Gravity Flip","url":"https://codeforces.com/contest/405/problem/A","rating":900,"platform":"CF"},{"name":"We Got Everything Covered!","url":"https://codeforces.com/contest/1925/problem/A","rating":800,"platform":"CF"},{"name":"Replace and Sum","url":"https://codeforces.com/contest/2193/problem/C","rating":1000,"platform":"CF"},{"name":"Petr and a Combination Lock","url":"https://codeforces.com/contest/1097/problem/B","rating":1200,"platform":"CF"}]},"2026-02-19":{"count":5,"problems":[{"name":"Stick Lengths","url":"https://codeforces.com/contest/102961/problem/I","rating":null,"platform":"CF"},{"name":"Jackpot","url":"https://codeforces.com/contest/105465/problem/J","rating":null,"platform":"CF"},{"name":"Balanced Round","url":"https://codeforces.com/contest/1850/problem/D","rating":900,"platform":"CF"},{"name":"Plus Minus Permutation","url":"https://codeforces.com/contest/1872/problem/D","rating":1200,"platform":"CF"},{"name":"Make Almost Equal With Mod","url":"https://codeforces.com/contest/1909/problem/B","rating":1200,"platform":"CF"}]},"2026-02-18":{"count":1,"problems":[{"name":"Three Activities","url":"https://codeforces.com/contest/1914/problem/D","rating":1200,"platform":"CF"}]},"2026-02-17":{"count":3,"problems":[{"name":"Longest Divisors Interval","url":"https://codeforces.com/contest/1855/problem/B","rating":900,"platform":"CF"},{"name":"Make It Zero","url":"https://codeforces.com/contest/1869/problem/A","rating":900,"platform":"CF"},{"name":"Jellyfish and Undertale","url":"https://codeforces.com/contest/1875/problem/A","rating":900,"platform":"CF"}]},"2026-02-16":{"count":5,"problems":[{"name":"Serval and Mocha's Array","url":"https://codeforces.com/contest/1789/problem/A","rating":800,"platform":"CF"},{"name":"Make it Beautiful","url":"https://codeforces.com/contest/1783/problem/A","rating":800,"platform":"CF"},{"name":"Two Permutations","url":"https://codeforces.com/contest/1761/problem/A","rating":800,"platform":"CF"},{"name":"Extremely Round","url":"https://codeforces.com/contest/1766/problem/A","rating":800,"platform":"CF"},{"name":"Everybody Likes Good Arrays!","url":"https://codeforces.com/contest/1777/problem/A","rating":800,"platform":"CF"}]},"2026-02-15":{"count":1,"problems":[{"name":"One and Two","url":"https://codeforces.com/contest/1788/problem/A","rating":800,"platform":"CF"}]},"2026-02-14":{"count":4,"problems":[{"name":"Prepend and Append","url":"https://codeforces.com/contest/1791/problem/C","rating":800,"platform":"CF"},{"name":"Olya and Game with Arrays","url":"https://codeforces.com/contest/1859/problem/B","rating":1000,"platform":"CF"},{"name":"We Need the Zero","url":"https://codeforces.com/contest/1805/problem/A","rating":800,"platform":"CF"},{"name":"Walking Master","url":"https://codeforces.com/contest/1806/problem/A","rating":800,"platform":"CF"}]},"2026-02-13":{"count":7,"problems":[{"name":"Coins","url":"https://codeforces.com/contest/1814/problem/A","rating":800,"platform":"CF"},{"name":"Blank Space","url":"https://codeforces.com/contest/1829/problem/B","rating":800,"platform":"CF"},{"name":"Twin Permutations","url":"https://codeforces.com/contest/1831/problem/A","rating":800,"platform":"CF"},{"name":"Social Experiment","url":"https://codeforces.com/contest/2184/problem/A","rating":800,"platform":"CF"},{"name":"Unit Array","url":"https://codeforces.com/contest/1834/problem/A","rating":800,"platform":"CF"},{"name":"Grasshopper on a Line","url":"https://codeforces.com/contest/1837/problem/A","rating":800,"platform":"CF"},{"name":"Forbidden Integer","url":"https://codeforces.com/contest/1845/problem/A","rating":800,"platform":"CF"}]},"2026-02-12":{"count":2,"problems":[{"name":"Desorting","url":"https://codeforces.com/contest/1853/problem/A","rating":800,"platform":"CF"},{"name":"Array Coloring","url":"https://codeforces.com/contest/1857/problem/A","rating":800,"platform":"CF"}]},"2026-02-11":{"count":2,"problems":[{"name":"Game with a Fraction","url":"https://codeforces.com/contest/2197/problem/C","rating":1200,"platform":"CF"},{"name":"United We Stand","url":"https://codeforces.com/contest/1859/problem/A","rating":800,"platform":"CF"}]},"2026-02-10":{"count":1,"problems":[{"name":"Helmets in Night Light","url":"https://codeforces.com/contest/1876/problem/A","rating":1000,"platform":"CF"}]},"2026-02-09":{"count":2,"problems":[{"name":"How Much Does Daytona Cost?","url":"https://codeforces.com/contest/1878/problem/A","rating":800,"platform":"CF"},{"name":"Sequence Game","url":"https://codeforces.com/contest/1862/problem/B","rating":800,"platform":"CF"}]},"2026-02-08":{"count":3,"problems":[{"name":"Lawn Mower","url":"https://codeforces.com/contest/2194/problem/A","rating":800,"platform":"CF"},{"name":"Cover in Water","url":"https://codeforces.com/contest/1900/problem/A","rating":800,"platform":"CF"},{"name":"Swap and Delete","url":"https://codeforces.com/contest/1913/problem/B","rating":1000,"platform":"CF"}]},"2026-02-07":{"count":1,"problems":[{"name":"New Year Cake","url":"https://codeforces.com/contest/2182/problem/B","rating":800,"platform":"CF"}]},"2026-02-06":{"count":1,"problems":[{"name":"Don't Try to Count","url":"https://codeforces.com/contest/1881/problem/A","rating":800,"platform":"CF"}]},"2026-02-05":{"count":1,"problems":[{"name":"cAPS lOCK","url":"https://codeforces.com/contest/131/problem/A","rating":1000,"platform":"CF"}]},"2026-02-04":{"count":1,"problems":[{"name":"Multiply by 2, divide by 6","url":"https://codeforces.com/contest/1374/problem/B","rating":900,"platform":"CF"}]},"2026-02-03":{"count":2,"problems":[{"name":"Odd Divisor","url":"https://codeforces.com/contest/1475/problem/A","rating":900,"platform":"CF"},{"name":"Lucky Division","url":"https://codeforces.com/contest/122/problem/A","rating":1000,"platform":"CF"}]},"2026-02-02":{"count":1,"problems":[{"name":"Count Good Numbers","url":"https://codeforces.com/contest/2125/problem/C","rating":1100,"platform":"CF"}]},"2026-02-01":{"count":1,"problems":[{"name":"Chat room","url":"https://codeforces.com/contest/58/problem/A","rating":1000,"platform":"CF"}]},"2026-01-31":{"count":1,"problems":[{"name":"Young Physicist","url":"https://codeforces.com/contest/69/problem/A","rating":1000,"platform":"CF"}]},"2026-01-30":{"count":1,"problems":[{"name":"Puzzles","url":"https://codeforces.com/contest/337/problem/A","rating":900,"platform":"CF"}]},"2026-01-29":{"count":1,"problems":[{"name":"Dubstep","url":"https://codeforces.com/contest/208/problem/A","rating":900,"platform":"CF"}]},"2026-01-28":{"count":1,"problems":[{"name":"Kefa and First Steps","url":"https://codeforces.com/contest/580/problem/A","rating":900,"platform":"CF"}]},"2026-01-27":{"count":2,"problems":[{"name":"DBMB and the Array","url":"https://codeforces.com/contest/2193/problem/A","rating":800,"platform":"CF"},{"name":"HQ9+","url":"https://codeforces.com/contest/133/problem/A","rating":900,"platform":"CF"}]},"2026-01-26":{"count":1,"problems":[{"name":"Even Odds","url":"https://codeforces.com/contest/318/problem/A","rating":900,"platform":"CF"}]},"2026-01-25":{"count":1,"problems":[{"name":"Next Round","url":"https://codeforces.com/contest/158/problem/A","rating":800,"platform":"CF"}]},"2026-01-24":{"count":1,"problems":[{"name":"Twins","url":"https://codeforces.com/contest/160/problem/A","rating":900,"platform":"CF"}]},"2026-01-23":{"count":4,"problems":[{"name":"Elephant","url":"https://codeforces.com/contest/617/problem/A","rating":800,"platform":"CF"},{"name":"Domino piling","url":"https://codeforces.com/contest/50/problem/A","rating":800,"platform":"CF"},{"name":"Perfect Root","url":"https://codeforces.com/contest/2185/problem/A","rating":800,"platform":"CF"},{"name":"Bit++","url":"https://codeforces.com/contest/282/problem/A","rating":800,"platform":"CF"}]},"2026-01-22":{"count":2,"problems":[{"name":"Theatre Square","url":"https://codeforces.com/contest/1/problem/A","rating":1000,"platform":"CF"},{"name":"Football","url":"https://codeforces.com/contest/96/problem/A","rating":900,"platform":"CF"}]},"2026-01-21":{"count":1,"problems":[{"name":"Team","url":"https://codeforces.com/contest/231/problem/A","rating":800,"platform":"CF"}]},"2026-01-20":{"count":1,"problems":[{"name":"Target Practice","url":"https://codeforces.com/contest/1873/problem/C","rating":800,"platform":"CF"}]},"2026-01-19":{"count":1,"problems":[{"name":"Goals of Victory","url":"https://codeforces.com/contest/1877/problem/A","rating":800,"platform":"CF"}]},"2026-01-18":{"count":5,"problems":[{"name":"OutOfMemoryError","url":"https://codeforces.com/contest/2185/problem/D","rating":1100,"platform":"CF"},{"name":"Shifted MEX","url":"https://codeforces.com/contest/2185/problem/C","rating":900,"platform":"CF"},{"name":"Prefix Max","url":"https://codeforces.com/contest/2185/problem/B","rating":800,"platform":"CF"},{"name":"Perfect Root","url":"https://codeforces.com/contest/2185/problem/A","rating":800,"platform":"CF"},{"name":"Doremy's Paint 3","url":"https://codeforces.com/contest/1890/problem/A","rating":800,"platform":"CF"}]},"2026-01-17":{"count":3,"problems":[{"name":"Array Coloring","url":"https://codeforces.com/contest/2191/problem/A","rating":800,"platform":"CF"},{"name":"Jagged Swaps","url":"https://codeforces.com/contest/1896/problem/A","rating":800,"platform":"CF"},{"name":"Way Too Long Words","url":"https://codeforces.com/contest/71/problem/A","rating":800,"platform":"CF"}]},"2026-01-16":{"count":1,"problems":[{"name":"Raspberries","url":"https://codeforces.com/contest/1883/problem/C","rating":1000,"platform":"CF"}]},"2026-01-15":{"count":1,"problems":[{"name":"Buttons","url":"https://codeforces.com/contest/1858/problem/A","rating":800,"platform":"CF"}]},"2026-01-14":{"count":2,"problems":[{"name":"Ambitious Kid","url":"https://codeforces.com/contest/1866/problem/A","rating":800,"platform":"CF"},{"name":"Game with Integers","url":"https://codeforces.com/contest/1899/problem/A","rating":800,"platform":"CF"}]},"2026-01-13":{"count":2,"problems":[{"name":"K-th Not Divisible by n","url":"https://codeforces.com/contest/1352/problem/C","rating":1200,"platform":"CF"},{"name":"Sum of Cubes","url":"https://codeforces.com/contest/1490/problem/C","rating":1100,"platform":"CF"}]},"2026-01-12":{"count":2,"problems":[{"name":"Social Experiment","url":"https://codeforces.com/contest/2184/problem/A","rating":800,"platform":"CF"},{"name":"Ski Resort","url":"https://codeforces.com/contest/1840/problem/C","rating":1000,"platform":"CF"}]},"2026-01-11":{"count":2,"problems":[{"name":"Vasilije in Cacak","url":"https://codeforces.com/contest/1878/problem/C","rating":900,"platform":"CF"},{"name":"Line Trip","url":"https://codeforces.com/contest/1901/problem/A","rating":800,"platform":"CF"}]},"2026-01-10":{"count":2,"problems":[{"name":"Chemistry","url":"https://codeforces.com/contest/1883/problem/B","rating":900,"platform":"CF"},{"name":"Halloumi Boxes","url":"https://codeforces.com/contest/1903/problem/A","rating":800,"platform":"CF"}]},"2026-01-09":{"count":2,"problems":[{"name":"Forked!","url":"https://codeforces.com/contest/1904/problem/A","rating":900,"platform":"CF"},{"name":"Watermelon","url":"https://codeforces.com/contest/4/problem/A","rating":800,"platform":"CF"}]},"2025-12-09":{"count":1,"problems":[{"name":"Brightness Begins","url":"https://codeforces.com/contest/2020/problem/B","rating":1200,"platform":"CF"}]},"2025-11-02":{"count":1,"problems":[{"name":"Yet Another Array Problem","url":"https://codeforces.com/contest/2167/problem/D","rating":1000,"platform":"CF"}]}};

    /* ==========================================================================
       UI INTERACTIONS (Typing, Navigation, Scrollspy, Form, Animations)
       ========================================================================== */
    function initTypingEffect() {
        const typedSpan = document.getElementById('typed-text');
        if (!typedSpan) return;

        const lines = [
            'CS & AI Undergrad @ Scaler School of Tech & BITS Pilani',
            'Competitive Programmer | 850+ Problems Solved',
            'ICPC Regionals Cohort @ NlogN CP Club',
            'Fitness & Gym Enthusiast | Strength & Daily Discipline',
            'Codeforces 1171 | CodeChef 1404 (2★) | AtCoder 721 (7 Kyu)',
        ];
        let li = 0, ci = 0;

        function typeChar() {
            if (ci < lines[li].length) {
                typedSpan.textContent += lines[li][ci++];
                setTimeout(typeChar, 65);
            } else {
                setTimeout(eraseChar, 1800);
            }
        }

        function eraseChar() {
            if (ci > 0) {
                typedSpan.textContent = lines[li].slice(0, --ci);
                setTimeout(eraseChar, 35);
            } else {
                li = (li + 1) % lines.length;
                setTimeout(typeChar, 365);
            }
        }

        setTimeout(typeChar, 800);
    }

    function initNavigation() {
        const header       = document.getElementById('header');
        const navLinks     = document.querySelectorAll('.nav-link');
        const sections     = document.querySelectorAll('section[id]');
        const backToTopBtn = document.getElementById('backToTop');
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu      = document.getElementById('navMenu');

        window.addEventListener('scroll', () => {
            const y = window.pageYOffset;
            header?.classList.toggle('scrolled', y > 50);
            backToTopBtn?.classList.toggle('visible', y > 400);

            let cur = '';
            sections.forEach(s => {
                if (y >= s.offsetTop - 120) cur = s.id;
            });
            navLinks.forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === `#${cur}`);
            });
        }, { passive: true });

        backToTopBtn?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        mobileToggle?.addEventListener('click', () => {
            const open = navMenu.classList.toggle('active');
            mobileToggle.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        navLinks.forEach(l => l.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }));
    }

    function initSkillBars() {
        const skillSection = document.getElementById('skills');
        if (!skillSection) return;

        let skillsAnimated = false;
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && !skillsAnimated) {
                    document.querySelectorAll('.skill-bar-fill').forEach(b => {
                        b.style.width = b.dataset.level;
                    });
                    skillsAnimated = true;
                }
            }, { threshold: 0.2 }).observe(skillSection);
        } else {
            document.querySelectorAll('.skill-bar-fill').forEach(b => {
                b.style.width = b.dataset.level;
            });
        }
    }

    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        const formStatus  = document.getElementById('formStatus');
        if (!contactForm) return;

        contactForm.addEventListener('submit', async e => {
            e.preventDefault();
            const btn  = contactForm.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

            try {
                const res = await fetch(contactForm.action, {
                    method:  'POST',
                    body:    new FormData(contactForm),
                    headers: { Accept: 'application/json' },
                });
                if (res.ok) {
                    formStatus.className   = 'form-status success';
                    formStatus.textContent = "✨ Message sent! I'll get back to you soon.";
                    contactForm.reset();
                } else {
                    const d = await res.json().catch(() => ({}));
                    formStatus.className   = 'form-status error';
                    formStatus.textContent = d?.errors?.map(x => x.message).join(', ') || '❌ Something went wrong.';
                }
            } catch {
                formStatus.className   = 'form-status error';
                formStatus.textContent = '❌ Network error! Email me at aryanxmoorthy@gmail.com';
            } finally {
                btn.disabled  = false;
                btn.innerHTML = orig;
                if (formStatus) setTimeout(() => { formStatus.style.display = 'none'; }, 7000);
            }
        });
    }

    /* ==========================================================================
       RATINGS MODULE
       ========================================================================== */
    const CACHE_RATINGS = 'cp_ratings_v6';
    const TTL_MS        = 24 * 60 * 60 * 1000;

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

    function getStorageCache(key) {
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

    function setStorageCache(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
        } catch (e) {
            console.warn('[Cache] Write failed:', e);
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
            const res  = await fetchTimeout('https://codeforces.com/api/user.info?handles=AryanMoorthy');
            const json = await res.json();
            if (json.status !== 'OK') throw new Error('bad status');
            const u = json.result[0];

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
            return { rating: 721, contests: 11 };
        }
    }

    async function initRatings() {
        try {
            localStorage.removeItem('cp_ratings_v4');
            localStorage.removeItem('cp_ratings_v5');
        } catch (e) {}

        const cached = getStorageCache(CACHE_RATINGS);
        if (cached) {
            applyRatings(cached.data);
            return;
        }
        try {
            const [cf, cc, ac] = await Promise.all([fetchCfRating(), fetchCcRating(), fetchAcRating()]);
            const data = { cf, cc, ac };
            applyRatings(data);
            setStorageCache(CACHE_RATINGS, data);
        } catch (e) {
            applyRatings({
                cf: { rating: 1171, maxRating: 1180, rank: 'newbie', solved: 782, streak: 206 },
                cc: { rating: 1404, maxRating: 1511, stars: 2, contests: 9 },
                ac: { rating: 721, contests: 11 }
            });
        }
    }

    /* ==========================================================================
       HEATMAP MODULE
       ========================================================================== */
    const CACHE_HEATMAP = 'cp_heatmap_v7';
    const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    function toLocalDateStr(ms) {
        const d = new Date(ms);
        const yyyy = d.getFullYear();
        const mm   = String(d.getMonth() + 1).padStart(2, '0');
        const dd   = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
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

    let hmTooltip = null;
    let tipTimer  = null;

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
            hmTooltip.innerHTML = `<div class="hm-tip-empty">No solves &mdash; ${dateLabel}</div>`;
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
                ? `<li class="hm-tip-more">+${dayData.problems.length - 15} more problems&hellip;</li>`
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
        if (top < scrollY + 8) top = rect.bottom + scrollY + 8;

        hmTooltip.style.left = `${left}px`;
        hmTooltip.style.top  = `${top}px`;
    }

    function renderHeatmap(activityByDate) {
        const grid       = document.getElementById('heatmap-grid');
        const monthRow   = document.getElementById('heatmap-months');
        const totalBadge = document.getElementById('heatmap-total');
        const loadingEl  = document.getElementById('heatmap-loading');

        if (!grid) return;
        if (loadingEl) loadingEl.remove();
        grid.innerHTML = '';
        if (monthRow) monthRow.innerHTML = '';

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
            if (d.getDay() === 1) col++;
        }

        grid.appendChild(fragment);

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

    async function fetchCfActivity() {
        const yearAgoMs = Date.now() - 366 * 24 * 3600 * 1000;
        try {
            const res = await fetchTimeout(
                'https://codeforces.com/api/user.status?handle=AryanMoorthy&from=1&count=5000',
                {}, 10000
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
            return {};
        }
    }

    async function fetchAcActivity() {
        const yearAgoSec = Math.floor((Date.now() - 366 * 24 * 3600 * 1000) / 1000);
        try {
            const res = await fetchTimeout(
                `https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=aryanmoorthy&from_second=${yearAgoSec}`,
                {}, 10000
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

    async function initHeatmap() {
        const cached = getStorageCache(CACHE_HEATMAP);
        if (cached && Object.keys(cached.data || {}).length > 0) {
            renderHeatmap(cached.data);
            const note = document.getElementById('heatmap-cache-note');
            if (note) note.textContent = `⚡ Cached · last fetched ${fmtTime(cached.ts)} · refreshes every 24 h`;
            return;
        }

        // Render immediately using fallback activity so it's instantaneous
        if (FALLBACK_ACTIVITY && Object.keys(FALLBACK_ACTIVITY).length > 0) {
            renderHeatmap(FALLBACK_ACTIVITY);
            const note = document.getElementById('heatmap-cache-note');
            if (note) note.textContent = `✨ Active solves loaded · checking for updates`;
        }

        try {
            const [cfAct, acAct] = await Promise.all([fetchCfActivity(), fetchAcActivity()]);
            const merged = mergeActivity(cfAct, acAct);
            if (Object.keys(merged).length > 0) {
                renderHeatmap(merged);
                setStorageCache(CACHE_HEATMAP, merged);
                const note = document.getElementById('heatmap-cache-note');
                if (note) note.textContent = `✨ Live data loaded · refreshes every 24 h`;
            }
        } catch (e) {
            if (FALLBACK_ACTIVITY) renderHeatmap(FALLBACK_ACTIVITY);
        }
    }

    /* ==========================================================================
       INITIALISATION
       ========================================================================== */
    function init() {
        initTypingEffect();
        initNavigation();
        initSkillBars();
        initContactForm();
        initRatings();
        initHeatmap();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
