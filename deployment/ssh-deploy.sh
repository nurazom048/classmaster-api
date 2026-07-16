#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# ==============================================================================
# CONFIGURATION (Edit these values before running the script)
# ==============================================================================
SSH_HOST="u0_a374@192.168.10.51"
SSH_PORT="8022"
APP_DIR="classmaster-api"                          # Remote production app directory
GIT_BRANCH="master"                          # Git branch to pull
# ==============================================================================

echo "🌐 Connecting to production server ($SSH_HOST) via SSH..."

# Execute deployment commands on the remote server
ssh -p "$SSH_PORT" "$SSH_HOST" "bash -s" << EOF
  # Stop execution on error
  set -e

  echo "📂 Navigating to application directory: $APP_DIR"
  cd "$APP_DIR"

  echo "⬇️ Fetching and pulling latest changes from GitHub ($GIT_BRANCH)..."
  git fetch --all
  git reset --hard origin/$GIT_BRANCH

  echo "📦 Installing production dependencies..."
  npm install --omit=dev

  echo "🗄️ Generating Prisma Client..."
  npx prisma generate

  echo "🛠️ Compiling TypeScript source code..."
  npm run build

  echo "🔄 Restarting application..."
  # check if PM2 is used
  if command -v pm2 &> /dev/null; then
    pm2 reload classmaster-api || pm2 start dist/server.js --name classmaster-api
    pm2 save
    echo "✅ PM2 process reloaded successfully!"
  else
    echo "⚠️ PM2 was not found. If you are using cPanel Node.js App or Passenger,"
    echo "   please touch/restart the 'tmp/restart.txt' file or restart it via cPanel UI."
    mkdir -p tmp
    touch tmp/restart.txt
  fi

  echo "✨ Server-side deployment finished successfully!"
EOF

echo "--------------------------------------------------------"
echo "✅ Remote deployment via SSH completed!"
echo "--------------------------------------------------------"
