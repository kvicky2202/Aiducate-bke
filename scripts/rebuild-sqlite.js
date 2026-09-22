import { existsSync, readdirSync } from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function findBetterSqlite3(dir, found = []) {
  if (!existsSync(dir)) return found;

  const pkgJson = path.join(dir, 'package.json');
  if (path.basename(dir) === 'better-sqlite3' && existsSync(pkgJson)) {
    found.push(dir);
  }

  const nested = path.join(dir, 'node_modules');
  if (!existsSync(nested)) return found;

  for (const name of readdirSync(nested)) {
    if (name === '.bin') continue;
    const next = path.join(nested, name);
    if (name.startsWith('@')) {
      if (!existsSync(next)) continue;
      for (const scoped of readdirSync(next)) {
        findBetterSqlite3(path.join(next, scoped), found);
      }
    } else {
      findBetterSqlite3(next, found);
    }
  }
  return found;
}

const packages = findBetterSqlite3(path.join(root, 'node_modules'));
if (packages.length === 0) {
  console.log('No better-sqlite3 packages found to rebuild.');
  process.exit(0);
}

for (const dir of packages) {
  console.log(`Rebuilding better-sqlite3 at ${path.relative(root, dir)}`);
  const result = spawnSync('npm', ['run', 'install', '--if-present'], {
    cwd: dir,
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      npm_config_build_from_source: 'true',
    },
  });
  if (result.status !== 0) {
    const gyp = spawnSync('npx', ['node-gyp', 'rebuild'], {
      cwd: dir,
      stdio: 'inherit',
      shell: true,
      env: process.env,
    });
    if (gyp.status !== 0) {
      console.error(`Failed to rebuild ${dir}`);
      process.exit(gyp.status || result.status || 1);
    }
  }
}

console.log(`Rebuilt ${packages.length} better-sqlite3 install(s).`);
