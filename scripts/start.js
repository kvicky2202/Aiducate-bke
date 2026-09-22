import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const appRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function run(command) {
  const result = spawnSync(command, {
    cwd: appRoot,
    stdio: 'inherit',
    shell: true,
    env: process.env,
  });
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

run('node scripts/ensure-prisma-client.js');
run('npx prisma db push');

const { default: prisma } = await import('../config/db.js');
const userCount = await prisma.user.count();
if (userCount === 0) {
  console.log('Empty database — seeding demo users and classes...');
  run('node prisma/seed.js');
} else {
  console.log(`Database already has ${userCount} user(s); skipping seed.`);
}
await prisma.$disconnect();

await import('../index.js');
