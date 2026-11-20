# 22:11 — Update 2 (20 Nov 2026)

## Issues fixed
- Photo frame adapts automatically to the **natural aspect ratio** of every JPEG, including portrait, square, landscape and panorama, with no cropping/stretching. Its maximum height scales down on small screens.
- Opening number 22:11 resized/retracked to reduce clipping and merged-looking digits.
- Scroll indicator moved below CTA buttons so it cannot cross them.
- Botanical tag and caption moved to the natural layout outside the chrysanthemum frame.
- Music now starts when a correct password is submitted by click, tap, or Enter, using the same user gesture to satisfy autoplay policies. Users can still pause/mute/change volume.
- Missing-image card now shows the exact filename required.

## How to upgrade
Back up your four personal .jpeg pictures and our-song.mp3 from the old project, unzip this complete replacement, and add those five files into the same public/assets locations.

## Important
GitHub Pages is static: the password gate is visual only, images can be accessed by direct URL. Browsers can disallow audio without a fresh user gesture, such as when you refresh an already-unlocked tab. Use the music Play control if needed.

## Tests
Source checks and TypeScript syntax transpilation run, plus Chromium CSS layout checks across 320px, 390px, 783px and 1440px viewports. Photo-frame sizing tested at four aspect ratios on desktop and mobile. Full npm production build could not be run in this environment, since npm registry access failed. Run `npm install` and `npm run build` on your PC; GitHub Actions will also build the deployed site.
