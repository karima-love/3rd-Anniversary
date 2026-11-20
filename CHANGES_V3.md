# 22:11 — V3: Logo Spacing & Replay Button Fix

## Fix 1: Password screen chrysanthemum touching the dedication line

- Added `headOnly` display mode to `BloomingFlower`, which omits the stem and leaves *only* for the compact login logo.
- Fixed the compact SVG viewBox to 400×400 for proportional flower-head rendering.
- Removed the prior forced translation and negative margin that caused the petals to overlap “FOR KARIMA, WITH LOVE”.
- Added dedicated vertical spacing for desktop and small screens and a `gate-dedication` class to prevent overlap.
- Full chrysanthemum artwork in the other chapters is unchanged.

## Fix 2: Relive Our Story button icon wrapping onto its own line

- Changed the replay button content to an accessible icon plus text span.
- Added `.replay-button` flex alignment and a minimum width so the icon and label remain side by side on one centered line.
- No change to replay logic or other buttons.

## How to use

Replace the old V2 project files with V3 files. Keep your original personal JPEG files at `public/assets/images/` and your song at `public/assets/audio/our-song.mp3` — neither is included in the ZIP.

Start the project with `npm install` (first time) and `npm run dev`. When publishing an existing GitHub Desktop repository, copy V3 files over the working tree without replacing the `.git` directory, commit, and push.

The client-side password is a visual-only gate and does not protect static assets.
