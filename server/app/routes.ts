import express, { Request, Response } from 'express';
const router = express.Router();
import authenticateToken from "../middleware/auth";
import authRoutes from '../routes/auth.routes';
import userRoutes from '../routes/user.routes';

// Includes Routes..
router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/user', authenticateToken, userRoutes);

/**
 * ==== Health Checking API Endpoint ====
 * @swagger
 * /api/health:
 * get:
 *   summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of users
 *       500:
 *         description: Internal server error
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
