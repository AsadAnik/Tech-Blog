import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

/**
 * ----- Check the Token is Valid or Not -------
 * @param req 
 * @param res 
 * @param next 
 */
const authenticateToken = (req: Request | any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ 
        success: false,
        message: 'Authentication Required',  
    });

    try {
        // Verify the Token..
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        // Error..
        return res.status(401).json({
            success: false,
            message: 'Invalid Token',
        });
    }
};

export default authenticateToken;