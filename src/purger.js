import path from 'node:path';
import fs from 'node:fs';
import { findFiles, readTextSafe, writeTextSafe, readJsonSafe, c, color } from './utils.js';
import { getBloatInfo } from './database.js';

export function purgePackage(packageName, projectDir = process.cwd()) {
  const targetDir = path.resolve(projectDir);
  const bloat = getBloatInfo(packageName, 'npm');

  if (!bloat) {
    return {
      success: false,
      message: `Paket '${packageName}' tidak ditemukan dalam katalog auto-purge bloat.`
    };
  }

  if (!bloat.canAutoPurge || !bloat.transformPatterns) {
    return {
      success: false,
      message: `Paket '${packageName}' terdeteksi bloat, namun memerlukan refactoring manual terpandu (alasan: struktur API kompleks).`
    };
  }

  const codeFiles = findFiles(targetDir, ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs']);
  const modifiedFiles = [];

  for (const file of codeFiles) {
    let content = readTextSafe(file);
    if (!content) continue;

    let modified = false;
    for (const pattern of bloat.transformPatterns) {
      if (pattern.find.test(content)) {
        content = content.replace(pattern.find, pattern.replace);
        modified = true;
      }
    }

    if (modified) {
      writeTextSafe(file, content);
      modifiedFiles.push(path.relative(targetDir, file));
    }
  }

  // Remove from package.json
  const pkgPath = path.join(targetDir, 'package.json');
  let removedFromPkg = false;
  if (fs.existsSync(pkgPath)) {
    const pkg = readJsonSafe(pkgPath);
    if (pkg) {
      if (pkg.dependencies && pkg.dependencies[packageName]) {
        delete pkg.dependencies[packageName];
        removedFromPkg = true;
      }
      if (pkg.devDependencies && pkg.devDependencies[packageName]) {
        delete pkg.devDependencies[packageName];
        removedFromPkg = true;
      }
      if (removedFromPkg) {
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
      }
    }
  }

  return {
    success: true,
    packageName,
    replacement: bloat.replacement,
    removedFromPkg,
    modifiedFiles
  };
}

export function printPurgeReport(result) {
  if (!result.success) {
    console.log(`\n${color('Gagal Purge:', c.red + c.bold)} ${result.message}\n`);
    return;
  }

  console.log(`\n${color('== NOBLOAT PURGE COMPLETED ==', c.bold + c.green)}`);
  console.log(`${color('Paket Dibersihkan:', c.dim)} ${color(result.packageName, c.bold)}`);
  console.log(`${color('Diganti dengan Native:', c.dim)} ${color(result.replacement, c.green)}`);
  console.log(`${color('Dihapus dari package.json:', c.dim)} ${result.removedFromPkg ? color('Ya', c.green) : 'Tidak ada di manifest'}`);
  console.log(`${color('File Kode yang Direfaktor:', c.dim)} ${result.modifiedFiles.length} file`);

  for (const f of result.modifiedFiles) {
    console.log(`  ${color('✓', c.green)} ${f}`);
  }
  console.log('');
}
