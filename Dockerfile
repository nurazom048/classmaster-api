FROM node:20-slim

# Required packages install
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    gnupg \
    build-essential \
    python3 \
    libc6-dev \
    libvips-dev && \
    curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /usr/share/keyrings/pgdg.gpg >/dev/null && \
    echo "deb [signed-by=/usr/share/keyrings/pgdg.gpg] http://apt.postgresql.org/pub/repos/apt/ bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends postgresql-client-18 && \
    apt-get purge -y curl gnupg && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Package copy
COPY package*.json ./

# Faster install
RUN npm install

# Prisma copy
COPY prisma ./prisma/

# Prisma generate
RUN npx prisma generate

# App copy
COPY . .

EXPOSE 4000

CMD sh -c "npx prisma migrate deploy && npm run dev"