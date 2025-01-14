import { searchSchema } from "../schemas/search";
import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { findPostsByBody } from "../services/post";

export const searchPosts = async (req: ExtendedRequest, res: Response) => {
    const safeData = searchSchema.safeParse(req.query);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    let perPage = 2;
    let currentPage = safeData.data.page ?? 0;

    const posts = await findPostsByBody(
        safeData.data.q,
        currentPage,
        perPage,
    );

    res.json({ posts, page: currentPage });
}