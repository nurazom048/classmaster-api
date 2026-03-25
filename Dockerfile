FROM node:20-slim

# PostgreSQL Client ১৮ ইন্সটল
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates gnupg && \
    curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /usr/share/keyrings/pgdg.gpg >/dev/null && \
    echo "deb [signed-by=/usr/share/keyrings/pgdg.gpg] http://apt.postgresql.org/pub/repos/apt/ bookworm-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    apt-get update && apt-get install -y --no-install-recommends postgresql-client-18 && \
    apt-get purge -y curl gnupg && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# প্রথমে শুধু প্যাকেজ ফাইলগুলো কপি করে ইন্সটল করা (এতে বিল্ড ফাস্ট হবে)
COPY package*.json ./
RUN npm install

# প্রিজমা জেনারেট করা
COPY prisma ./prisma/
RUN npx prisma generate

# এরপর বাকি কোড কপি করা ( .dockerignore এর কারণে node_modules কপি হবে না)
COPY . .

EXPOSE 4000
CMD ["npm", "run", "dev"]