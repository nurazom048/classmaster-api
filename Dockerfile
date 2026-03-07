# 1. Use Node 20 as the base
FROM node:20-slim AS builder

# 2. Install OpenSSL (Required for Prisma)
RUN apt-get update -y && apt-get install -y openssl

# 3. Set working directory
WORKDIR /app

# 4. Copy package files and install dependencies
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install

# 5. Copy the rest of your code
COPY . .

# 6. Generate Prisma Client & Build TypeScript
RUN npx prisma generate
RUN npm run build

# --- Production Runner ---
FROM node:20-slim AS runner
WORKDIR /app

# Install OpenSSL again for the runner stage
RUN apt-get update -y && apt-get install -y openssl

# Copy only what we need from the builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma

# Expose the port your app uses (usually 3000 or 8080)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]