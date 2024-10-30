import * as z from "zod";

export const LoginSchema = z.object({
    code: z.string().min(6).max(6),
    email: z.string().email()
});