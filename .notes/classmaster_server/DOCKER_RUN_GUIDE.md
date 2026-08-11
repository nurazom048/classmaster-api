# 🐳 How to Run & Manage ClassMaster Docker Stack on Server

This note provides a quick guide to running, restarting, testing, and managing the ClassMaster Docker Environment on your production server.

---

## 📂 Project Location

Always ensure you are operating inside the primary project directory:
```bash
cd /DATA/AppData/classmaster-api
```

---

## 🚀 Running the Stack on Production Server

### 1. Start All Services (Detached Mode)
```bash
cd /DATA/AppData/classmaster-api
docker compose up -d
```

### 2. Check Running Containers & Health Status
```bash
docker compose ps
```
*Expected Services Running:*
- `api` (Port 4000)
- `cloudflare_tunnel`
- `postgres-db` (Port 5432, healthy)
- `pgadmin-ui` (Port 5050)
- `dufs` (Port 8081)

---

## 🔄 Restarting & Refreshing Services

### Restart Only API Server
```bash
docker compose restart api
```

### Restart Cloudflare Tunnel
```bash
docker compose restart tunnel
```

### Restart All Services
```bash
docker compose restart
```

---

## 🧹 Clean Build & Re-Deploy (Fresh Restart)

If you made changes to the code or dependencies and want a completely fresh build:

```bash
cd /DATA/AppData/classmaster-api

# 1. Stop all containers
docker compose down

# 2. Rebuild images without cache and start services
docker compose build --no-cache
docker compose up -d
```

---

## 📡 Live Domain & Endpoint Testing

### 1. Test Live Production API (Should return HTTP 200 OK)
```bash
curl -i https://api.classmaster.top/
```

### 2. Test Local Container API Response
```bash
curl -i http://localhost:4000/
```

### 3. Check Live pgAdmin UI (Should return HTTP 302 Redirect)
```bash
curl -i https://pg.classmaster.top/
```

### 4. Check Live DUFS Storage (Should return HTTP 401 Auth)
```bash
curl -i https://files.classmaster.top/
```

---

## 📜 Monitoring Container Logs

### View API Logs (Real-time stream)
```bash
docker compose logs -f api
```

### View Cloudflare Tunnel Logs
```bash
docker compose logs -f tunnel
```

### View Last 50 Lines of All Container Logs
```bash
docker compose logs --tail 50
```

---

## 🌐 Subdomain & Tunnel Ingress Architecture

All domain routes are managed via `.cloudflared/config.yml`:

| Service | Local Target | Live Subdomain | Purpose |
| :--- | :--- | :--- | :--- |
| **API** | `http://api:4000` | `https://api.classmaster.top/` | Live Production Backend API |
| **pgAdmin** | `http://pgadmin:80` | `https://pg.classmaster.top/` | Live Database UI |
| **DUFS** | `http://dufs:5000` | `https://files.classmaster.top/` | Live File Storage |
| **Dev API** | `http://host.docker.internal:4000` | `https://dev.api.classmaster.top/` | Local Laptop Dev Testing |
