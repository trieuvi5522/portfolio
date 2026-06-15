// Dev utility: rasterize page 1 of each certificate PDF (in public/certificates)
// to a trimmed preview image in src/assets/certificates, using the system Chrome
// (PDFium renders the embedded fonts faithfully — pure-Node pdf.js dropped some).
//
// When you add a new certificate, drop its PDF in public/certificates, add a job
// below, then regenerate:
//   npm i --no-save puppeteer-core   (sharp ships with Astro)
//   node scripts/gen-cert-thumbs.mjs
// Adjust CHROME below if Chrome lives elsewhere.
import puppeteer from "puppeteer-core";
import sharp from "sharp";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const CHROME =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const jobs = [
  ["public/certificates/node-red-advanced.pdf", "src/assets/certificates/node-red-advanced.png"],
  ["public/certificates/node-red-fundamentals.pdf", "src/assets/certificates/node-red-fundamentals.png"],
  ["public/certificates/hivemq-mqtt-associate.pdf", "src/assets/certificates/hivemq-mqtt-associate.png"],
  // MECA is a scanned photo — JPEG keeps it small.
  ["public/certificates/meca-2024.pdf", "src/assets/certificates/meca-2024.jpg"],
];

const MAX_W = 1400;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--allow-file-access-from-files"],
});

for (const [src, out] of jobs) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1100, deviceScaleFactor: 2 });
  const url = "file:///" + path.join(root, src).replace(/\\/g, "/") + "#toolbar=0&navpanes=0&view=Fit";
  await page.goto(url, { waitUntil: "load", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2000)); // let PDFium finish painting
  const shot = await page.screenshot({ type: "png" });
  await page.close();

  await mkdir(path.dirname(path.join(root, out)), { recursive: true });
  // Trim the uniform viewer background, then scale down for the web.
  let img = sharp(shot).trim({ threshold: 20 }).resize({ width: MAX_W, withoutEnlargement: true });
  img = out.endsWith(".jpg") ? img.jpeg({ quality: 82, mozjpeg: true }) : img.png({ compressionLevel: 9 });
  await img.toFile(path.join(root, out));
  const meta = await sharp(await readFile(path.join(root, out))).metadata();
  console.log("wrote", out, `${meta.width}x${meta.height}`);
}

await browser.close();
