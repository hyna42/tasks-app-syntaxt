// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/tursodatabase/database';

// const db = drizzle(process.env.DB_FILE_NAME!);
import { z } from "zod";

export default function tryParseEnv(schema: z.ZodObject<any>) {
    const result = schema.safeParse(process.env);
    if (!result.success) {
        console.error("❌ Variables d'environnement invalides:");
        console.error(result.error.flatten().fieldErrors);
        process.exit(1);
    }
}