import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const checks = [
  'src/chapters/Opening/Opening.tsx',
  'src/chapters/NovemberFlower/NovemberFlower.tsx',
  'src/chapters/TwoReasons/TwoReasons.tsx',
  'src/chapters/OurStory/OurStory.tsx',
  'src/chapters/Constellation/Constellation.tsx',
  'src/chapters/Birthday/Birthday.tsx',
  'src/chapters/FuturePages/FuturePages.tsx',
  'src/chapters/LoveLetter/LoveLetter.tsx',
  'src/chapters/FinalBloom/FinalBloom.tsx'
];
for (const path of checks) assert(existsSync(resolve(root, path)), `Missing chapter: ${path}`);
const stars = read('src/content/constellation.ts');
const ids = Array.from(stars.matchAll(/\{ id: (\d+), x: /g), m => Number(m[1]));
assert.equal(ids.length, 22, 'Exactly 22 stars must exist');
assert.equal(new Set(ids).size, 22, 'Star IDs must be unique');
const photos = read('src/config/photos.ts');
for (const name of ['year-1.jpeg', 'year-2.jpeg', 'year-3.jpeg', 'forever.jpeg']) {
  assert(photos.includes(name), `Missing photo path: ${name}`);
}
assert(read('src/config/music.ts').includes('our-song.mp3'), 'Missing MP3 path');
assert(read('src/config/site.ts').includes("password: 'MK@2211'"), 'Password mismatch');
assert(read('vite.config.ts').includes("base: '/3rd-Anniversary/'"), 'GitHub Pages base mismatch');
assert(read('.github/workflows/deploy.yml').includes('npm ci'), 'GitHub Actions must use npm ci');
assert(read('.github/workflows/deploy.yml').includes('actions/deploy-pages@'), 'Missing Pages deployment');
const ar = read('src/content/messages.ts');
assert(ar.includes('يا كريمة'), 'Love letter missing');
const pages = readdirSync(resolve(root, 'src/chapters'), { withFileTypes:true }).filter(f => f.isDirectory());
assert.equal(pages.length, 9, 'Expected nine chapter directories');
console.log(`✓ Verified 9 chapters, ${ids.length} stars, 4 JPEG paths, MP3 path, password, GitHub Pages workflow, and love letter.`);
console.log('○ This is source-level validation, not a production Vite build.');
