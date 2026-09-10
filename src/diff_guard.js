import { c, color } from './utils.js';

export function createUnifiedDiff(oldText, newText, filename = 'target-file') {
  const oldLines = oldText.split('\n');
  const newLines = newText.split('\n');

  const diffLines = [];
  diffLines.push(`--- a/${filename}`);
  diffLines.push(`+++ b/${filename}`);

  let i = 0;
  let j = 0;

  while (i < oldLines.length || j < newLines.length) {
    if (i < oldLines.length && j < newLines.length) {
      if (oldLines[i] === newLines[j]) {
        i++;
        j++;
      } else {
        diffLines.push(`- ${oldLines[i]}`);
        diffLines.push(`+ ${newLines[j]}`);
        i++;
        j++;
      }
    } else if (i < oldLines.length) {
      diffLines.push(`- ${oldLines[i]}`);
      i++;
    } else if (j < newLines.length) {
      diffLines.push(`+ ${newLines[j]}`);
      j++;
    }
  }

  return diffLines.join('\n');
}

export function printFormattedDiff(diffString) {
  const lines = diffString.split('\n');
  for (const line of lines) {
    if (line.startsWith('+') && !line.startsWith('+++')) {
      console.log(color(line, c.green));
    } else if (line.startsWith('-') && !line.startsWith('---')) {
      console.log(color(line, c.red));
    } else if (line.startsWith('---') || line.startsWith('+++')) {
      console.log(color(line, c.bold));
    } else {
      console.log(color(line, c.dim));
    }
  }
}
