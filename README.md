# Aimilios Romaios Mechanical Design Portfolio

Static HTML, CSS and JavaScript portfolio for the existing repository:
https://github.com/aimiliosromaios/portfolio

Public address: https://aimiliosromaios.github.io/portfolio/

## Pages

- `index.html`: cover, profile, selected work, technical toolkit and contact.
- `engineering.html`: original F1 case study and disclosures, CFD methodology and Toyota comparison, Hyperion Drone Team, KTEO internship and personal CAD projects.
- `visualisation.html`: completed McLaren MCL36 Blender project and Dodge Challenger work in development.
- `education.html`: academic background, certifications and continued learning.
- `creative.html`: automotive drawing, Photoshop and Etsy creative work.

The site uses compressed WebP images in `assets/web/`. Every image keeps the original pixel dimensions and proportions from the Word document, with no resizing or cropping. Web compression reduces file sizes; it is not a byte-for-byte copy of the original PNG/JPEG data. The grey padding is removed, while studio backgrounds that are part of the original artwork remain.

The original fonts and F1 disclosure pattern are retained. Engineering uses charcoal and papaya, Education uses warm graphite with muted gold accents, and Art & Design uses slate with muted rose accents. Image frames have no fixed aspect ratio, crop or added grey padding.

## Preview

Open `index.html` directly in a browser. No installation or build is needed. All pages use relative links suitable for `/portfolio/` on GitHub Pages. The navigation, content, disclosures and full-size image links remain usable without JavaScript; JavaScript adds the compact menu and image dialog.

## Apply to the existing GitHub repository

1. Extract the supplied ZIP into a folder on your computer.
2. Sign in to GitHub and open https://github.com/aimiliosromaios/portfolio.
3. Select **Add file → Upload files** on the repository Code page.
4. Drag the contents of the extracted folder into the upload area: the five HTML files, `styles.css`, `script.js`, `README.md`, and the complete `assets` folder. Upload the contents, not an enclosing `portfolio` folder and not the ZIP itself. Existing files with the same paths are updated; keep unrelated existing files.
5. Use a commit message such as **Integrate mechanical design portfolio**. Commit to a new branch and open a pull request into `main` if you want review first, or commit directly to `main` if appropriate for your repository.
6. If using a pull request, review the changes and merge it into `main`.
7. Open **Settings → Pages** and check the current publishing configuration. For branch publishing, keep **Deploy from a branch**, branch **main**, folder **/ (root)**. If the repository already uses GitHub Actions, preserve that workflow and confirm it publishes these root files. Do not create a second repository.
8. Wait for the Pages deployment to succeed in the repository's **Actions** or **Deployments** view, then visit https://aimiliosromaios.github.io/portfolio/ and refresh the page.

## Editing

For this smaller upload, include the new `assets/web` folder. Existing `assets/native`, `assets/portfolio` and legacy images may remain in the repository; these pages no longer reference them. Do not upload the earlier large PNG/JPEG copies again. Stylesheet and script URLs retain their version values to avoid stale browser caches.

Edit content in the corresponding HTML file. Shared appearance is in `styles.css`; the original component styles are followed by expansion styles. Menu and image viewer behaviour are in `script.js`. Keep the shared navigation in sync across all five pages.

The source document provides no verified Etsy shop URL or CV download, so the site offers an artwork email enquiry and contains no placeholder CV link. The CFD comparison remains qualitative; no numerical results, solver settings or performance rankings have been invented. Certificate wording is transcribed from the portfolio; original certificates were not supplied for independent verification.

## Publication status

This package is prepared source. It does not itself update the public GitHub Pages site. GitHub publishing requires the repository owner's authenticated account or a connected GitHub workflow.
