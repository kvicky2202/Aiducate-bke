import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const generated = path.join(root, 'generated', 'prisma');

function run(command) {
  const result = spawnSync(command, {
    cwd: root,
    stdio: 'inherit',
    shell: true,
    env: process.env,
  });
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function copyClient(from) {
  const destinations = [
    path.join(root, 'node_modules', '.prisma', 'client'),
    path.join(root, 'node_modules', '@prisma', 'client', '.prisma', 'client'),
  ];

  for (const dest of destinations) {
    mkdirSync(path.dirname(dest), { recursive: true });
    rmSync(dest, { recursive: true, force: true });
    cpSync(from, dest, { recursive: true });
    console.log(`Prisma client copied to ${path.relative(root, dest)}`);
  }
}

if (!existsSync(path.join(generated, 'index.js'))) {
  console.log('generated/prisma missing — running prisma generate...');
  run('npx prisma generate');
}

if (!existsSync(path.join(generated, 'index.js'))) {
  console.error('Prisma client was not generated. `prisma generate` must succeed.');
  process.exit(1);
}

copyClient(generated);
