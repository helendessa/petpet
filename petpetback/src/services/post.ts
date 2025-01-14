import { ExtendedRequest } from "../types/extended-request";
import { prisma } from "../utils/prisma";
import { getPublicURL } from "../utils/url";

export const findPost = async (id: number) => {
    const post = await prisma.post.findFirst({
        include: {
            user: {
                select: {
                    name: true,
                    avatar: true,
                    slug: true
                }
            },
            
            likes: {
                select: {
                    userSlug: true
                }
            }
        },
        where: { id }
    }); 

    if(post) {
        post.user.avatar = getPublicURL(post.user.avatar);
        return post;
    }

    return null;
}

export const createPost = async (slug: string, body: string, answer?: number) => {
    const newPost = await prisma.post.create({ 
        data: {
            body,
            userSlug: slug,
            answerOf: answer || 0
        }
    });
    return newPost;
}

export const findAnswersFromPost = async (id: number) => { 
    const posts = await prisma.post.findMany({
        include: {
            user: {
                select: {
                    name: true,
                    avatar: true,
                    slug: true
                }
            },
            
            likes: {
                select: {
                    userSlug: true
                }
            }
        },
        where: {
            answerOf: id,
        }
    });

    for(let postIndex in posts) {
        posts[postIndex].user.avatar = getPublicURL(posts[postIndex].user.avatar);
    }

    return posts;
}

export const checkIfPostLikedByUser = async (slug: string, id: number) => {
    const isLiked = await prisma.postLike.findFirst({
        where: {
            userSlug: slug,
            postId: id
        }
    });

    return isLiked !== null;
};

export const unlikePost = async (slug: string, id: number) => {
    await prisma.postLike.deleteMany({
        where: {
            userSlug: slug,
            postId: id
        }
    });
}

export const likePost = async (slug: string, id: number) => {
    await prisma.postLike.create({
        data: {
            userSlug: slug,
            postId: id
        }
    });
}

export const findPostsByUser = async (slug: string, currentPage: number, perPage: number) => {
    const posts = await prisma.post.findMany({
        include: {
            likes: {
                select: {
                    userSlug: true
                }
            }
        },
        where: { userSlug: slug, answerOf: 0 },
        orderBy: { createdAt: 'desc' },
        skip: currentPage * perPage,
        take: perPage,
    });

    return posts;
}

export const findPostFeed = async (following: string[], currentPage: number, perPage: number) => {
    const posts = await prisma.post.findMany({
        include: {
            user: {
                select: {
                    name: true,
                    avatar: true,
                    slug: true
                }
            },
            likes: {
                select: {
                    userSlug: true
                }
            }
        },
        where: {
            userSlug: { in: following },
            answerOf: 0
        },
        orderBy: { createdAt: 'desc' },
        skip: currentPage * perPage,
        take: perPage
    });

    for(let postIndex in posts) {
        posts[postIndex].user.avatar = getPublicURL(posts[postIndex].user.avatar);
    }

    return posts;
}

export const findPostsByBody = async (bodyContains: string, currentPage: number, perPage: number) => {
    const posts = await prisma.post.findMany({
        include: {
            user: {
                select: {
                    name: true,
                    avatar: true,
                    slug: true
                }
            },
            likes: {
                select: {
                    userSlug: true
                }
            }
        },
        where: {
            body: {
                contains: bodyContains.toLowerCase()
            },
            answerOf: 0
        },
        orderBy: { createdAt: 'desc' },
        skip: currentPage * perPage,
        take: perPage
    });

    for(let postIndex in posts) {
        posts[postIndex].user.avatar = getPublicURL(posts[postIndex].user.avatar);
    }

    return posts;
}