import { z } from "zod";

export const addPostSchema = z.object({
    body: z.string({message: 'Corpo é um campo obrigatório!'}).min(3, 'O corpo precisa ter no mínimo 3 caracteres!'),
    answer: z.string().optional()
});