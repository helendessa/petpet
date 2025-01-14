import { z } from "zod";

export const updateUserSchema = z.object({
    name: z.string({ message: 'Nome é obrigatório!' }).min(3, 'Precisa ter dois ou mais caracteres').optional(),
    bio: z.string().optional(),
    link: z.string().url('Precisa ser uma URL válida').optional()
});