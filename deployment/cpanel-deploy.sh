#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Configuration
ZIP_FILE="cpanel-deploy.zip"
DIST_DIR="dist"

echo "🚀 Preparing production package for cPanel..."

# Step 1: Ensure TypeScript is built
echo "📦 Building TypeScript source code..."
npm run build

# Step 2: Remove old zip if exists
if [ -f "$ZIP_FILE" ]; then
    echo "🧹 Removing old zip package..."
    rm "$ZIP_FILE"
fi

# Step 3: Create temporary packaging folder
TEMP_DIR="tmp_package"
echo "📂 Creating temporary deployment folder structure..."
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Copy necessary production files and folders
cp -r "$DIST_DIR" "$TEMP_DIR/"
cp -r "prisma" "$TEMP_DIR/"
cp -r "config" "$TEMP_DIR/"
cp "package.json" "$TEMP_DIR/"
cp "package-lock.json" "$TEMP_DIR/"
cp "app.js" "$TEMP_DIR/"

# Copy .env.example as template
if [ -f ".env.example" ]; then
    cp ".env.example" "$TEMP_DIR/"
fi

# Copy active .env file if it exists
if [ -f ".env" ]; then
    cp ".env" "$TEMP_DIR/"
fi


# Step 4: Zip everything inside the temp folder
echo "🗜️ Zipping files into $ZIP_FILE..."
cd "$TEMP_DIR"
zip -r "../$ZIP_FILE" . > /dev/null
cd ..

# Clean up temporary folder
rm -rf "$TEMP_DIR"

echo "--------------------------------------------------------"
echo "✅ Production package created successfully: $ZIP_FILE"
echo "--------------------------------------------------------"
echo "📄 Next Steps for cPanel Upload & Run:"
echo "1. Log in to your cPanel Dashboard."
echo "2. Open 'File Manager' and upload '$ZIP_FILE' to your application folder."
echo "3. Extract '$ZIP_FILE' using cPanel's Extract tool."
echo "4. In cPanel, go to 'Setup Node.js App'."
echo "5. Edit your Node application, click 'Run npm install' to install dependencies."
echo "6. Set your Environment Variables in the Node.js App config interface."
echo "7. Click 'Restart' to apply the changes and launch the app."
echo "--------------------------------------------------------"
