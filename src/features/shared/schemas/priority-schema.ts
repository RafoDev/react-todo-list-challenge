import { z } from "zod";

export const PriorityEnum = z.enum(["URGENT", "HIGH", "NORMAL", "LOW"], {
  errorMap: () => ({ message: "Priority enum must be " }),
});
export type PriorityEnum = z.infer<typeof PriorityEnum>;
