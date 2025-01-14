import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const privatePing = (req: Request, res: Response) => {
    res.json({ pong: true });
}
