/* ==========================================================================
   ARYAN MOORTHY — PORTFOLIO | MAIN APPLICATION ENTRY POINT
   ========================================================================== */

import { initRatings } from './modules/ratings.js';
import { initHeatmap } from './modules/heatmap.js';
import { initTypingEffect, initNavigation, initSkillBars, initContactForm } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialise UI & Interactive elements
    initTypingEffect();
    initNavigation();
    initSkillBars();
    initContactForm();

    // 2. Fetch / load cached CP platform ratings
    initRatings();

    // 3. Render 52-week combined activity heatmap with question popup details
    initHeatmap();
});
