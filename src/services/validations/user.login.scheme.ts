import { z } from "zod";

export const UserLoginScheme = z.object({
    email: z.string().email({ message: "O e-mail está inválido." }).nonempty("O e-mail é obrigatório."),
    password: z.string().nonempty("A senha do usuário é obrigatório."),
});

export type UserLoginForm = z.infer<typeof UserLoginScheme>;
