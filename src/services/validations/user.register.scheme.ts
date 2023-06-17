import { z } from "zod";

export const UserRegisterScheme = z.object({
    name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().optional(),
    phone_number: z.string().optional(),
    registerNumber: z.string().optional(),
    password: z.string().optional(),
    confirm_password: z.string().optional(),
});

export type UserRegisterForm = z.infer<typeof UserRegisterScheme>;
