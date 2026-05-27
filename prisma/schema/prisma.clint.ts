import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['error'],
});

const POSTGRES_URL = process.env.DATABASE_URL;
const HOST_IP = "127.0.0.1";

export async function connectPostgres() {
    try {
        await prisma.$connect();

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("🐘 PostgreSQL Connected");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

        if (POSTGRES_URL) {
            const safeUrl = POSTGRES_URL.replace(/:(.*)@/, ":****@");
            console.log(`🗄️ Database URL : ${safeUrl}`);
        }

        console.log(`🌐 pgAdmin       : http://localhost:5050`);
        console.log(`🌐 pgAdmin IP    : http://${HOST_IP}:5050`);

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    } catch (error) {
        console.error("❌ PostgreSQL connection error:", error);
        process.exit(1);
    }
}

export default prisma;