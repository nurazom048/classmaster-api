import { PrismaClient } from "../client";

const dbUrl = process.env.NODE_ENV === 'production'
  ? process.env.PROD_DATABASE_URL
  : process.env.DEV_DATABASE_URL || process.env.DATABASE_URL;

const prisma = new PrismaClient({
    log: ['error'],
    datasources: {
        db: {
            url: dbUrl,
        },
    },
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