import { z } from "zod";

export const answerSchema = z.object({ answer: z.string() });

export const registerSchema = z
  .object({
    nickname: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
    email: z.string().email("Nieprawidłowy adres e-mail"),
    password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
    confirmPassword: z.string(),
    gender: z.enum(["male", "female"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła muszą być identyczne",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Nieprawidłowy adres e-mail"),
  password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
});

export const updateUserProfileSchema = z.object({
  nickname: z.string().min(1, "Podaj nazwę użytkownika").optional(),
  bio: z.string().optional(),
  gender: z.enum(["male", "female"]).optional(),
  profileImage: z
    .union([
      z.string(), // URL z backendu
      z.custom<File>(
        (file) => {
          if (!(file instanceof File)) return false;
          return file.size <= 5 * 1024 * 1024; // max 5MB
        },
        { message: "Avatar musi być mniejszy niż 5MB" }
      ),
      z.null(),
    ])
    .optional(),
});
