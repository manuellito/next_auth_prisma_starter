import * as z from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(5).max(50),
  firstname: z.string().min(2).max(255),
  lastname: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});