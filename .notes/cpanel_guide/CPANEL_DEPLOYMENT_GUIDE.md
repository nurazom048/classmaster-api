# 🚀 ClassMaster API: cPanel Deployment & Configuration Guide

This guide provides a step-by-step walkthrough for deploying, configuring, and updating the **ClassMaster API** on a cPanel server running **Phusion Passenger** with **Cloudflare R2 Storage**.

---

## 🛠️ System Prerequisites & Architecture

* **Frontend DNS Management**: Cloudflare (Active DNS provider for `classmaster.top`)
* **Backend Web Server**: cPanel Shared Hosting (Whiteservers)
* **Subdomain**: `c.api.classmaster.top`
* **Node.js Startup File**: `app.js` (redirects startup logs and uncaught errors to `passenger_error.log`)
* **Storage Provider**: Cloudflare R2 (`strogeforclassmaster`)
* **Database**: PostgreSQL (Prisma Postgres / Prisma Accelerate)

---

## 📦 Part 1: Packaging Your App for cPanel

Whenever you make code modifications or add new dependencies:

1. Run the build & packaging script:
   ```bash
   ./build/cpanel_guide/cpanel-deploy.sh
   ```
2. The script compiles TypeScript, copies `dist/`, `prisma/`, `config/`, `package.json`, `app.js`, and `.env`, and outputs **`cpanel-deploy.zip`**.

---

## 🌐 Part 2: Cloudflare DNS Setup

1. Log in to your **Cloudflare Dashboard**.
2. Go to **DNS** -> **Records** for `classmaster.top`.
3. Add or verify the record:
   * **Type**: `A`
   * **Name**: `c.api`
   * **IPv4 Address**: `103.191.50.164` (Your cPanel Server IP)
   * **Proxy Status**: **DNS Only (Grey Cloud)** for SSL validation, then **Proxied (Orange Cloud)**.

---

## 🖥️ Part 3: Node.js App Setup (cPanel)

1. Log in to **cPanel** -> **Setup Node.js App**.
2. Click **Create Application**.
3. Fill in the fields:
   * **Node.js Version**: `20.x` or `22.x`
   * **Application Mode**: `Production`
   * **Application Root**: `api.classmaster`
   * **Application URL**: `c.api.classmaster.top`
   * **Application Startup File**: `app.js`
4. Click **Create**.

---

## 🔐 Part 4: Environment Variables (`.env` Configuration)

Ensure your `.env` on cPanel contains the following active variables:

```env
NODE_ENV=production
STORAGE_PROVIDER=r2
BUCKET_NAME=strogeforclassmaster

# --- 🚀 PRIMARY CLOUDFLARE R2 ---
R2_ENDPOINT=https://7ccafdf796f3bb50bfbda909ff90ea03.r2.cloudflarestorage.com
R2_ACCESS_KEY_ID=3256b1834470716aca72e39343a4995c
R2_SECRET_ACCESS_KEY=f9716d4278020372d4728ef4c3d46ca3ef778d31019bb6ad345e4a87a2b6f373

# --- 🗄️ DATABASE ---
PROD_DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=...
```

---

## 📤 Part 5: Deployment Steps on cPanel

1. **Upload**: In cPanel File Manager, upload `cpanel-deploy.zip` to `/home/user/api.classmaster`.
2. **Extract**: Right-click `cpanel-deploy.zip` and click **Extract**.
3. **Dependencies**: Go to **Setup Node.js App** -> Edit application -> Click **Run npm install**.
4. **Prisma Generate**: Run `npx prisma generate` in cPanel terminal if needed.
5. **Restart**: Click the **Restart** button in cPanel Node.js App manager.

---

## 🔍 Part 6: Logs & Troubleshooting

If you see a `503 Service Unavailable` error:
1. Open cPanel File Manager -> `/home/user/api.classmaster/passenger_error.log`.
2. Check for database or missing module errors.
