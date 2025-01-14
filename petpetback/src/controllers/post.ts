import { addPostSchema } from "../schemas/add-post";
import { checkIfPostLikedByUser, createPost, findAnswersFromPost, findPost, likePost, unlikePost } from "../services/post";
import { ExtendedRequest } from "../types/extended-request";
import { Response } from "express";

export const addPost = async (req: ExtendedRequest, res: Response) => {
    
    // Validar os dados enviados
    const safeData = addPostSchema.safeParse(req.body);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    // Verificar se é resposta
    if(safeData.data.answer) {
        const hasAnswerPost = await findPost(parseInt(safeData.data.answer));
        if (!hasAnswerPost) {
            res.json({ error: 'Post não encontrado!' });
            return;
        }
    }

    // Criar o post
    const newPost = await createPost(
        req.userSlug as string,
        safeData.data.body,
        safeData.data.answer ? parseInt(safeData.data.answer) : 0
    );

    
    res.json({post: newPost});
}

export const getPost = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const post = await findPost(parseInt(id));
    if(!post) {
        res.json({ error: 'Post não encontrado!' });
        return;
    }

    res.json({ post });
}

export const getAnswers = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const answers = await findAnswersFromPost(parseInt(id));
    res.json({ answers });
}

export const likeToggle = async (req: ExtendedRequest, res: Response) => {
    const { id } = req.params;

    const liked = await checkIfPostLikedByUser(
        req.userSlug as string,
        parseInt(id)
    );

    if(liked) {
        await unlikePost(
            req.userSlug as string,
            parseInt(id)
        );
    } else {
        await likePost(
            req.userSlug as string,
            parseInt(id)
        );
    }

    res.json({});
}