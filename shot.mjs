import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdir, rm } from 'node:fs/promises';

const url = 'http://localhost:3100/';
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
const sectionIds = [
  'inicio',
  'procedimentos',
  'resultados',
  'como-funciona',
  'sobre',
  'depoimentos',
  'localizacao',
  'faq',
  'contato',
];

await mkdir('.impeccable/review', { recursive: true });
await mkdir('/tmp/shot-tiles', { recursive: true });

// Chromium's fullPage/element-oversized capture stitches tiles internally and,
// on this tall single-page site, was producing duplicated/blank tiles. Instead
// we scroll to each section ourselves (real incremental wheel scrolling, which
// reliably fires this design's scroll-triggered Reveal entrances in a headless
// run — an instant window.scrollTo jump proved to leave them stuck invisible
// even though the same IntersectionObserver fires fine for a real gesture) and
// stitch multi-viewport-tall sections from real, full-viewport screenshots.
//
// Crucially, every tile's crop is computed from the *measured* scroll position
// after scrolling, never from the wheel-delta target: `mouse.wheel` deltas
// don't map 1:1 to CSS scroll pixels, and near the document's own end a target
// can exceed the max scroll offset and get silently clamped — both throw off
// any crop math computed from the intended target instead of reality.
const browser = await chromium.launch();
for (const v of viewports) {
  const page = await browser.newPage({ viewport: { width: v.width, height: v.height } });
  await page.goto(url, { waitUntil: 'networkidle' });
  // The floating WhatsApp FAB (`fixed right-5 bottom-5`, mobile-only) re-paints
  // at the same viewport corner in every scroll-tile, same as the rail/sticky
  // bar; unlike those two it isn't a signature device under review, so it's
  // simplest to just hide it for the capture session rather than mask it.
  await page.addStyleTag({ content: '.animate-wa-pulse { display: none !important; }' });
  await page.waitForTimeout(500);

  const boxes = {};
  for (const id of [...sectionIds, 'footer-marker']) {
    const selector = id === 'footer-marker' ? 'footer' : `#${id}`;
    boxes[id === 'footer-marker' ? 'footer' : id] = await page.locator(selector).boundingBox();
  }

  // The rail (desktop) / chapter bar (mobile) is `position: fixed`/`sticky`, so
  // it re-paints identically in every scroll-tile of a multi-tile section —
  // correct on screen, but reads as duplicated chrome once tiles are stitched
  // into one image. Every continuation tile crops it out (by real position,
  // per the note above) so each stitched screenshot shows it exactly once.
  const chrome =
    v.name === 'desktop'
      ? { edge: 'left', size: Math.round((await page.locator('nav[aria-label="Conversa com a Dra. Letícia"]').boundingBox())?.width ?? 0), color: '#04241a' }
      : { edge: 'top', size: Math.round((await page.locator('.sticky.top-0').first().boundingBox())?.height ?? 0), color: '#04241a' };
  const vOverlap = chrome.edge === 'top' ? chrome.size : 0; // only vertical masking steals scroll content

  let scrollY = 0; // authoritative running scroll position, re-measured every tile
  for (const id of [...sectionIds, 'footer']) {
    const box = boxes[id];
    if (!box) continue;
    const top = Math.round(box.y);
    const height = Math.round(box.height);

    let covered = 0; // how much of this section's content is already captured
    const tilePaths = [];
    while (covered < height) {
      const isFirst = tilePaths.length === 0;
      const documentPositionCovered = top + covered;
      // Aim past the fixed/sticky chrome's overlap on every tile but the
      // first, so its crop starts right where the previous tile left off.
      const target = isFirst ? top : documentPositionCovered - vOverlap;

      while (scrollY < target) {
        const delta = Math.min(200, target - scrollY);
        await page.mouse.wheel(0, delta);
        await page.waitForTimeout(50);
        scrollY = await page.evaluate(() => window.scrollY);
      }
      await page.waitForTimeout(750); // let the 700ms Reveal transition settle
      if (id === 'localizacao') {
        await page.waitForTimeout(1500); // Google Maps iframe tiles load async
      }
      scrollY = await page.evaluate(() => window.scrollY); // re-measure right before the shot

      const rawPath = `/tmp/shot-tiles/${v.name}-${id}-${tilePaths.length}-raw.png`;
      await page.screenshot({ path: rawPath, clip: { x: 0, y: 0, width: v.width, height: v.height } });

      const keepTop = Math.max(0, documentPositionCovered - scrollY);
      const keepLeft = !isFirst && chrome.edge === 'left' ? chrome.size : 0;
      const keepHeight = Math.min(v.height - keepTop, height - covered);
      const keepWidth = v.width - keepLeft;

      const tilePath = `/tmp/shot-tiles/${v.name}-${id}-${tilePaths.length}.png`;
      if (keepTop === 0 && keepLeft === 0) {
        await sharp(rawPath).toFile(tilePath);
      } else {
        await sharp(rawPath).extract({ left: keepLeft, top: keepTop, width: keepWidth, height: keepHeight }).toFile(tilePath);
      }
      tilePaths.push({ path: tilePath, width: keepWidth, height: keepHeight, left: keepLeft });
      covered += keepHeight;
    }

    if (tilePaths.length === 1) {
      await sharp(tilePaths[0].path).toFile(`.impeccable/review/${v.name}-${id}.png`);
    } else {
      const composite = sharp({ create: { width: v.width, height, channels: 3, background: chrome.color } });
      let offset = 0;
      const overlays = tilePaths.map((tile) => {
        const layer = { input: tile.path, top: offset, left: tile.left };
        offset += tile.height;
        return layer;
      });
      await composite.composite(overlays).png().toFile(`.impeccable/review/${v.name}-${id}.png`);
    }
  }
  await page.close();
}
await browser.close();
await rm('/tmp/shot-tiles', { recursive: true, force: true });
console.log('done');
