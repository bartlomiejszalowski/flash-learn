import { z } from "zod";

import { answerSchema } from "./schema";

export type AnswerForm = z.infer<typeof answerSchema>;
