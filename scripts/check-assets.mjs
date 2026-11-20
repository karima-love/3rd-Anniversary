import { existsSync, statSync } from 'node:fs';
const assets = [
  'public/assets/images/year-1.jpeg', 'public/assets/images/year-2.jpeg',
  'public/assets/images/year-3.jpeg', 'public/assets/images/forever.jpeg',
  'public/assets/audio/our-song.mp3'
];
for (const path of assets) {
  const ok = existsSync(path) && statSync(path).size > 0;
  console.log(`${ok ? '✓' : '○'} ${path}${ok ? '' : '  — add your personal file'}`);
}
