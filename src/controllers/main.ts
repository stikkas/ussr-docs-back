import {Request, Response} from 'express';

export const index = (req: Request, res: Response) => res.send('HELLO, WORLD!');

export const dashboard = (req: Request, res: Response) => res.send('DASHBOARD PAGE');

