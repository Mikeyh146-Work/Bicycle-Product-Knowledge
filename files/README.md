# Bike hire parts guide

An interactive exploded view of the Trek Marlin 4 Gen 3. Staff select a part to see its specs, part numbers, example daily checks and linked documents.

No build step, no frameworks, no external libraries. It is plain HTML, CSS and JavaScript.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The page and the SVG bike |
| `css/style.css` | Styles, including dark mode |
| `js/parts.js` | All the content: parts, specs, checks, documents. Edit this one. |
| `js/app.js` | The slider, selection and panel logic |

## Try it on your computer

Open `index.html` in any browser.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload everything in this folder, keeping the `css` and `js` folders.
3. Go to Settings, then Pages.
4. Under Build and deployment, choose Deploy from a branch, pick `main` and the `/ (root)` folder, then save.
5. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Change the content

Open `js/parts.js`. Each group has a list of parts, example checks and a safety flag. To link a document, set its `url` in the `docs` list at the top.

A part with `null` as its description shows a "Needs spec" badge, which makes gaps easy to spot.

## Before you publish

- GitHub Pages is public on a free account. Anyone with the link can see the site.
- Keep internal SOPs, staff details and private SharePoint links out of the repository.
- Check with IT before hosting company material on a personal GitHub account.
- The example daily checks are not your SOPs. Replace them before staff rely on them.

## Adding another asset

Copy `index.html` to a new file (for example `buggy.html`), draw its parts in the SVG with a matching `data-part` and `id="p-NAME"` on each group, and give it its own data file.
