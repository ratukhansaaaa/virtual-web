import { z } from "zod";


export const registerSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});


export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});


export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;


export interface AuthResponse {
  message: string;
  user: {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
  };
}

export interface UserContext {
  userId: number;
  email: string;
  name: string;
}
