import { ExtendedRequest } from "../types/extended-request";
import { feedSchema } from "../schemas/feed";
import { Response } from "express";
import { getUserFollowing } from "../services/user";
import { findPostFeed } from "../services/post";

export const getFeed = async (req: ExtendedRequest, res: Response) => {
    const safeData = feedSchema.safeParse(req.query);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    let perPage = 2;
    let currentPage = safeData.data.page ?? 0;

    const following = await getUserFollowing(req.userSlug as string);
    const posts = await findPostFeed(following, currentPage, perPage);

    res.json({ posts, page: currentPage })
}