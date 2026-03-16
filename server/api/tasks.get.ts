import db from "../../lib/db";
import { tasks } from "../../lib/db/schema";

export default defineEventHandler(async () => {
    const result = await db.select().from(tasks);
    return result;
});