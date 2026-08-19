import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const dir = './src/assets';
const files = readdirSync(dir);
let totalSaved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
  
  const input = join(dir, file);
  const output = join(dir, basename(file, ext) + '.webp');
  
  const before = statSync(input).size;
  
  await sharp(input).webp({ quality: 78 }).toFile(output);
  
  const after = statSync(output).size;
  const saved = ((before - after) / before * 100).toFixed(0);
  totalSaved += (before - after);
  
  console.log(`✓ ${file} → ${saved}% smaller`);
}

console.log(`\n✅ Done! Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
