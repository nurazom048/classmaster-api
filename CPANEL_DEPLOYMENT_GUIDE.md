# 🚀 ClassMaster API: cPanel Deployment Guide

This guide provides a step-by-step walkthrough for deploying and updating the ClassMaster API on a cPanel server running **Phusion Passenger**.

---

## 🛠️ Prerequisites & Architecture
* **Frontend DNS Management**: Cloudflare (Active DNS provider for `classmaster.top`)
* **Backend Web Server**: cPanel Shared Hosting (Whiteservers)
* **Subdomain**: `c.api.classmaster.top`
* **Node.js Entry Point**: `app.js` (uses output redirection to log all startup messages to `passenger_error.log`)

---

## 📦 Part 1: Packaging Your App (Local System)

Whenever you make code modifications or add new npm packages, you must generate a new deployment bundle:

1. Open your terminal in the root directory of your workspace (`classmaster-api-master`).
2. Run the deployment script:
   ```bash
   ./deployment/cpanel-deploy.sh
   ```
3. This script will:
   * Generate the updated Prisma Client.
   * Compile the TypeScript source code into the `dist/` directory.
   * Package all required files (including your active `.env` file) into a clean archive named **`cpanel-deploy.zip`**.

---

## 🌐 Part 2: DNS & Domain Setup (Cloudflare)

If you need to verify or set up the subdomain again:

1. Log in to your **Cloudflare Dashboard**.
2. Go to **DNS** -> **Records** for `classmaster.top`.
3. Add/Edit the record:
   * **Type**: `A`
   * **Name**: `c.api`
   * **IPv4 Address**: `103.191.50.164` (Your cPanel Shared IP)
   * **Proxy status**: **DNS Only (Grey Cloud)**
4. Click **Save**.

> Setting the proxy to **DNS Only** allows cPanel to perform domain validation and issue the SSL certificate smoothly. Once the SSL certificate is successfully installed on cPanel, you can switch the Cloudflare proxy to **Proxied (Orange Cloud)** if you want DDOS protection and caching.

---

## 🖥️ Part 3: Node.js App Setup (cPanel)

If setting up the application manager for the first time:

1. Log in to **cPanel** and search for **Setup Node.js App**.
2. Click **Create Application**.
3. Configure the fields as follows:
   * **Node.js version**: Select `22.x` (or the matching version of your app).
   * **Application mode**: `Production`
   * **Application root**: `api.classmaster`
   * **Application URL**: `c.api.classmaster.top`
   * **Application startup file**: `app.js`
4. Click **Create**.

---

## 📤 Part 4: Uploading & Running the App

Follow these steps for **initial deployment** or **subsequent code updates**:

### Step 1: Upload the zip
1. In cPanel, open **File Manager** and go into the `/home/jetvxwrp/api.classmaster` directory.
2. Click **Upload** and select the locally generated **`cpanel-deploy.zip`** file.

### Step 2: Extract files
1. Select `cpanel-deploy.zip` inside the File Manager.
2. Click the **Extract** button in the top toolbar and extract it directly into `/home/jetvxwrp/api.classmaster`.
3. *(Optional)* Delete `cpanel-deploy.zip` after extraction to save disk space.

### Step 3: Install Dependencies
1. Go to cPanel -> **Setup Node.js App**.
2. Click the **Edit** (pencil) icon next to your application.
3. Click the **Run npm install** button. Wait for the success notification.

### Step 4: Ensure SSL is Active (One-Time Setup)
1. Go to cPanel -> **SSL/TLS Status**.
2. Check the box next to `c.api.classmaster.top`.
3. Click **Run AutoSSL** and wait for the green lock icon to appear.

### Step 5: Restart the Server
1. Return to cPanel -> **Setup Node.js App**.
2. Click the **Restart** button.

Your API will now be live and accessible at **`https://c.api.classmaster.top/`**!

---

## 🔍 Part 5: Troubleshooting & Logging

If the application fails to start or you see a `503 Service Unavailable` page:

1. Open **cPanel File Manager**.
2. Go to the root directory `/home/jetvxwrp/api.classmaster`.
3. Find and open the file named **`passenger_error.log`**.
4. This file contains the complete real-time startup logs, console outputs, and uncaught crash traces.
5. Common issues to check in the log:
   * **Prisma errors**: Ensure the `.env` file was correctly extracted and contains a valid database connection string.
   * **Missing packages**: Ensure `npm install` completed successfully.
