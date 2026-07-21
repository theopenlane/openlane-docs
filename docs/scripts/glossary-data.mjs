// Generates src/data/glossary.json from the glossary page so the <Term>
// component can render hover definitions. Terms are the `**Term**` paragraphs
// under the letter headings; the hover text is the first sentence(s) of the
// definition, capped, with markdown syntax stripped.
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const src = join(root, 'docs/platform/glossary/index.mdx');
const out = join(root, 'src/data/glossary.json');

const text = readFileSync(src, 'utf8');
const lines = text.split('\n');

const terms = {};
let current = null;
let buf = [];

const flush = () => {
  if (!current) return;
  const def = buf.join(' ').replace(/\s+/g, ' ').trim();
  if (def) {
    // strip markdown links/emphasis for the tooltip
    let clean = def
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/_([^_]+)_/g, '$1')
      .replace(/`([^`]+)`/g, '$1');
    if (clean.length > 260) {
      const cut = clean.slice(0, 260);
      const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('; '));
      clean = end > 80 ? cut.slice(0, end + 1) : cut.trimEnd() + '…';
    }
    const slug = current
      .toLowerCase()
      .replace(/\([^)]*\)/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    terms[slug] = {term: current, def: clean};
  }
  current = null;
  buf = [];
};

for (const line of lines) {
  const m = line.match(/^\*\*(.+)\*\*\s*$/);
  if (m) {
    flush();
    current = m[1];
    continue;
  }
  if (/^## /.test(line)) {
    flush();
    continue;
  }
  if (current) buf.push(line);
}
flush();

mkdirSync(dirname(out), {recursive: true});
writeFileSync(out, JSON.stringify(terms, null, 1));
console.log(`glossary-data: ${Object.keys(terms).length} terms -> src/data/glossary.json`);
