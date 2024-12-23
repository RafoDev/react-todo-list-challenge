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
    .number()
    .int("Story Points must be an integer.")
    .positive("Story Points must be a positive number.")
    .min(1, "Story Points must be at least 1.")
    .max(20, "Story Points cannot exceed 20."),
  assignee: UserSchema,
  dueDate: z.string().refine((date) => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime()) && parsedDate > new Date();
  }, "Due Date must be a valid future date."),
});

export type Todo = z.infer<typeof TodoSchema>;
