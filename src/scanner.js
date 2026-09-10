import path from 'node:path';
import fs from 'node:fs';
import { readJsonSafe, readTextSafe, c, color } from './utils.js';
import { BLOAT_CATALOG, getBloatInfo } from './database.js';

export function scanProject(projectDir = process.cwd()) {
  const findings = [];
  const targetDir = path.resolve(projectDir);

  // 1. Scan package.json
  const pkgPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = readJsonSafe(pkgPath);
    if (pkg) {
      const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
      for (const [depName, version] of Object.entries(deps)) {
        const bloat = getBloatInfo(depName, 'npm');
        if (bloat) {
          findings.push({
            ecosystem: 'npm',
            file: 'package.json',
            package: depName,
            version,
            category: bloat.category,
            reason: bloat.reason,
            replacement: bloat.replacement,
            example: bloat.example || null,
            canAutoPurge: bloat.canAutoPurge
          });
        }
      }
    }
  }

  // 2. Scan requirements.txt
  const reqPath = path.join(targetDir, 'requirements.txt');
  if (fs.existsSync(reqPath)) {
    const content = readTextSafe(reqPath);
    if (content) {
      const lines = content.split('\n');
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        const depName = line.split(/[=<>~!]/)[0].trim().toLowerCase();
        const bloat = getBloatInfo(depName, 'pypi');
        if (bloat) {
          findings.push({
            ecosystem: 'pypi',
            file: 'requirements.txt',
            package: depName,
            version: line,
            category: bloat.category,
            reason: bloat.reason,
            replacement: bloat.replacement,
            example: bloat.example || null,
            canAutoPurge: bloat.canAutoPurge
          });
        }
      }
    }
  }

  // 3. Scan pyproject.toml
  const pyprojectPath = path.join(targetDir, 'pyproject.toml');
  if (fs.existsSync(pyprojectPath)) {
    const content = readTextSafe(pyprojectPath);
    if (content) {
      const lines = content.split('\n');
      let inDepsSection = false;
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (line.startsWith('[') && line.endsWith(']')) {
          inDepsSection = line.includes('dependencies');
          continue;
        }
        if (line.startsWith('dependencies') && line.includes('=')) {
          inDepsSection = true;
        }
        if (inDepsSection) {
          const match = line.match(/["']([a-zA-Z0-9_-]+)(?:[=<>~!]?[^"']*)?["']/);
          if (match) {
            const depName = match[1].toLowerCase();
            const bloat = getBloatInfo(depName, 'pypi');
            if (bloat && !findings.some(f => f.package === depName && f.file === 'pyproject.toml')) {
              findings.push({
                ecosystem: 'pypi',
                file: 'pyproject.toml',
                package: depName,
                version: match[0],
                category: bloat.category,
                reason: bloat.reason,
                replacement: bloat.replacement,
                example: bloat.example || null,
                canAutoPurge: bloat.canAutoPurge
              });
            }
          }
        }
      }
    }
  }

  return {
    targetDir,
    totalBloatFound: findings.length,
    findings
  };
}

export function printScanReport(report) {
  console.log(`\n${color('== MIN-TOK SCAN REPORT ==', c.bold + c.cyan)}`);
  console.log(`${color('Directory:', c.dim)} ${report.targetDir}`);
  console.log(`${color('Bloat Libraries Found:', c.dim)} ${report.totalBloatFound === 0 ? color('0 (Clean!)', c.green) : color(report.totalBloatFound, c.red + c.bold)}\n`);

  if (report.totalBloatFound === 0) {
    console.log(`${color('✓ Repositori bebas dari bloat library terdaftar. Ramping & efisien!', c.green)}`);
    return;
  }

  for (const item of report.findings) {
    console.log(`${color('●', c.red)} ${color(item.package, c.bold)} (${item.ecosystem}) [${item.category}] di ${color(item.file, c.dim)}`);
    console.log(`  ${color('Alasan Bloat:', c.yellow)} ${item.reason}`);
    console.log(`  ${color('Solusi Native:', c.green)} ${item.replacement}`);
    if (item.canAutoPurge) {
      console.log(`  ${color('Auto-Purgeable:', c.cyan)} Ya (Jalankan: min-tok purge ${item.package})`);
    }
    console.log('');
  }
}
