export const BLOAT_CATALOG = [
  {
    name: 'uuid',
    ecosystem: 'npm',
    category: 'trivial-crypto',
    reason: 'Node.js 16.7+ & modern browsers provide crypto.randomUUID() natively.',
    replacement: 'crypto.randomUUID()',
    nativeImport: null,
    example: 'const id = crypto.randomUUID();',
    canAutoPurge: true,
    transformPatterns: [
      {
        find: /import\s*\{\s*v4\s+as\s+uuidv4\s*\}\s*from\s*['"]uuid['"];?/g,
        replace: ''
      },
      {
        find: /import\s*\{\s*v4\s*\}\s*from\s*['"]uuid['"];?/g,
        replace: ''
      },
      {
        find: /const\s*\{\s*v4(?::\s*uuidv4)?\s*\}\s*=\s*require\(['"]uuid['"]\);?/g,
        replace: ''
      },
      {
        find: /\buuidv4\(\)/g,
        replace: 'crypto.randomUUID()'
      },
      {
        find: /\bv4\(\)/g,
        replace: 'crypto.randomUUID()'
      }
    ]
  },
  {
    name: 'axios',
    ecosystem: 'npm',
    category: 'http-client',
    reason: 'Native fetch() is built into Node 18+ and all modern web runtimes.',
    replacement: 'fetch() + AbortSignal.timeout()',
    nativeImport: null,
    example: 'const res = await fetch(url, { signal: AbortSignal.timeout(5000) }); const data = await res.json();',
    canAutoPurge: false
  },
  {
    name: 'rimraf',
    ecosystem: 'npm',
    category: 'filesystem',
    reason: 'Node 14.14+ provides fs.promises.rm(dir, { recursive: true, force: true }).',
    replacement: 'fs.promises.rm(path, { recursive: true, force: true })',
    nativeImport: "import fs from 'node:fs/promises';",
    example: "await fs.rm(dir, { recursive: true, force: true });",
    canAutoPurge: true,
    transformPatterns: [
      {
        find: /import\s+rimraf\s+from\s*['"]rimraf['"];?/g,
        replace: "import fs from 'node:fs/promises';"
      },
      {
        find: /const\s+rimraf\s*=\s*require\(['"]rimraf['"]\);?/g,
        replace: "const fs = require('node:fs/promises');"
      },
      {
        find: /rimraf\.sync\(([^)]+)\)/g,
        replace: 'fs.rmSync($1, { recursive: true, force: true })'
      },
      {
        find: /await\s+rimraf\(([^)]+)\)/g,
        replace: 'await fs.rm($1, { recursive: true, force: true })'
      }
    ]
  },
  {
    name: 'mkdirp',
    ecosystem: 'npm',
    category: 'filesystem',
    reason: 'Node 10.12+ provides fs.promises.mkdir(dir, { recursive: true }).',
    replacement: 'fs.promises.mkdir(path, { recursive: true })',
    nativeImport: "import fs from 'node:fs/promises';",
    example: "await fs.mkdir(dir, { recursive: true });",
    canAutoPurge: true,
    transformPatterns: [
      {
        find: /import\s+mkdirp\s+from\s*['"]mkdirp['"];?/g,
        replace: "import fs from 'node:fs/promises';"
      },
      {
        find: /const\s+mkdirp\s*=\s*require\(['"]mkdirp['"]\);?/g,
        replace: "const fs = require('node:fs/promises');"
      },
      {
        find: /mkdirp\.sync\(([^)]+)\)/g,
        replace: 'fs.mkdirSync($1, { recursive: true })'
      },
      {
        find: /await\s+mkdirp\(([^)]+)\)/g,
        replace: 'await fs.mkdir($1, { recursive: true })'
      }
    ]
  },
  {
    name: 'is-number',
    ecosystem: 'npm',
    category: 'micro-utility',
    reason: 'Can be written in 1 line: typeof val === "number" && isFinite(val)',
    replacement: 'typeof x === "number" && Number.isFinite(x)',
    canAutoPurge: false
  },
  {
    name: 'is-odd',
    ecosystem: 'npm',
    category: 'micro-utility',
    reason: 'Can be written natively: n % 2 !== 0',
    replacement: 'n % 2 !== 0',
    canAutoPurge: false
  },
  {
    name: 'is-even',
    ecosystem: 'npm',
    category: 'micro-utility',
    reason: 'Can be written natively: n % 2 === 0',
    replacement: 'n % 2 === 0',
    canAutoPurge: false
  },
  {
    name: 'left-pad',
    ecosystem: 'npm',
    category: 'micro-utility',
    reason: 'String.prototype.padStart() is standard in ES2017+.',
    replacement: 'str.padStart(length, padChar)',
    canAutoPurge: false
  },
  {
    name: 'dotenv',
    ecosystem: 'npm',
    category: 'config',
    reason: 'Node 20.6+ supports process.loadEnvFile() and the --env-file CLI flag.',
    replacement: 'process.loadEnvFile() or node --env-file=.env',
    canAutoPurge: false
  },
  {
    name: 'lodash',
    ecosystem: 'npm',
    category: 'utility-monolith',
    reason: 'Modern ES6+ has Array/Object methods, flat, map, structuredClone, Optional Chaining.',
    replacement: 'Array.prototype.*, structuredClone(), Object.fromEntries()',
    canAutoPurge: false
  },
  {
    name: 'moment',
    ecosystem: 'npm',
    category: 'date-time',
    reason: 'Moment is legacy and huge (~300KB). Use Intl.DateTimeFormat or native Date.',
    replacement: 'Intl.DateTimeFormat or Date',
    canAutoPurge: false
  },
  {
    name: 'chalk',
    ecosystem: 'npm',
    category: 'cli-colors',
    reason: 'Node 21.7+ has util.styleText(), or use raw ANSI escape sequences.',
    replacement: 'util.styleText() or ANSI escape strings',
    canAutoPurge: false
  },
  {
    name: 'picocolors',
    ecosystem: 'npm',
    category: 'cli-colors',
    reason: 'Raw ANSI codes require 0 dependencies and 10 lines of code.',
    replacement: 'ANSI escape codes',
    canAutoPurge: false
  },
  // Python ecosystem
  {
    name: 'requests',
    ecosystem: 'pypi',
    category: 'http-client',
    reason: 'urllib.request is built into Python standard library.',
    replacement: 'urllib.request + json',
    example: 'import urllib.request, json\nwith urllib.request.urlopen(url) as r:\n    data = json.loads(r.read())',
    canAutoPurge: false
  },
  {
    name: 'python-dotenv',
    ecosystem: 'pypi',
    category: 'config',
    reason: 'Simple .env parser can be implemented in 6 lines using os.environ.',
    replacement: 'os.environ + basic file read',
    canAutoPurge: false
  },
  {
    name: 'tabulate',
    ecosystem: 'pypi',
    category: 'formatting',
    reason: 'Python f-strings handle column alignment natively with f"{val:<20}".',
    replacement: 'f"{col1:<15} {col2:>10}"',
    canAutoPurge: false
  }
];

export function getBloatInfo(packageName, ecosystem = 'npm') {
  return BLOAT_CATALOG.find(b => b.name.toLowerCase() === packageName.toLowerCase() && b.ecosystem === ecosystem);
}
