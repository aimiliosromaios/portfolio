# Aimilios Romaios — Portfolio

Static portfolio site (HTML/CSS/JS, no build step) for GitHub Pages:
https://aimiliosromaios.github.io/portfolio/

## Structure
```
index.html        page content (all sections)
css/style.css     styles (dark/light via prefers-color-scheme)
js/main.js        nav, tabs, lightbox, scroll reveal
assets/img/       optimised WebP images
favicon.svg
.nojekyll
```

## Deploy
Push to the branch GitHub Pages serves (Settings → Pages), then wait ~1 minute.

## Editing
- Text lives in `index.html`; each project is its own `<section>`.
- Add images to `assets/img/` (WebP, max ~1600px wide) and reference them with width/height attributes.
- Accent colour and fonts: variables at the top of `css/style.css`.
