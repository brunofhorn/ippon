import { z } from "zod";

export const UserRegisterScheme = z.object({
    name: z.string().optional(),
    last_name: z.string().optional(),
});

export type UserRegisterForm = z.infer<typeof UserRegisterScheme>;
