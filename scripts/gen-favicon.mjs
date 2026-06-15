// Dev utility: build the favicon set from the LUCA IoT wordmark.
// Trims the logo's whitespace and centers it on a white square so it isn't
// stretched, then writes the PNG sizes + a multi-size favicon.ico.
//
// Regenerate after changing src/assets/brand/luca-iot-logo.png:
//   npm i --no-save png-to-ico   (sharp ships with Astro)
//   node scripts/gen-favicon.mjs
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "src/assets/brand/luca-iot-logo.png");
const PUB = path.join(root, "public");

// Render the wordmark centered on a white square of the given size.
async function square(size, pad = 0.06) {
  const inner = Math.round(size * (1 - 2 * pad));
  const mark = await sharp(SRC)
    .trim()
    .resize({ width: inner, height: inner, fit: "inside" })
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();
}

const png16 = await square(16, 0.04);
const png32 = await square(32);
const png48 = await square(48);
const png180 = await square(180, 0.1);

await writeFile(path.join(PUB, "favicon-16x16.png"), png16);
await writeFile(path.join(PUB, "favicon-32x32.png"), png32);
await writeFile(path.join(PUB, "apple-touch-icon.png"), png180);
await writeFile(path.join(PUB, "favicon.ico"), await pngToIco([png16, png32, png48]));

console.log("wrote favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, favicon.ico");
