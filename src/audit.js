import path from 'node:path';
import fs from 'node:fs';
import { findFiles, readJsonSafe, readTextSafe, c, color } from './utils.js';

export function auditProject(projectDir = process.cwd()) {
  const targetDir = path.resolve(projectDir);
  const srcFiles = findFiles(targetDir, ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs', '.py', '.go']);

  let totalLinesOfCode = 0;
  let abstractionFiles = 0;
  const abstractionPatterns = [
    /factory/i,
    /interface/i,
    /abstract/i,
    /repository/i,
    /provider/i,
    /adapter/i,
    /facade/i,
    /dto/i
  ];

  for (const file of srcFiles) {
    const fileName = path.basename(file);
    const isAbstraction = abstractionPatterns.some(p => p.test(fileName));
    if (isAbstraction) abstractionFiles++;

    const content = readTextSafe(file);
    if (content) {
      totalLinesOfCode += content.split('\n').filter(l => l.trim().length > 0).length;
    }
  }

  // Check dependencies
  const pkgPath = path.join(targetDir, 'package.json');
  let depCount = 0;
  let devDepCount = 0;
  if (fs.existsSync(pkgPath)) {
    const pkg = readJsonSafe(pkgPath);
    if (pkg) {
      depCount = Object.keys(pkg.dependencies || {}).length;
      devDepCount = Object.keys(pkg.devDependencies || {}).length;
    }
  }

  // Calculate Over-Engineering Score (0 to 100, where 0 is lean, >50 is alarming)
  let overEngineeringScore = 0;
  const warnings = [];

  // Ratio of abstraction files to total source files
  const abstractionRatio = srcFiles.length > 0 ? (abstractionFiles / srcFiles.length) : 0;
  if (abstractionRatio > 0.3 && totalLinesOfCode < 2000) {
    overEngineeringScore += 35;
    warnings.push(`Rasio file abstraksi tinggi (${(abstractionRatio * 100).toFixed(0)}%) untuk kode berukuran kecil (${totalLinesOfCode} LOC). Waspada 'Architecture Astronauts'!`);
  }

  // Dependency bloat ratio
  if (depCount > 15 && totalLinesOfCode < 1000) {
    overEngineeringScore += 40;
    warnings.push(`Terdapat ${depCount} dependencies untuk proyek yang hanya memiliki ${totalLinesOfCode} LOC!`);
  } else if (depCount > 25) {
    overEngineeringScore += 25;
    warnings.push(`Jumlah dependencies (${depCount}) cukup besar, periksa kemungkinan duplikasi fungsionalitas.`);
  }

  const score = Math.min(100, overEngineeringScore);
  let status = 'LEAN & PRAGMATIC';
  let statusColor = c.green;

  if (score >= 60) {
    status = 'HIGH RISK: HEAVILY OVER-ENGINEERED';
    statusColor = c.red + c.bold;
  } else if (score >= 30) {
    status = 'MODERATE: POTENTIAL BLOAT & OVER-ABSTRACTION';
    statusColor = c.yellow + c.bold;
  }

  return {
    targetDir,
    totalFiles: srcFiles.length,
    totalLinesOfCode,
    abstractionFiles,
    depCount,
    devDepCount,
    score,
    status,
    statusColor,
    warnings
  };
}

export function printAuditReport(report) {
  console.log(`\n${color('== NOBLOAT ARCHITECTURE AUDIT ==', c.bold + c.cyan)}`);
  console.log(`${color('Directory:', c.dim)} ${report.targetDir}`);
  console.log(`${color('Source Files:', c.dim)} ${report.totalFiles}`);
  console.log(`${color('Lines of Code (LOC):', c.dim)} ${report.totalLinesOfCode}`);
  console.log(`${color('Abstraction Layers:', c.dim)} ${report.abstractionFiles} file(s)`);
  console.log(`${color('Production Deps:', c.dim)} ${report.depCount} paket`);
  console.log(`${color('Dev Deps:', c.dim)} ${report.devDepCount} paket`);
  console.log(`${color('Over-Engineering Score:', c.bold)} ${color(`${report.score}/100`, report.statusColor)} -> [${color(report.status, report.statusColor)}]\n`);

  if (report.warnings.length === 0) {
    console.log(`${color('✓ Arsitektur kode tergolong ramping, fungsional, dan proporsional.', c.green)}`);
  } else {
    console.log(color('Peringatan Arsitektur:', c.yellow + c.bold));
    for (const w of report.warnings) {
      console.log(`  ${color('⚠', c.yellow)} ${w}`);
    }
  }
  console.log('');
}
