import express, { Request, Response } from 'express';
const router = express.Router();
import authRoutes from '../routes/auth.routes';


// Includes Routes..
router.use('/api/v1/auth', authRoutes);

/**
 * ==== Health Checking API Endpoint ====
 */
router.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Success'
    });
});

export default router;