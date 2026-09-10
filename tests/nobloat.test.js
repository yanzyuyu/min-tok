import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { getBloatInfo, BLOAT_CATALOG } from '../src/database.js';
import { scanProject } from '../src/scanner.js';
import { purgePackage } from '../src/purger.js';
import { auditProject } from '../src/audit.js';
import { createUnifiedDiff } from '../src/diff_guard.js';

test('1. Zero-dependency integrity check', () => {
  const pkgPath = path.resolve('package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  assert.deepEqual(pkg.dependencies, {}, 'Dependencies must remain strictly empty for zero bloat');
});

test('2. Bloat catalog inspection', () => {
  const uuidInfo = getBloatInfo('uuid', 'npm');
  assert.ok(uuidInfo);
  assert.equal(uuidInfo.replacement, 'crypto.randomUUID()');
  assert.equal(uuidInfo.canAutoPurge, true);

  const reqInfo = getBloatInfo('requests', 'pypi');
  assert.ok(reqInfo);
  assert.match(reqInfo.replacement, /urllib\.request/);
});

test('3. Scanner detects bloat packages', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nobloat-test-scan-'));
  try {
    const mockPkg = {
      name: 'test-project',
      dependencies: {
        'uuid': '^9.0.0',
        'axios': '^1.6.0'
      }
    };
    fs.writeFileSync(path.join(tmpDir, 'package.json'), JSON.stringify(mockPkg, null, 2));

    const mockReqs = 'requests==2.31.0\ntabulate>=0.9.0\n';
    fs.writeFileSync(path.join(tmpDir, 'requirements.txt'), mockReqs);

    const report = scanProject(tmpDir);
    assert.equal(report.totalBloatFound, 4);
    const names = report.findings.map(f => f.package);
    assert.ok(names.includes('uuid'));
    assert.ok(names.includes('axios'));
    assert.ok(names.includes('requests'));
    assert.ok(names.includes('tabulate'));
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});

test('4. Purger refactors uuid into native crypto.randomUUID()', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nobloat-test-purge-'));
  try {
    const mockPkg = {
      name: 'test-purge-project',
      dependencies: {
        'uuid': '^9.0.0',
        'express': '^4.18.2'
      }
    };
    fs.writeFileSync(path.join(tmpDir, 'package.json'), JSON.stringify(mockPkg, null, 2));

    const codeContent = `import { v4 as uuidv4 } from 'uuid';\nconst id = uuidv4();\n`;
    fs.writeFileSync(path.join(tmpDir, 'index.js'), codeContent);

    const result = purgePackage('uuid', tmpDir);
    assert.equal(result.success, true);
    assert.equal(result.removedFromPkg, true);
    assert.equal(result.modifiedFiles.length, 1);

    const updatedCode = fs.readFileSync(path.join(tmpDir, 'index.js'), 'utf8');
    assert.ok(!updatedCode.includes("from 'uuid'"));
    assert.ok(updatedCode.includes('crypto.randomUUID()'));

    const updatedPkg = JSON.parse(fs.readFileSync(path.join(tmpDir, 'package.json'), 'utf8'));
    assert.equal(updatedPkg.dependencies.uuid, undefined);
    assert.ok(updatedPkg.dependencies.express);
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});

test('5. Diff guard produces unified diff', () => {
  const original = 'const a = 1;\nconst b = 2;\n';
  const modified = 'const a = 1;\nconst b = 3;\n';
  const diff = createUnifiedDiff(original, modified, 'test.js');

  assert.ok(diff.includes('--- a/test.js'));
  assert.ok(diff.includes('+++ b/test.js'));
  assert.ok(diff.includes('- const b = 2;'));
  assert.ok(diff.includes('+ const b = 3;'));
});

test('6. Architecture audit calculates LOC & abstraction ratio', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nobloat-test-audit-'));
  try {
    fs.writeFileSync(path.join(tmpDir, 'app.js'), 'console.log("hello");\n');
    const report = auditProject(tmpDir);
    assert.equal(report.totalFiles, 1);
    assert.equal(report.score, 0);
    assert.equal(report.status, 'LEAN & PRAGMATIC');
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});
