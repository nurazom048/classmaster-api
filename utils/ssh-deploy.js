const { Client } = require('ssh2');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const SSH_CONFIG = {
  host: '192.168.10.51',
  port: 8022,
  username: 'u0_a374',
  password: '1234',
  readyTimeout: 10000
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
MONGODB_URI_MAIN_DB=mongodb+srv://cmtmongo:rahalaNur123@cluster0.5brwnml.mongodb.net/MainBD?retryWrites=true&w=majority
MONGODB_URI_NOTIFICATION_DB=mongodb+srv://cmtmongo:rahalaNur123@cluster0.5brwnml.mongodb.net/NotificationDB?retryWrites=true&w=majority
STORAGE_PROVIDER=appwrite
APPWRITE_ENDPOINT=https://sgp.cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=6a58e5ce002c7f885205
APPWRITE_BUCKET_ID=6a58e61f002e4a409281
APPWRITE_API_KEY=standard_64914df2f6f227e9491337e832f6fcbb61ec54bdcc99b82b589f9555cb422de2ddaf9590d6322fb3e0c5ac362622b66342feb174c1ec2584674129fbcbcf7ee80c0712d17c89982a7e5776bf02c1627e4773d0379ac6ba5cd0ecdb0ef86e3711a558013e0e9527857a837a4442cdc65b0f7ba3715ccc82e5e8f520c398808929
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

          echo "📦 Installing npm dependencies..."
          npm install --omit=dev

          echo "🗄️ Generating Prisma Client..."
          npx prisma generate

          echo "🧹 Checking for running process on port 4000..."
          if command -v fuser &> /dev/null; then
            fuser -k 4000/tcp || true
          fi

          echo "🚀 Launching app in background..."
          # Run using nohup in background, redirecting output to log file
          nohup node dist/server.js > server.log 2>&1 &

          echo "💤 Waiting for server to initialize..."
          sleep 4

          echo "📋 Server logs preview:"
          tail -n 15 server.log || true

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

runLocalBuild()
  .then(deploy)
  .catch(console.error);
