#!/usr/bin/env node
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { scanProject, printScanReport } from '../src/scanner.js';
import { auditProject, printAuditReport } from '../src/audit.js';
import { purgePackage, printPurgeReport } from '../src/purger.js';
import { createUnifiedDiff, printFormattedDiff } from '../src/diff_guard.js';
import { installSkills, printInstallReport } from '../src/installer.js';
import { c, color, readTextSafe } from '../src/utils.js';

const args = process.argv.slice(2);
const command = args[0];

function showHelp() {
  console.log(`
${color('min-tok', c.bold + c.cyan)} (alias: ${color('nobloat', c.dim)}) - Zero-Dependency Anti-Over-Engineering & Bloat Eliminator

${color('PENGGUNAAN:', c.bold)}
  min-tok <command> [target] [opsi]

${color('PERINTAH:', c.bold)}
  ${color('scan', c.green)} [path]              Pindai dependensi bloat di package.json / requirements.txt / pyproject.toml
  ${color('audit', c.green)} [path]             Audit rasio over-engineering, tingkat abstraksi & densitas dependensi
  ${color('purge', c.green)} <package> [path]   Refaktor otomatis impor bloat menjadi standard library & hapus dari manifest
  ${color('diff', c.green)} <file1> <file2>     Format unified diff padat untuk menghemat limit token AI
  ${color('install-skills', c.green)} [path]    Pasang/sinkronkan bundle skills AI secara otomatis ke direktori agent
  ${color('help, --help, -h', c.green)}         Tampilkan panduan bantuan
  ${color('version, -v', c.green)}              Tampilkan versi min-tok

${color('OPSI:', c.bold)}
  ${color('--strict, --ci', c.green)}           Kembalikan exit code 1 jika ditemukan bloat atau skor over-engineering tinggi

${color('CONTOH:', c.bold)}
  min-tok scan .
  min-tok scan . --strict
  min-tok audit ./src
  min-tok purge uuid .
  min-tok purge rimraf .
  min-tok diff old.js new.js
  min-tok install-skills
`);
}

function showVersion() {
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const pkgPath = path.join(currentDir, '../package.json');
  try {
    const raw = fs.readFileSync(pkgPath, 'utf8');
    const parsed = JSON.parse(raw);
    console.log(`min-tok v${parsed.version}`);
  } catch {
    console.log('min-tok v1.0.0');
  }
}

if (!command || command === 'help' || command === '--help' || command === '-h') {
  showHelp();
  process.exit(0);
}

if (command === 'version' || command === '--version' || command === '-v') {
  showVersion();
  process.exit(0);
}

const isStrict = args.includes('--strict') || args.includes('--ci');

switch (command) {
  case 'scan': {
    const target = args.slice(1).find(a => !a.startsWith('--')) || '.';
    const report = scanProject(target);
    printScanReport(report);
    if (isStrict && report.totalBloatFound > 0) {
      process.exit(1);
    }
    break;
  }

  case 'audit': {
    const target = args.slice(1).find(a => !a.startsWith('--')) || '.';
    const report = auditProject(target);
    printAuditReport(report);
    if (isStrict && report.score >= 60) {
      process.exit(1);
    }
    break;
  }

  case 'purge': {
    const pkgName = args[1];
    const target = args[2] || '.';
    if (!pkgName || pkgName.startsWith('--')) {
      console.error(color('Kesalahan: Harap tentukan nama paket yang ingin dibersihkan. Contoh: min-tok purge uuid', c.red));
      process.exit(1);
    }
    const result = purgePackage(pkgName, target);
    printPurgeReport(result);
    break;
  }

  case 'diff': {
    const file1 = args[1];
    const file2 = args[2];
    if (!file1 || !file2) {
      console.error(color('Kesalahan: Harap tentukan dua file untuk dibandingkan. Contoh: min-tok diff fileA.js fileB.js', c.red));
      process.exit(1);
    }
    const text1 = readTextSafe(file1);
    const text2 = readTextSafe(file2);
    if (text1 === null || text2 === null) {
      console.error(color('Kesalahan: Gagal membaca salah satu file.', c.red));
      process.exit(1);
    }
    const diff = createUnifiedDiff(text1, text2, path.basename(file1));
    printFormattedDiff(diff);
    break;
  }

  case 'install-skills':
  case 'sync-skills': {
    const target = args.slice(1).find(a => !a.startsWith('--')) || null;
    const result = installSkills(target);
    printInstallReport(result);
    break;
  }

  default:
    console.error(color(`Perintah tidak dikenal: '${command}'. Jalankan 'min-tok help' untuk panduan.`, c.red));
    process.exit(1);
}
