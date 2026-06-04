const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const releaseName = `${pkg.name}-v${pkg.version}`;
const distDir = path.join(rootDir, 'dist');
const stageDir = path.join(distDir, releaseName);
const zipPath = path.join(distDir, `${releaseName}.zip`);

const files = [
  '.gitignore',
  'README.md',
  'LICENSE',
  'CHANGELOG.md',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'localize.js',
  'hack_preload.js',
  'package.json',
  'package-lock.json'
];

const dirs = [
  '.github',
  'scripts'
];

function copyFile(relativePath) {
  const source = path.join(rootDir, relativePath);
  const target = path.join(stageDir, relativePath);
  if (!fs.existsSync(source)) {
    return;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyDir(relativePath) {
  const source = path.join(rootDir, relativePath);
  const target = path.join(stageDir, relativePath);
  if (!fs.existsSync(source)) {
    return;
  }
  fs.cpSync(source, target, {
    recursive: true,
    filter: (item) => !item.includes(`${path.sep}.git${path.sep}`) && !item.includes(`${path.sep}node_modules${path.sep}`)
  });
}

function run(command, args, options = {}) {
  execFileSync(command, args, {
    cwd: options.cwd || rootDir,
    stdio: options.stdio || 'inherit'
  });
}

fs.rmSync(stageDir, { recursive: true, force: true });
fs.rmSync(zipPath, { force: true });
fs.mkdirSync(stageDir, { recursive: true });

for (const file of files) {
  copyFile(file);
}
for (const dir of dirs) {
  copyDir(dir);
}

try {
  run('zip', ['-qry', zipPath, releaseName], { cwd: distDir });
} catch (error) {
  console.error('Failed to create zip archive. Please install zip and retry.');
  throw error;
}

console.log(`Created ${path.relative(rootDir, zipPath)}`);
