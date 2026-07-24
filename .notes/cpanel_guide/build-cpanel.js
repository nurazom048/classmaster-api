const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Resolve root directory relative to .note/cpanel_guide/
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
  }

  // 4. Create ZIP Archive for cPanel
  console.log('\n🗜️ [4/4] Creating ZIP archives for cPanel File Manager...');
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
    'config',
    'node_modules',
    'package.json',
    'package-lock.json',
    'app.js',
  ];

  if (fs.existsSync(path.join(rootDir, '.env'))) {
    filesToZip.push('.env');
  }

  const zipCommand = `zip -rq ${zipName} ${filesToZip.join(' ')} -x "*.git*" "*/.DS_Store" "*.log"`;
  execSync(zipCommand, { cwd: rootDir, stdio: 'ignore', maxBuffer: 1024 * 1024 * 50 });

  // Create a copy named cPanel.zip so both names work
  fs.copyFileSync(zipPath, secondaryZipPath);

  const stats = fs.statSync(zipPath);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log('\n==================================================');
  console.log(`🎉 SUCCESS! cPanel Deployment Package Created!`);
  console.log(`📦 Output File: ${zipName} (${fileSizeMB} MB)`);
  console.log(`📦 Output File: cPanel.zip (${fileSizeMB} MB)`);
  console.log(`📍 Location: ${zipPath}`);
  console.log('==================================================\n');
  console.log('💡 You can now upload cpanel-deploy.zip or cPanel.zip directly into cPanel File Manager and extract it!');

} catch (error) {
  console.error('\n❌ Build/Packaging Failed:', error.message);
  process.exit(1);
}
