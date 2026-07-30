import { PrismaClient } from "../client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = (process.env.NODE_ENV === 'production'
  ? process.env.PROD_DATABASE_URL
  : process.env.DEV_DATABASE_URL || process.env.DATABASE_URL) || "";

const pool = new Pool({ 
    connectionString: dbUrl.replace(/\?sslmode=.*$/, ''),
    ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log: ['error'],
});
const POSTGRES_URL = dbUrl;

export async function connectPostgres() {
    try {
        await prisma.$connect();
        console.log("✅ Connected to PostgreSQL Database");
        // Hide password for safety
        if (POSTGRES_URL) {
            const safeUrl = POSTGRES_URL.replace(/:(.*)@/, ":****@");
            console.log(`🗄️ PostgreSQL URL: ${safeUrl}`);
        }
        console.log(`🌍 Public Endpoint: http://localhost:5050`);
    } catch (error) {
        console.error("❌ PostgreSQL connection error:", error);
        process.exit(1); // server will stop 
    }
}


export default prisma;