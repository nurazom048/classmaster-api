# 🚀 ClassMaster API Deployment & Development Guide

This guide details the step-by-step instructions for running the local Docker development environment, deploying to cPanel using ZIP packages, and automating updates using Git pull via SSH in production.

---

## 📂 Deployment Scripts Directory Structure
All helper scripts are located in the `deployment/` directory:
- `deployment/cpanel-deploy.sh`: Builds and packages production code into a ZIP file.
- `deployment/docker-dev.sh`: Manages the local Docker development environment and releases ports.
- `deployment/ssh-deploy.sh`: Automates remote server updates via Git pull over SSH.

---

## 🐳 1. Local Docker Development
Use this setup when developing features locally. The Docker environment runs PostgreSQL, MinIO (Object Storage), pgAdmin, and Dufs Filebrowser.

### Step-by-Step Instructions:
1. **Launch Environment:** Run the helper script to stop any conflicting host processes and boot containers:
   ```bash
   ./deployment/docker-dev.sh
   ```
2. **Access local services:**
   - **API Server:** `http://localhost:4000`
   - **MinIO S3 Admin:** `http://localhost:9001` (User: `admin` | Password: `password123`)
   - **pgAdmin UI:** `http://localhost:5050` (Email: `admin@admin.com` | Password: `admin`)
   - **File Browser:** `http://localhost:8081` (User: `admin` | Password: `password123`)
3. **Monitor Container Logs:**
   - View all logs: `docker compose logs -f`
   - View only API logs: `docker compose logs -f api`
4. **Shutdown Environment:**
   ```bash
   docker compose down
   ```

---

## 🧡 2. Production cPanel Deployment (No Docker)
Use this option to package the compiled application and host it on a standard cPanel Node.js selector environment.

### Step-by-Step Instructions:
1. **Generate ZIP Package:** Run the cPanel helper script to build the code and bundle only the production files:
   ```bash
   ./deployment/cpanel-deploy.sh
   ```
   This will generate `cpanel-deploy.zip` in the root folder.
2. **Upload to cPanel:**
   - Open cPanel -> **File Manager**.
   - Navigate to your Node.js application directory (e.g., `public_html/api` or `/home/username/api`).
   - Upload the generated `cpanel-deploy.zip`.
   - Right-click the file and choose **Extract**.
3. **Configure Node.js Application:**
   - Go to cPanel -> **Setup Node.js App**.
   - Create or Edit your application:
     - **Node.js version:** Select `v18.x` or higher.
     - **Application startup file:** Set to `dist/server.js`.
   - In the App config screen, add your environment variables:
     - `NODE_ENV`: `production`
     - `DATABASE_URL`: `prisma+postgres://...` (Your Accelerate connection string)
     - `STORAGE_PROVIDER`: `appwrite`
     - `APPWRITE_ENDPOINT`, `APPWRITE_PROJECT_ID`, `APPWRITE_API_KEY`, `APPWRITE_BUCKET_ID`.
4. **Install Dependencies:**
   - Click **Run NPM Install** inside the cPanel Node.js App interface.
5. **Restart App:**
   - Click **Restart** on the Node.js application card to start the production server.

---

## 💻 3. Automated Git Pull Deployment via SSH
Use this script if your production server (e.g., VPS or SSH-enabled cPanel) is already set up and has Git installed.

### Step-by-Step Instructions:
1. **Configure SSH Script:**
   - Open `deployment/ssh-deploy.sh`.
   - Update the configuration block at the top with your server's credentials and path:
     ```bash
     SSH_HOST="your_username@your_server_ip_or_domain"
     SSH_PORT="22"
     APP_DIR="/home/your_username/api.classmaster"
     GIT_BRANCH="master"
     ```
2. **Deploy Updates:**
   - Ensure you have pushed your latest commits to GitHub.
   - Run the script locally:
     ```bash
     ./deployment/ssh-deploy.sh
     ```
   - The script will securely SSH into your server, perform `git pull`, install new production modules, rebuild the code, and restart the process via PM2 (or touch `tmp/restart.txt` for Passenger).

---

## 🗄️ Database Schema Updates (Prisma)
If you modify your Prisma schema (`prisma/schema/schema.prisma`), push the updates:
- **Local Dev:** `npx prisma db push` (updates local Postgres).
- **Production:** Run from your local terminal pointing directly to your cloud DB URL:
  ```bash
  DATABASE_URL="your-production-prisma-postgres-url" npx prisma db push
  ```
