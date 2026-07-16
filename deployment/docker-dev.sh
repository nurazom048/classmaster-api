#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🐳 Starting ClassMaster API Docker Development Environment..."

# Step 1: Check if port 4000 is occupied by a host process and release it
PORT=4000
if ss -lptn "sport = :$PORT" | grep -q LISTEN; then
    echo "⚠️ Port $PORT is currently occupied by a local host process."
    echo "🧹 Killing the process to prevent Docker port conflicts..."
    # Attempt to kill process using fuser or lsof
    fuser -k $PORT/tcp || true
    echo "✅ Port $PORT released."
fi

# Step 2: Ensure Docker containers are booted up
echo "🚀 Running Docker Compose up..."
docker compose up -d

echo "--------------------------------------------------------"
echo "✅ Docker Development Environment is online!"
echo "--------------------------------------------------------"
echo "📊 Running Services & Endpoints:"
echo "🌐 API Server:       http://localhost:4000"
echo "🗄️ PgAdmin 4 UI:     http://localhost:5050 (Credentials: admin@admin.com / admin)"
echo "📦 MinIO Console:    http://localhost:9001 (Credentials: admin / password123)"
echo "📁 Dufs FileBrowser: http://localhost:8081 (Credentials: admin / password123)"
echo "--------------------------------------------------------"
echo "📝 Useful Commands:"
echo "🔹 View API logs:    docker compose logs -f api"
echo "🔹 View all logs:    docker compose logs -f"
echo "🔹 Stop environment: docker compose down"
echo "--------------------------------------------------------"
