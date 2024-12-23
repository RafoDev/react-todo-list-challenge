import { z } from "zod";
import { UserSchema } from "./user-schema";
import { PriorityEnum } from "./priority-schema";

export const TodoSchema = z.object({
  name: z
    .string()
    .min(5, "Task Name must be at least 5 characters long.")
    .max(30, "Task Name must be at most 30 characters long.")
    .nonempty("Task Name is required."),
  priority: PriorityEnum,
  storyPoints: z
    .string()
    .transform((value) => Number(value))
    .refine(
      (value) => Number.isInteger(value) && value > 0 && value <= 20,
      "Story Points must be an integer between 1 and 20."
    ),
  assignee: UserSchema.shape.name,
  dueDate: z.string().refine((date) => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime()) && parsedDate > new Date();
  }, "Due Date must be a valid future date."),
});

export type Todo = z.infer<typeof TodoSchema>;
