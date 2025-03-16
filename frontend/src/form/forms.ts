import { z } from "zod";

import { answerSchema, registerSchema } from "./schema";

export type AnswerForm = z.infer<typeof answerSchema>;

export type RegisterForm = z.infer<typeof registerSchema>;
