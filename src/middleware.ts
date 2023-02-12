// check if the header is present with password taz
import { Request, Response, NextFunction } from 'express';

export const checkPassword = (req: Request, res: Response, next: NextFunction) => {
    // why ? fucking i hate doing auth for no reason hhhhhh
    const { password } = req.headers;
    if (password === process.env.PASS) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
