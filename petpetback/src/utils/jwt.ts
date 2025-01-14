// filepath: /home/helen/Documents/IF/petpetback/src/utils/jwt.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { findUserBySlug } from '../services/user';
import { ExtendedRequest } from '../types/extended-request';

export const verifyJWT = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        console.log('No authorization header');
        res.status(401).json({ error: 'Acesso negado!' });
        return;
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        async (error, decoded: any) => {
            if (error) {
                console.log('Token verification failed:', error);
                res.status(401).json({ error: 'Acesso negado!' });
                return;
            }

            try {
                const user = await findUserBySlug(decoded.slug);
                if (!user) {
                    console.log('User not found for slug:', decoded.slug);
                    res.status(401).json({ error: 'Usuário não encontrado!' });
                    return;
                }

                req.userSlug = user.slug;
                next();
            } catch (err) {
                console.log('Error finding user by slug:', err);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    );
};