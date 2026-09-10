import fs from 'node:fs';
import path from 'node:path';

export const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m'
};

export function color(text, code) {
  return `${code}${text}${c.reset}`;
}

export function findFiles(dir, extensions, excludes = ['node_modules', '.git', 'dist', 'build', '.next', '__pycache__', 'venv', '.venv']) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  function traverse(currentDir) {
    let entries;
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (!excludes.includes(entry.name)) {
          traverse(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (extensions.includes(ext) || extensions.includes('*')) {
          results.push(fullPath);
        }
      }
    }
  }

  traverse(dir);
  return results;
}

export function readTextSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

export function writeTextSafe(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

export function readJsonSafe(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
