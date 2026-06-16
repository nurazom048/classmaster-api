নিচে তোমার **Classmaster API project-এর জন্য professional README.md** বানিয়ে দিলাম। এটা GitHub-এ সরাসরি paste করতে পারবে 👇

---

```md
# 📚 Classmaster API

A full-featured backend system for Classmaster EdTech platform built with **Node.js, Prisma, PostgreSQL, MinIO, Docker, and Cloudflare Tunnel**.

---

## 🚀 Features

- 🔐 Authentication & API backend (Node.js)
- 🗄️ PostgreSQL database with Prisma ORM
- 📦 File storage using MinIO (S3 compatible)
- 🐳 Fully containerized with Docker Compose
- 🌐 Public access via Cloudflare Tunnel
- 🧾 pgAdmin database management UI
- ⚡ Real-time scalable backend architecture

---

## 🏗️ Tech Stack

- Node.js (Express / TypeScript)
- PostgreSQL 18
- Prisma ORM
- Docker & Docker Compose
- MinIO (Object Storage)
- Cloudflare Tunnel
- pgAdmin

---

## 📁 Project Structure

```

classmaster-api/
│
├── prisma/                # Database schema & migrations
├── src/                   # Main backend source code
├── docker-compose.yml     # Multi-container setup
├── Dockerfile             # API container build
├── .env                   # Environment variables
├── .cloudflared/         # Cloudflare tunnel config
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone repository

```bash
git clone https://github.com/your-username/classmaster-api.git
cd classmaster-api
````

---

### 2. Setup environment variables

Create `.env` file:

```env
DATABASE_URL=postgresql://postgres:1234@db:5432/classmaster
MINIO_ENDPOINT=http://minio:9000
MINIO_ACCESS_KEY=admin
MINIO_SECRET_KEY=password123
MINIO_BUCKET_NAME=classmaster
```

---

### 3. Run with Docker

```bash
docker compose up --build
```

---

## 🌐 Services

After running successfully:

| Service   | URL                                            |
| --------- | ---------------------------------------------- |
| API       | [http://localhost:4000](http://localhost:4000) |
| pgAdmin   | [http://localhost:5050](http://localhost:5050) |
| MinIO UI  | [http://localhost:9001](http://localhost:9001) |
| MinIO API | [http://localhost:9000](http://localhost:9000) |

---

## ☁️ Cloudflare Tunnel (Production)

Public domains:

```
api.classmaster.top
pg.classmaster.top
minio.classmaster.top
s3.classmaster.top
```

Configured via `cloudflared`:

```yaml
ingress:
  - hostname: api.classmaster.top
    service: http://api:4000

  - hostname: pg.classmaster.top
    service: http://pgadmin:80

  - hostname: minio.classmaster.top
    service: http://minio:9001

  - hostname: s3.classmaster.top
    service: http://minio:9000
```

---

## 🧪 Database

Run Prisma migration:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

## 🐳 Docker Services

* `api` → Node.js backend
* `db` → PostgreSQL
* `pgadmin` → Database UI
* `minio` → Object storage
* `cloudflare_tunnel` → Public access

---

## 📌 Notes

* Always use **Docker service names**, not `localhost`
* Example: `http://api:4000` not `http://localhost:4000`
* Cloudflare Tunnel handles all public routing

---

## 👨‍💻 Author

Developed by **Classmaster Dev Team**

---

## 📜 License

MIT License

```

---

# 👍 চাইলে আমি next step এ এগুলোও করে দিতে পারি:
- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- :contentReference[oaicite:2]{index=2}
- :contentReference[oaicite:3]{index=3}

বললেই দিচ্ছি 🚀
```
