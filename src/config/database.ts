import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaMariaDb} from "@prisma/adapter-mariadb";
import { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } from "./env.js";

const adapter = new PrismaMariaDb({
    host : DATABASE_HOST,
    user : DATABASE_USER,
    password : DATABASE_PASSWORD,
    database : DATABASE_NAME,
    connectionLimit : 5
});

export const prisma = new PrismaClient({
    adapter
});

export async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log("[Database] connected successfully");
    } catch (error) {
        console.error("[Database] failed to connect", error);
        process.exit(1);
    }
}