import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  '/',
  '/singapore',
  '/singapore/should-i-get-a-car',
  '/singapore/leasing-guide',
  '/singapore/buying-guide',
  '/singapore/insurance-guide',
  '/singapore/licence-conversion',
  '/singapore/ev-guide',
  '/hongkong',
  '/hongkong/should-i-get-a-car',
  '/hongkong/leasing-guide',
  '/hongkong/buying-guide',
  '/hongkong/frt-tax-explained',
  '/hongkong/insurance-guide',
  '/hongkong/mot-maintenance',
  '/hongkong/licence-conversion',
  '/hongkong/ev-guide',
  '/singapore/calculators',
  '/singapore/garage-finder',
  '/hongkong/calculators',
  '/hongkong/garage-finder',
];

const template = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf-8');
const { render } = await import('./.ssr/entry-server.js');

for (const route of ROUTES) {
  const appHtml = render(route);
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = route === '/'
    ? path.join(__dirname, 'dist')
    : path.join(__dirname, 'dist' + route);

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log('Pre-rendered:', route);
}

console.log('Pre-rendering complete.');
