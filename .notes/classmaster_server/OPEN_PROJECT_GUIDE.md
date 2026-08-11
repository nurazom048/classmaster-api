# ClassMaster API - Server & Project Guide

## 📍 Primary Project Directory

The official and **ONLY** active project directory for ClassMaster API on this server is:

```bash
/DATA/AppData/classmaster-api
```

---

## 🚀 Step-by-Step Guide: Navigating & Opening the Project

### Step 1: Move to the Project Directory in Terminal
Open your terminal and run:

```bash
cd /DATA/AppData/classmaster-api
```

### Step 2: Verify Your Working Directory
To confirm you are in the correct location, run:

```bash
pwd
```
**Expected Output:**
`/DATA/AppData/classmaster-api`

---

## 🛠 Opening the Project in Antigravity / IDEs

When opening the project in **Antigravity**, **VS Code**, or **Cursor**:
1. Go to **File** ➡️ **Open Folder...** (or **Open Workspace**).
2. Select `/DATA/AppData/classmaster-api`.
3. Click **Open**.

---

## 🐳 Managing Docker Stack & Clearing Cache

### 1. Check Container Status
```bash
cd /DATA/AppData/classmaster-api
docker compose ps
```

### 2. Stop Containers
```bash
docker compose down
```

### 3. Clear Docker Build Cache (Clean Reset)
```bash
docker builder prune -af
```

### 4. Rebuild Container Image Without Cache
```bash
docker compose build --no-cache
```

### 5. Start All Services in Background
```bash
docker compose up -d
```

---

## 📌 Summary Checklist

| Action | Command |
| :--- | :--- |
| **Navigate to project** | `cd /DATA/AppData/classmaster-api` |
| **Check Current Path** | `pwd` |
| **Check Docker Containers** | `docker compose ps` |
| **Stop Docker Services** | `docker compose down` |
| **Clear Docker Cache** | `docker builder prune -af` |
| **Rebuild & Start Services** | `docker compose build --no-cache && docker compose up -d` |
