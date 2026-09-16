/* ==========================================================================
   UI INTERACTIONS MODULE (Typing, Navigation, Scrollspy, Form, Animations)
   ========================================================================== */

export function initTypingEffect() {
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

export function initNavigation() {
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

export function initSkillBars() {
    const skillSection = document.getElementById('skills');
    if (!skillSection) return;

    let skillsAnimated = false;
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !skillsAnimated) {
            document.querySelectorAll('.skill-bar-fill').forEach(b => {
                b.style.width = b.dataset.level;
            });
            skillsAnimated = true;
        }
    }, { threshold: 0.2 }).observe(skillSection);
}

export function initContactForm() {
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
