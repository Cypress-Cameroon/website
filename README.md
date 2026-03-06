# Cypress Cameroon — Website

This repository contains a simple static website for Cypress Cameroon and the "International Testers Week 2026" landing pages.

What you'll find
- `index.html` — Main landing page. Uses reusable partials in `partials/`.
- `partials/` — Small HTML partials (sidebar, hero, CTA) included client-side.
- `assets/styles.css` — Central stylesheet extracted from the original inline CSS.
- `assets/include.js` — Tiny client-side include loader that fetches partials referenced with `data-include` attributes.
- Logo and images live in the repository root (you can move them to `assets/images/` if desired).

How to preview locally
1. From the project root run a static server (Python example):

```bash
python3 -m http.server 8000

# then open http://localhost:8000 in your browser
```

Development notes
- The site uses client-side partial includes to keep the HTML DRY. This approach works on static hosts (GitHub Pages, Netlify). If you prefer a generator (Jekyll, Eleventy), I can convert the partials to templates.
- To change the sidebar/hero/CTA, edit the files in `partials/` and they will be loaded into `index.html` at runtime.
- Styling lives in `assets/styles.css` for easier reuse across pages.

Next improvements you might want
- Move images to `assets/images/` and update paths.
- Add a build step (Eleventy) to render partials at build time.
- Add a small script to prefetch partials for faster initial render.

If you'd like, I can also:
- Add a countdown timer for the event.
- Optimize and compress images.
- Create separate pages (About, Events) and reuse partials.

Contact
For site updates or questions: `cy.cameroon@gmail.com`.
