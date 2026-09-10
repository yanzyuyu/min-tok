import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { c, color } from './utils.js';

export function getDefaultSkillsDir() {
  const homeDir = os.homedir();
  const geminiConfig = path.join(homeDir, '.gemini', 'config', 'skills');
  if (fs.existsSync(path.join(homeDir, '.gemini'))) {
    return geminiConfig;
  }
  return path.join(homeDir, '.agents', 'skills');
}

export function installSkills(customTargetDir = null) {
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const sourceSkillsDir = path.resolve(currentDir, '../skills');
  const targetDir = customTargetDir ? path.resolve(customTargetDir) : getDefaultSkillsDir();

  if (!fs.existsSync(sourceSkillsDir)) {
    return {
      success: false,
      message: `Direktori bundle skills tidak ditemukan di: ${sourceSkillsDir}`
    };
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const skillFolders = fs.readdirSync(sourceSkillsDir, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name);

  const installed = [];

  for (const skillName of skillFolders) {
    const srcPath = path.join(sourceSkillsDir, skillName);
    const dstPath = path.join(targetDir, skillName);
    fs.cpSync(srcPath, dstPath, { recursive: true, force: true });
    installed.push(skillName);
  }

  return {
    success: true,
    targetDir,
    totalInstalled: installed.length,
    skills: installed
  };
}

export function printInstallReport(result) {
  if (!result.success) {
    console.log(`\n${color('Gagal Menginstal Skills:', c.red + c.bold)} ${result.message}\n`);
    return;
  }

  console.log(`\n${color('== MIN-TOK SKILLS SYNC ==', c.bold + c.cyan)}`);
  console.log(`${color('Target Direktori:', c.dim)} ${result.targetDir}`);
  console.log(`${color('Total Skills Terpasang:', c.dim)} ${color(result.totalInstalled, c.green + c.bold)} skills\n`);

  for (const s of result.skills) {
    console.log(`  ${color('✓', c.green)} ${color(s, c.bold)}`);
  }

  console.log(`\n${color('Semua skills telah terpasang dan siap digunakan oleh AI Agent secara otonom!', c.green + c.bold)}\n`);
}
