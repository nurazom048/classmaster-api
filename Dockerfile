FROM node:20-slim

# PostgreSQL Client Install
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    gnupg && \
    curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /usr/share/keyrings/pgdg.gpg >/dev/null && \
    echo "deb [signed-by=/usr/share/keyrings/pgdg.gpg] http://apt.postgresql.org/pub/repos/apt/ bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    postgresql-client-18 && \
    apt-get purge -y curl gnupg && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Dependencies
COPY package*.json ./
RUN npm install

# Prisma
COPY prisma ./prisma/
RUN npx prisma generate

# App Copy
COPY . .

EXPOSE 4000

# Container start হলে automatically:
# 1. prisma generate
# 2. migrate deploy
# 3. app start
CMD sh -c "npx prisma generate && npx prisma migrate deploy && npm run dev"