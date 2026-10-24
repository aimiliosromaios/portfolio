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

The original seven PNG assets remain unchanged. Images extracted from the supplied Word portfolio are optimised in `assets/portfolio/`. The original fonts and F1 disclosure pattern are retained, with charcoal and papaya styling for engineering and white layouts for education and creative work.

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

Edit content in the corresponding HTML file. Shared appearance is in `styles.css`; the original component styles are followed by expansion styles. Menu and image viewer behaviour are in `script.js`. Keep the shared navigation in sync across all five pages.

The source document provides no verified Etsy shop URL or CV download, so the site offers an artwork email enquiry and contains no placeholder CV link. The CFD comparison remains qualitative; no numerical results, solver settings or performance rankings have been invented. Certificate wording is transcribed from the portfolio; original certificates were not supplied for independent verification.

## Publication status

This package is prepared source. It does not itself update the public GitHub Pages site. GitHub publishing requires the repository owner's authenticated account or a connected GitHub workflow.
