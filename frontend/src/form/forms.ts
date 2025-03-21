import { z } from "zod";

import {
  answerSchema,
  loginSchema,
  registerSchema,
  updateUserProfileSchema,
} from "./schema";

export type AnswerForm = z.infer<typeof answerSchema>;

export type RegisterForm = z.infer<typeof registerSchema>;

export type LoginForm = z.infer<typeof loginSchema>;

export type UpdateUserProfileForm = z.infer<typeof updateUserProfileSchema>;
