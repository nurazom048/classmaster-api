import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log: ['error'],
});


export async function connectPostgres() {
    try {
        await prisma.$connect();
        console.log("✅ Connected to PostgreSQL Database");
    } catch (error) {
        console.error("❌ PostgreSQL connection error:", error);
        process.exit(1); // server will stop 
    }
}


export default prisma;