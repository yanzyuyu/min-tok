#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { scanProject, printScanReport } from '../src/scanner.js';
import { auditProject, printAuditReport } from '../src/audit.js';
import { purgePackage, printPurgeReport } from '../src/purger.js';
import { createUnifiedDiff, printFormattedDiff } from '../src/diff_guard.js';
import { c, color } from '../src/utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const demoDir = path.join(__dirname, 'bloated-project');

console.log(color('\n======================================================', c.bold + c.cyan));
console.log(color('   TEST SUITE: MIN-TOK & ANTI-OVERENGINEERING DEMO    ', c.bold + c.cyan));
console.log(color('======================================================\n', c.bold + c.cyan));

// TAHAP 1: SCANNING
console.log(color('▶ LANGKAH 1: Memindai Bloat Dependencies di Proyek Demo...', c.bold + c.yellow));
const scanBefore = scanProject(demoDir);
printScanReport(scanBefore);

// TAHAP 2: ARCHITECTURE AUDIT
console.log(color('▶ LANGKAH 2: Mengaudit Tingkat Over-Engineering & Abstraksi...', c.bold + c.yellow));
const auditBefore = auditProject(demoDir);
printAuditReport(auditBefore);

// TAHAP 3: AUTO-PURGE (uuid)
console.log(color('▶ LANGKAH 3: Melakukan Auto-Purge pada library "uuid"...', c.bold + c.yellow));
const orderFileBefore = fs.readFileSync(path.join(demoDir, 'src/order.js'), 'utf8');
const purgeUuidResult = purgePackage('uuid', demoDir);
printPurgeReport(purgeUuidResult);

// TAHAP 4: AUTO-PURGE (rimraf)
console.log(color('▶ LANGKAH 4: Melakukan Auto-Purge pada library "rimraf"...', c.bold + c.yellow));
const cleanupFileBefore = fs.readFileSync(path.join(demoDir, 'src/cleanup.js'), 'utf8');
const purgeRimrafResult = purgePackage('rimraf', demoDir);
printPurgeReport(purgeRimrafResult);

// TAHAP 5: UNIFIED DIFF GUARD (Token Saving)
console.log(color('▶ LANGKAH 5: Memverifikasi Diff-Only Token Guard pada file yang diubah...', c.bold + c.yellow));
const orderFileAfter = fs.readFileSync(path.join(demoDir, 'src/order.js'), 'utf8');
const orderDiff = createUnifiedDiff(orderFileBefore, orderFileAfter, 'src/order.js');
printFormattedDiff(orderDiff);

// TAHAP 6: SCAN ULANG (Verifikasi Bersih)
console.log(color('\n▶ LANGKAH 6: Memindai Ulang untuk Memverifikasi Sisa Bloat...', c.bold + c.yellow));
const scanAfter = scanProject(demoDir);
printScanReport(scanAfter);

console.log(color('✔ SELURUH ALUR PENGUJIAN SELESAI DENGAN SUKSES!\n', c.bold + c.green));
