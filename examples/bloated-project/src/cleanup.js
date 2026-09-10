import rimraf from 'rimraf';

export async function clearCache(dirPath) {
  await rimraf(dirPath);
  console.log('Cache cleared successfully');
}
