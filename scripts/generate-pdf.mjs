import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, existsSync, mkdirSync, statSync, copyFileSync } from 'fs';
import { resolve, dirname, join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');
const OUT = resolve(DIST, 'pdfs');
const PDF_PATH = resolve(OUT, 'conquering-cancer-collection.pdf');
const PUBLIC_PDF = resolve(ROOT, 'public', 'pdfs', 'conquering-cancer-collection.pdf');

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('dist/index.html not found. Run `npx astro build` first.');
  process.exit(1);
}
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Mime types
const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff',
};

// Simple static file server
const server = createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  if (!extname(urlPath)) urlPath += '/index.html';
  const filePath = join(DIST, urlPath);
  try {
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(readFileSync(filePath));
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } catch {
    res.writeHead(500);
    res.end('Error');
  }
});

const PORT = 4567;
await new Promise((r) => server.listen(PORT, r));
console.log(`Server running on http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 800 });

console.log('Loading page...');
await page.goto(`http://localhost:${PORT}/`, {
  waitUntil: 'networkidle0',
  timeout: 60000,
});

// ── Step 1: Scroll the entire page to trigger client:visible hydration ──
console.log('Scrolling page to hydrate all charts...');
await page.evaluate(async () => {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const step = 400;
  const max = document.body.scrollHeight;
  for (let y = 0; y < max; y += step) {
    window.scrollTo(0, y);
    await delay(100);
  }
  // Scroll back to top
  window.scrollTo(0, 0);
});

// Wait for all chart canvases to render after hydration
console.log('Waiting for charts to render...');
await new Promise((r) => setTimeout(r, 5000));

// Count canvases
const canvasCount = await page.evaluate(() => document.querySelectorAll('canvas').length);
console.log(`Found ${canvasCount} canvas elements`);

// ── Step 2: Convert canvases to images and prepare for print ──
console.log('Converting charts to static images...');
await page.evaluate(() => {
  // Open all <details> elements
  document.querySelectorAll('details').forEach((d) => (d.open = true));

  // Convert each Chart.js canvas to a static <img> inside its .chart-container
  document.querySelectorAll('.chart-container canvas').forEach((canvas) => {
    try {
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const img = document.createElement('img');
      img.src = dataUrl;
      img.className = 'chart-print-fallback';
      // Inline styles to ensure visibility in print mode
      img.style.cssText = 'width:100%;height:auto;display:block;';
      // Insert after canvas inside the same .chart-container
      canvas.parentNode.insertBefore(img, canvas.nextSibling);
      // Explicitly hide canvas (print.css also does this, but be safe)
      canvas.style.display = 'none';
    } catch (e) {
      console.error('Canvas conversion failed:', e.message);
    }
  });

  // Also handle any canvas not inside .chart-container
  document.querySelectorAll('canvas').forEach((canvas) => {
    if (canvas.style.display === 'none') return; // already handled
    try {
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const img = document.createElement('img');
      img.src = dataUrl;
      img.style.cssText = 'width:100%;height:auto;display:block;';
      canvas.parentNode.insertBefore(img, canvas.nextSibling);
      canvas.style.display = 'none';
    } catch (e) {}
  });
});

const imgCount = await page.evaluate(() => document.querySelectorAll('.chart-print-fallback').length);
console.log(`Created ${imgCount} chart fallback images`);

// ── Step 3: Generate PDF ──
console.log('Generating PDF...');
await page.pdf({
  path: PDF_PATH,
  format: 'Letter',
  margin: { top: '1in', right: '1in', bottom: '1in', left: '1in' },
  printBackground: true,
  displayHeaderFooter: false,
  preferCSSPageSize: false,
});

const size = statSync(PDF_PATH).size;
console.log(`PDF saved: ${PDF_PATH} (${(size / 1024 / 1024).toFixed(1)} MB)`);

// Copy to public/pdfs/ for deployment
const pubDir = dirname(PUBLIC_PDF);
if (!existsSync(pubDir)) mkdirSync(pubDir, { recursive: true });
copyFileSync(PDF_PATH, PUBLIC_PDF);
console.log(`Copied to: ${PUBLIC_PDF}`);

await browser.close();
server.close();
process.exit(0);
