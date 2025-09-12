import z from "zod"

export const signUpSchemaValidation = z.object({
    email: z.string().trim().email("Invalid email address"),
});