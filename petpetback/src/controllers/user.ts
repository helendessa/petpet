import { signinSchema } from "../schemas/signin";
import { updateUserSchema } from "../schemas/update-user";
import { userPostsSchema } from "../schemas/user-posts";
import { findPostsByUser } from "../services/post";
import { checkIfFollows, findUserBySlug, getUserFollowersCount, getUserFollowingCount, getUserPostCount, unfollow, follow, updateUserInfo } from "../services/user";
import { ExtendedRequest } from "../types/extended-request";
import { Response } from "express";

export const getUser = async (req: ExtendedRequest, res: Response) => {
    const { slug } = req.params;

    const user = await findUserBySlug(slug);
    if(!user) {
        res.json({error: 'Usuário inexistente!'});
        return;
    };

    const followingCount = await getUserFollowingCount(user.slug);
    const followersCount = await getUserFollowersCount(user.slug);
    const postCount = await getUserPostCount(user.slug);

    res.json({user, followingCount, followersCount, postCount});
}

export const getUserPosts = async (req: ExtendedRequest, res: Response) => {
    const { slug } = req.params;

    const safeData = userPostsSchema.safeParse(req.query);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    let perPage = 10;
    let currentPage = safeData.data.page ?? 0;

    const posts = await findPostsByUser(slug, currentPage, perPage);

    res.json({ posts, page: currentPage });
}

export const followToggle = async (req: ExtendedRequest, res: Response) => {
    const { slug } = req.params;

    const me = req.userSlug as string;

    const hasUserToBeFollowed = await findUserBySlug(slug);
    if(!hasUserToBeFollowed) {
        res.json({error: 'Usuário inexistente!'});
    }

    const follows = await checkIfFollows(me, slug);
    if(!follows) {
        await follow(me, slug);
        res.json({ following: true });
    } else {
        await unfollow(me, slug);
        res.json({ following: false });
    }
}

export const updateUser = async (req: ExtendedRequest, res: Response) => {
    const safeData = updateUserSchema.safeParse(req.body);

    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    await updateUserInfo(
        req.userSlug as string,
        safeData.data
    );

    res.json({});
}