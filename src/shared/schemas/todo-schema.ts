import { z } from "zod";
import { UserSchema } from "./user-schema";
import { PriorityEnum } from "./priority-schema";
import { v4 as uuid4 } from "uuid";
import { STATUS, StatusEnum } from "./status-schema";

export const TodoSchema = z
  .object({
    id: z.string().optional(),
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
      return !isNaN(parsedDate.getTime()) && parsedDate >= new Date();
    }, "Due Date must be a valid future date."),
    status: StatusEnum,
  })
  .transform((data) => {
    return {
      ...data,
      id: data.id || uuid4(),
      status: data.status || STATUS[0],
    };
  });

export type Todo = z.infer<typeof TodoSchema>;
