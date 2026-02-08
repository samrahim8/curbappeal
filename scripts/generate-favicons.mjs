import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const svgContent = readFileSync(join(publicDir, 'favicon.svg'), 'utf8');
const svgBuffer = Buffer.from(svgContent);

// Generate 32x32 favicon
await sharp(svgBuffer, { density: 300 })
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, 'favicon-32x32.png'));

console.log('Created favicon-32x32.png');

// Generate 180x180 apple touch icon
await sharp(svgBuffer, { density: 300 })
  .resize(180, 180)
  .png()
  .toFile(join(publicDir, 'apple-touch-icon.png'));

console.log('Created apple-touch-icon.png');

// Generate 512x512 for PWA
await sharp(svgBuffer, { density: 300 })
  .resize(512, 512)
  .png()
  .toFile(join(publicDir, 'icon-512.png'));

console.log('Created icon-512.png');

console.log('Done!');
