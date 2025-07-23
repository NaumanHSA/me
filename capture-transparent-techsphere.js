import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 850, height: 850 },
    args: ['--disable-gpu', '--no-sandbox']
  });

  const page = await browser.newPage();
  const filePath = path.resolve(__dirname, 'public/tech-sphere.html');
  const url = 'file://' + filePath;

  await page.goto(url);
  await new Promise(resolve => setTimeout(resolve, 2000)); // delay before capture

  const frames = 180;
  const delay = 1000 / 30;
  const outDir = path.resolve(__dirname, 'frames');
  fs.mkdirSync(outDir, { recursive: true });

  for (let i = 0; i < frames; i++) {
    const screenshotPath = path.join(outDir, `frame_${String(i).padStart(3, '0')}.png`);
    await page.screenshot({ 
      path: screenshotPath, 
      omitBackground: true ,
      fullPage: false
    });

    await page.evaluate(() => {
      window.angleX += 0.2;
      window.angleY += 0.15;
    });

    await new Promise(resolve => setTimeout(resolve, delay));
  }

  await browser.close();
})();