import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('Pre-rendering static HTML...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  const fileUrl = 'file://' + indexPath;
  
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  
  // Wait for React to render into the root div
  await page.waitForSelector('#root > *');
  
  const prettier = (await import('prettier')).default || await import('prettier');
  let html = await page.content();
  await browser.close();
  
  const fileUrlDir = 'file://' + path.join(__dirname, 'dist') + '/';
  const fileUrlDirEncoded = fileUrlDir.replace(/ /g, '%20');
  
  html = html.replaceAll(fileUrlDirEncoded, './').replaceAll(fileUrlDir, './');
  
  html = await prettier.format(html, { parser: 'html', printWidth: 120 });
  
  fs.writeFileSync(indexPath, html);
  console.log('Successfully pre-rendered HTML into dist/index.html');
})();
