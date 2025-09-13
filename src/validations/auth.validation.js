import z from "zod"

export const signUpSchemaValidation = z.object({
    email: z.string().trim().email("Invalid email address"),
});

export const basicDetailSchemaValidation = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 100 characters"),
    password: z.string().trim().min(8, "Password must be at least 8 characters"),
});