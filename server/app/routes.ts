import express, { Request, Response } from 'express';
import authenticateToken from "../middleware/auth";
import authRoutes from '../routes/auth.routes';
import userRoutes from '../routes/user.routes';
import blogRoutes from '../routes/blog.routes';

const router = express.Router();

// Includes Routes..
router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/user', authenticateToken, userRoutes);
router.use('/api/v1/blogs', blogRoutes);

/**
 * ==== Health Checking API Endpoint ====
 */
router.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Success'
    });
});

/**
 * ==== 404 Resource Not Found =====
 */
router.get('*', (_req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Resource not found!",
    });
});


export default router;
