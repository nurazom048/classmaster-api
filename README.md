
# 📚 Classmaster API

> A scalable, production-ready backend system for the **Classmaster EdTech platform** built with  
**Node.js, Prisma, PostgreSQL, MinIO, Docker, and Cloudflare Tunnel**.

## ✨ Features

- 🔐 Secure Authentication & REST API (Node.js)
- 🗄️ PostgreSQL database with Prisma ORM
- 📦 S3-compatible file storage using MinIO
- 🐳 Fully containerized with Docker Compose
- 🌐 Public exposure via Cloudflare Tunnel
- 🧾 pgAdmin for database management
- ⚡ Scalable modular backend architecture

---

## 🏗️ Tech Stack

| Layer        | Technology |
|--------------|------------|
| Backend      | Node.js (Express / TypeScript) |
| Database     | PostgreSQL 18 |
| ORM          | Prisma |
| Storage      | MinIO (S3 Compatible) |
| DevOps       | Docker, Docker Compose |
| Tunnel       | Cloudflare Tunnel |
| Admin Panel  | pgAdmin |

---

## 📁 Project Structure

classmaster-api/
│
├── prisma/                # Database schema & migrations
├── src/                   # Application source code
├── docker-compose.yml     # Multi-service orchestration
├── Dockerfile             # API container build
├── .env.example          # Environment variables template
├── .cloudflared/         # Cloudflare tunnel configuration
└── README.md



## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/classmaster-api.git
cd classmaster-api
````

---

### 2. Configure Environment Variables

Create a `.env` file in root directory:

```env
DATABASE_URL=
MINIO_ENDPOINT=http://minio:9000
MINIO_ACCESS_KEY=
MINIO_SECRET_KEY=
MINIO_BUCKET_NAME=classmaster
```


---

### 3. Run with Docker

```bash
docker compose up --build
```

---

## 🌐 Service Endpoints

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



## 🧪 Database Commands

Run migrations:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

## 🐳 Docker Services

* **api** → Node.js backend
* **db** → PostgreSQL database
* **pgadmin** → Database UI
* **minio** → Object storage (S3)
* **cloudflared** → Cloudflare tunnel gateway

---

## 📌 Important Notes

* Always use **Docker service names**, not `localhost`

  * Example: `http://api:4000` ✔️
  * Not: `http://localhost:4000` ❌

* Keep `.env` file secret

* Use `.env.example` for sharing structure only

