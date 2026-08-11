import { PrismaClient } from "../client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DATABASE_URL;

const isSslDisabled = dbUrl?.includes('sslmode=disable') || dbUrl?.includes('@db:') || dbUrl?.includes('localhost') || dbUrl?.includes('127.0.0.1');

const pool = new Pool({
    connectionString: dbUrl ? dbUrl.replace(/\?sslmode=.*$/, '') : undefined,
    ssl: isSslDisabled ? false : { rejectUnauthorized: false }
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