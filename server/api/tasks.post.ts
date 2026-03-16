// import { InsertTasksSchema } from "~/lib/db/schema";
import { InsertTasksSchema, tasks } from "../../lib/db/schema";
import db from "../../lib/db";

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, InsertTasksSchema.safeParse);

  if (!result.success) {
    return sendError(event, createError(
      {
        statusCode: 422,
        statusMessage: "Invalid Task"
      }
    ))

  }

  const [created] = await db.insert(tasks).values(result.data).returning();
  console.log(":::", created)

  return created
});