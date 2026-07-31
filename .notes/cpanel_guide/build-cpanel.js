const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Resolve root directory relative to .notes/cpanel_guide/
const rootDir = path.resolve(__dirname, '../..');

console.log('🚀 Starting cPanel Build & Packaging Process...\n');

try {
  // 1. Generate Prisma Client
  console.log('📦 [1/4] Generating Prisma Client...');
  execSync('npx prisma generate', { cwd: rootDir, stdio: 'inherit' });

  // 2. Compile TypeScript
  console.log('\n🔨 [2/4] Compiling TypeScript with tsc...');
  execSync('npx tsc', { cwd: rootDir, stdio: 'inherit' });

  // 3. Copy extra config assets to build folder
  console.log('\n📂 [3/4] Copying config assets & Prisma artifacts...');
  const firebaseTarget = path.join(rootDir, 'build/config/firebase');
  fs.mkdirSync(firebaseTarget, { recursive: true });

  const adminSdkSource = path.join(rootDir, 'config/firebase/admin.sdk.json');
  if (fs.existsSync(adminSdkSource)) {
    fs.copyFileSync(adminSdkSource, path.join(firebaseTarget, 'admin.sdk.json'));
    console.log('   ✅ Copied admin.sdk.json to build/config/firebase/');
  }

  const prismaTarget = path.join(rootDir, 'build/prisma');
  fs.mkdirSync(prismaTarget, { recursive: true });
  const prismaClientSource = path.join(rootDir, 'prisma/client');
  if (fs.existsSync(prismaClientSource)) {
    fs.cpSync(prismaClientSource, path.join(prismaTarget, 'client'), { recursive: true });
    console.log('   ✅ Copied prisma/client to build/prisma/');
    
    const nodeModulesPrismaTarget = path.join(rootDir, 'node_modules/.prisma/client');
    if (fs.existsSync(path.join(rootDir, 'node_modules'))) {
      fs.mkdirSync(path.dirname(nodeModulesPrismaTarget), { recursive: true });
      fs.cpSync(prismaClientSource, nodeModulesPrismaTarget, { recursive: true });
      console.log('   ✅ Copied prisma/client to node_modules/.prisma/client');
    }
  }

  // 4. Create Ultra-Lightweight ZIP Archive for cPanel
  console.log('\n🗜️ [4/4] Creating ultra-lightweight ZIP archives for cPanel File Manager...');
  const zipName = 'cpanel-deploy.zip';
  const zipPath = path.join(rootDir, zipName);
  const secondaryZipPath = path.join(rootDir, 'cPanel.zip');

  // Remove existing zip files if any
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
  if (fs.existsSync(secondaryZipPath)) fs.unlinkSync(secondaryZipPath);

  // Files/directories to include in cPanel zip
  const filesToZip = [
    'build',
    'prisma',
    'prisma.config.ts',
    'config',
    'package.json',
    'package-lock.json',
    'app.js',
  ];

  if (fs.existsSync(path.join(rootDir, '.env'))) {
    filesToZip.push('.env');
  }

  // Exclude node_modules, heavy query engine binaries, sourcemaps, git files to keep zip tiny
  const zipCommand = `zip -9 -rq ${zipName} ${filesToZip.join(' ')} -x "*.git*" "*/.DS_Store" "*.log" "*query_engine*" "*.so.node" "*.map"`;
  execSync(zipCommand, { cwd: rootDir, stdio: 'ignore', maxBuffer: 1024 * 1024 * 50 });

  // Create a copy named cPanel.zip so both names work
  fs.copyFileSync(zipPath, secondaryZipPath);

  const stats = fs.statSync(zipPath);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log('\n==================================================');
  console.log(`🎉 SUCCESS! Ultra-Lightweight cPanel Package Created!`);
  console.log(`📦 Output File: ${zipName} (${fileSizeMB} MB)`);
  console.log(`📦 Output File: cPanel.zip (${fileSizeMB} MB)`);
  console.log(`📍 Location: ${zipPath}`);
  console.log('==================================================\n');
  console.log('💡 Upload cpanel-deploy.zip or cPanel.zip to cPanel, extract it, and click "Run NPM Install" in cPanel Setup Node.js App!');

} catch (error) {
  console.error('\n❌ Build/Packaging Failed:', error.message);
  process.exit(1);
}
