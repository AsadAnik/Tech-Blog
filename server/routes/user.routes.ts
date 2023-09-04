import { Router } from 'express';
import UserController from '../controllers/user.controller';
const router = Router();
import authenticateToken from '../middleware/auth';


/**
 * ==== Login Route ====
 */
router.get('/check', authenticateToken, UserController.userCheck);


export default router;