const { Client } = require('ssh2');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const SSH_CONFIG = {
  host: '192.168.10.51',
  port: 8022,
  username: 'u0_a374',
  password: '1234',
  readyTimeout: 60000
};

const REMOTE_DIR = '/data/data/com.termux/files/home/classmaster-api';
const LOCAL_ZIP_PATH = path.join(__dirname, '../cpanel-deploy.zip');
const REMOTE_ZIP_PATH = '/data/data/com.termux/files/home/cpanel-deploy.zip';

// Production .env content
const ENV_CONTENT = `NODE_ENV=production
JWT_SECRET_KEY=6490a74a9844d42a12859a39
REFRESH_TOKEN_SECRET=6490a74a9844d42a12859a39
DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19TcE81aHMzV2U0VlRNUGxOQ0J2TXQiLCJhcGlfa2V5IjoiMDFLWE5QMlFSVzlCNUFUMEtLN0ZZWDdDREQiLCJ0ZW5hbnRfaWQiOiI4MTExYmZjNjkxMGRmYjgyNjgzYmRkYjFiZDAzYTZjMGRkN2I3ZGFkMmEyMjVhOWIyMjAzMDVlZWQyZDQxM2Q0IiwiaW50ZXJuYWxfc2VjcmV0IjoiZTU5MmUzNWEtMWVkNS00ZDUxLWIzZTUtMWIwNTI5ZmVhZDRmIn0.mq6phkBCxbv5OIXc5c_fjV8vQ4A4DYNsJzo7EHEkvKY
PROD_DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19TcE81aHMzV2U0VlRNUGxOQ0J2TXQiLCJhcGlfa2V5IjoiMDFLWE5QMlFSVzlCNUFUMEtLN0ZZWDdDREQiLCJ0ZW5hbnRfaWQiOiI4MTExYmZjNjkxMGRmYjgyNjgzYmRkYjFiZDAzYTZjMGRkN2I3ZGFkMmEyMjVhOWIyMjAzMDVlZWQyZDQxM2Q0IiwiaW50ZXJuYWxfc2VjcmV0IjoiZTU5MmUzNWEtMWVkNS00ZDUxLWIzZTUtMWIwNTI5ZmVhZDRmIn0.mq6phkBCxbv5OIXc5c_fjV8vQ4A4DYNsJzo7EHEkvKY
DEV_DATABASE_URL=postgresql://postgres:1234@db:5432/classmaster?schema=public
STORAGE_PROVIDER=r2
BUCKET_NAME=strogeforclassmaster
R2_ENDPOINT=https://94310dcf752d881c272a1bbf9798c975.r2.cloudflarestorage.com
R2_ACCESS_KEY_ID=2bdf581fc25fdca471384da89b6328b3
R2_SECRET_ACCESS_KEY=2c83ae8473fcff37f01c6ba7003932bce877a6280763bf00530d1d274b55fd99
TELEGRAM_BOT_TOKEN=8704406319:AAG843nUJPPte60n4vDQ1vWrlFUuPeFiezU
TELEGRAM_CHAT_ID=1902832271
`;

function runLocalBuild() {
  return new Promise((resolve, reject) => {
    console.log('📦 Step 1: Running local cPanel build/packaging...');
    exec('./deployment/cpanel-deploy.sh', (err, stdout, stderr) => {
      if (err) {
        console.error('❌ Local build failed:', stderr);
        return reject(err);
      }
      console.log(stdout);
      resolve();
    });
  });
}

function deploy() {
  const conn = new Client();

  conn.on('ready', () => {
    console.log('🔒 Step 2: Connected to remote SSH server.');

    // Upload ZIP via SFTP
    console.log('📤 Step 3: Uploading ZIP archive via SFTP...');
    conn.sftp((err, sftp) => {
      if (err) throw err;

      sftp.fastPut(LOCAL_ZIP_PATH, REMOTE_ZIP_PATH, {}, (err) => {
        if (err) throw err;
        console.log('✅ ZIP archive uploaded successfully!');

        // Run remote commands
        console.log('⚙️ Step 4: Extracting and deploying on remote server...');
        const remoteCmd = `
          set -e
          echo "🧹 Cleaning and creating application folder..."
          mkdir -p ${REMOTE_DIR}
          
          echo "🗜️ Extracting files..."
          unzip -o ${REMOTE_ZIP_PATH} -d ${REMOTE_DIR} > /dev/null
          rm -f ${REMOTE_ZIP_PATH}

          echo "📝 Writing production .env..."
          cat << 'EOF' > ${REMOTE_DIR}/.env
${ENV_CONTENT}
EOF

          cd ${REMOTE_DIR}

          # echo "📦 Installing npm dependencies..."
          # npm install --omit=dev

          echo "🗄️ Generating Prisma Client..."
          npx prisma generate

          echo "🚀 Restarting app using PM2..."
          pm2 reload classmaster-api || pm2 start dist/server.js --name classmaster-api
          pm2 save

          echo "💤 Waiting for server to initialize..."
          sleep 3

          echo "📋 Server logs preview:"
          pm2 logs classmaster-api --lines 20 --no-daemon &
          LOGS_PID=\$!
          sleep 3
          kill \$LOGS_PID 2>/dev/null || true

          echo "📡 Checking port 4000 status..."
          netstat -lptn 2>/dev/null | grep 4000 || ss -lptn 2>/dev/null | grep 4000 || true
        `;

        conn.exec(remoteCmd, (err, stream) => {
          if (err) throw err;

          stream.on('close', (code, signal) => {
            console.log(`🏁 Stream closed. Exit code: ${code}`);
            conn.end();
            if (code === 0) {
              console.log('🎉 Remote deployment completed successfully!');
            } else {
              console.error('❌ Remote deployment failed.');
            }
          }).on('data', (data) => {
            process.stdout.write(data);
          }).stderr.on('data', (data) => {
            process.stderr.write(data);
          });
        });
      });
    });
  }).connect(SSH_CONFIG);
}

// runLocalBuild()
//   .then(deploy)
//   .catch(console.error);
deploy();
