import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string({ message: 'Nome é um campo obrigatório!' }).min(3, 'O nome precisa ter no mínimo 3 caracteres!'),
    email: z.string({ message: 'E-mail é um campo obrigatório!' }).email('E-mail inválido!'),
    password: z.string({ message: 'Senha é um campo obrigatório!' }).min(8, 'A senha precisa ter no mínimo 8 caracteres!')
});