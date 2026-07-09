#!/usr/bin/env node
// Regenerates the auto-generated contents list in README.md by scanning the
// repo tree for note files (.md / .mdx) and grouping them by folder location.
// Usage: node scripts/generate-readme.js

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const README_PATH = path.join(ROOT, 'README.md');
const NOTE_EXTENSIONS = new Set(['.md', '.mdx']);
const SKIP_DIRS = new Set(['.git', '.github', 'node_modules', 'scripts']);
const START_MARKER = '<!-- TOC:START -->';
const END_MARKER = '<!-- TOC:END -->';

function naturalCompare(a, b) {
  const chunk = (s) => s.match(/\d+|\D+/g) || [];
  const ca = chunk(a);
  const cb = chunk(b);
  const len = Math.max(ca.length, cb.length);
  for (let i = 0; i < len; i++) {
    const x = ca[i] ?? '';
    const y = cb[i] ?? '';
    const nx = Number(x);
    const ny = Number(y);
    if (!Number.isNaN(nx) && !Number.isNaN(ny) && x !== '' && y !== '') {
      if (nx !== ny) return nx - ny;
    } else {
      const lx = x.toLowerCase();
      const ly = y.toLowerCase();
      if (lx !== ly) return lx < ly ? -1 : 1;
      if (x !== y) return x < y ? -1 : 1;
    }
  }
  return 0;
}

// Walk a directory and return only files/subdirs that contain note files
// (directories with images or other assets but no .md/.mdx are dropped).
function buildTree(absDir) {
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  const files = [];
  const dirs = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      const subtree = buildTree(path.join(absDir, entry.name));
      if (subtree) dirs.push({ name: entry.name, ...subtree });
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (NOTE_EXTENSIONS.has(ext) && path.join(absDir, entry.name) !== README_PATH) {
        files.push(entry.name);
      }
    }
  }

  if (files.length === 0 && dirs.length === 0) return null;

  files.sort(naturalCompare);
  dirs.sort((a, b) => naturalCompare(a.name, b.name));
  return { files, dirs };
}

function encodePath(relPath) {
  return relPath.split('/').map((segment) => encodeURIComponent(segment)).join('/');
}

function renderTree(node, relDir, depth) {
  let out = '';
  const indent = '  '.repeat(depth);

  for (const file of node.files) {
    const title = path.basename(file, path.extname(file));
    const relPath = relDir ? `${relDir}/${file}` : file;
    out += `${indent}- [${title}](./${encodePath(relPath)})\n`;
  }
  for (const dir of node.dirs) {
    out += `${indent}- **${dir.name}**\n`;
    const nextRelDir = relDir ? `${relDir}/${dir.name}` : dir.name;
    out += renderTree(dir, nextRelDir, depth + 1);
  }
  return out;
}

function generateToc() {
  const root = buildTree(ROOT);
  if (!root) return '_(문서가 없습니다)_\n';

  let out = '';
  for (const dir of root.dirs) {
    out += `\n### ${dir.name}\n\n`;
    out += renderTree(dir, dir.name, 0);
  }
  // top-level loose note files (outside any category folder), if any remain
  if (root.files.length > 0) {
    out += `\n### ETC\n\n`;
    out += renderTree({ files: root.files, dirs: [] }, '', 0);
  }
  return out.trimStart() + '\n';
}

function main() {
  const toc = generateToc();
  const existing = fs.existsSync(README_PATH) ? fs.readFileSync(README_PATH, 'utf8') : '';

  const block = `${START_MARKER}\n${toc}${END_MARKER}`;

  let next;
  if (existing.includes(START_MARKER) && existing.includes(END_MARKER)) {
    const pattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`);
    next = existing.replace(pattern, block);
  } else {
    const header = existing.trim().length > 0
      ? existing.trimEnd() + '\n\n'
      : '# TIL\n\n오늘 한 공부를 정리해서 올리는 곳입니다!!\n\n';
    next = `${header}## 📚 Contents\n\n${block}\n`;
  }

  fs.writeFileSync(README_PATH, next, 'utf8');
  console.log('README.md updated.');
}

main();
