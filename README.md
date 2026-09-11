# Aryan Moorthy - Developer & Competitive Programmer Portfolio

A modern, responsive, high-performance modular portfolio website showcasing Competitive Programming metrics, combined 52-week activity heatmap, academic journey, technical skills, and resume.

## 🌐 Live Site
**[https://aryanmoorthy.github.io/Portfolio](https://aryanmoorthy.github.io/Portfolio)**

## ✨ Features
- **Competitive Programming Showcase:** Live-cached stats cards for **Codeforces** (Rating 1180, 900+ solved), **CodeChef** (2★, peak 1511), and **AtCoder** (7 Kyu, top 23.82% global).
- **Interactive Coding Activity Heatmap:** 52-week calendar heatmap merging solves from Codeforces and AtCoder with local timezone grouping, 24-hour caching, and interactive hover popups showing problem names, platform badges, difficulty ratings, and direct problem links.
- **Resume Integration:** Quick "Resume PDF" CTA buttons linked to `assets/docs/Resume.pdf`.
- **NlogN CP Club Milestones:** Highlights selection into the **ICPC Regionals Cohort**, **Super 25**, and **Rising 40**.
- **Academic Foundations:** Dual Degree at **Scaler School of Technology** (CS & AI '29) & **BITS Pilani** (BSc Hons CS '29).
- **Technical Skills Matrix:** Categorized languages (C++, Java, Python, JavaScript, HTML/CSS), frameworks, and core DSA competencies with animated skill progress bars.
- **Functional Contact Form:** Formspree AJAX submission with instant status feedback.
- **Modern Dark Glassmorphism:** Styled with CSS variables, Plus Jakarta Sans, and JetBrains Mono typography.

## 📁 Modular Project Structure
```
Portfolio/
├── index.html                   # Root entry point for static hosting (GitHub Pages, Vercel, Netlify)
├── README.md
├── assets/
│   ├── images/                  # Media assets (profile portrait, favicon icons)
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── apple-touch-icon.png
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   └── pp.png
│   └── docs/                    # Documents & PDF files
│       └── Resume.pdf
├── css/
│   ├── variables.css            # Design tokens, color palette, glassmorphism vars
│   ├── base.css                 # Reset, typography, layout containers, buttons
│   ├── components.css           # Header, hero, about, timeline, skills, contact, footer
│   ├── cp.css                   # CP cards, activity heatmap, problem tooltip & rating tiers
│   └── main.css                 # Master bundle importing all CSS modules
└── js/
    ├── modules/
    │   ├── ratings.js           # CF, CC, AC API fetchers with 24h localStorage cache
    │   ├── heatmap.js           # 52-week activity heatmap, timezone parser, problem popups
    │   └── ui.js                # Typing animation, mobile menu, scrollspy, contact form
    └── main.js                  # Application orchestrator
```

## 🚀 Local Development / Preview
Serve the directory with any static server:
```bash
# Using Python
python -m http.server 8080

# Or using Node / npx serve
npx serve .
```
Then visit `http://localhost:8080`.
