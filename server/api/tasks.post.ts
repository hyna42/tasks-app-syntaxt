// import { InsertTasksSchema } from "~/lib/db/schema";
import { InsertTasksSchema } from "../../lib/db/schema";

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
  return { task: result.data }
});