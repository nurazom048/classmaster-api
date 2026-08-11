# 💻 Local Development & Docker Testing Guide for ClassMaster API

This guide provides step-by-step instructions on how to run and test the **ClassMaster API** locally on your laptop using Docker. It explains how to test the development endpoint (`dev-api.classmaster.top`) without impacting or conflicting with the live production endpoint (`api.classmaster.top`).

---

## 🏗️ Architecture & Isolation Overview

To prevent conflicts between your local development work and the live production environment, the network and Cloudflare tunnel routing are structured as follows:

| Environment | Endpoint Domain | Origin Routing Target | DB Connection / Scope | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Production** | `https://api.classmaster.top` | Production Server Port 4000 | Production Postgres / Cloud DB | Live Users & Server |
| **Local Development** | `https://dev-api.classmaster.top` | `host.docker.internal:4000` | Local DB (`postgres-db:5432`) / Local `.env` | Local Laptop Dev & Testing |
| **Local Direct** | `http://localhost:4000` | Local Laptop Port `4000` | Local Docker Stack | Local API Testing |

> [!IMPORTANT]
> - Cloudflare Universal Free SSL supports single-level subdomains (`*.classmaster.top`). Therefore, use **`dev-api.classmaster.top`** (hyphenated) instead of double-level subdomains (`dev.api`).
> - Because `dev-api.classmaster.top` resolves to `host.docker.internal:4000`, running your API container locally on port `4000` powers `https://dev-api.classmaster.top` without touching production data or services!

---

## 🚀 Step-by-Step Guide to Run Locally on Laptop

### Step 1: Open Terminal & Navigate to Project
```bash
cd /home/top/api.classmaster/classmaster-api-master
```

### Step 2: Verify Local Environment File (`.env`)
Ensure your `.env` file contains your local database and development settings:
```env
PORT=4000
NODE_ENV=development
DATABASE_URL="postgresql://postgres:1234@db:5432/classmaster?sslmode=disable"
```

### Step 3: Start the Local Docker Stack
Run `docker compose` to start the PostgreSQL database, pgAdmin, DUFS storage, and the API service:

```bash
# Start all local development services in detached mode
docker compose up -d
```

If you only want to start the local database and API container:
```bash
docker compose up -d db api
```

### Step 4: Check Running Containers & Health
Verify that containers are active and healthy:
```bash
docker compose ps
```
*Expected Output:*
- `postgres-db` (Port 5432, status: healthy)
- `api` (Port 4000)
- `pgadmin-ui` (Port 5050)
- `dufs` (Port 8081)

---

## 🧪 Testing the Endpoints

### 1. Test Local Direct Endpoint (`localhost:4000`)
```bash
curl -i http://localhost:4000/
```
*Expected Response:* `HTTP/1.1 200 OK` with welcome message.

### 2. Test Local Development Subdomain (`dev-api.classmaster.top`)
```bash
curl -i https://dev-api.classmaster.top/
```
*Expected Response:* Requests route to your laptop's local Docker instance on port 4000.

### 3. Verify Production API Independence (`api.classmaster.top`)
```bash
curl -i https://api.classmaster.top/
```
*Expected Response:* Connects independently to the production server without any conflict with your local laptop work.

---

## 🔄 Useful Commands for Local Development

### View Real-Time Local API Logs
```bash
docker compose logs -f api
```

### Apply Prisma Database Migrations locally
```bash
docker compose exec api npx prisma db push --schema=prisma/schema
```

### Restart Only the Local API Container
```bash
docker compose restart api
```

### Clean Rebuild of Local Container
```bash
docker compose down
docker compose build --no-cache api
docker compose up -d api
```

---

## 📝 Notes & Best Practices

1. **No Production Conflicts**: Local environment runs with isolated database credentials and binds locally to port `4000`.
2. **Hot Reloading**: The local compose setup mounts `./:/app`, allowing code updates to trigger automatic restarts via `npm run dev`.
3. **Database Security**: Local tests use local PostgreSQL (`postgres:1234`), keeping production production-grade data isolated.
