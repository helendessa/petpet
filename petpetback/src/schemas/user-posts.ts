import { z } from 'zod';

export const userPostsSchema = z.object({
    page: z.coerce.number().min(0).optional()
});