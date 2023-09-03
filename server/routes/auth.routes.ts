import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
const router = Router();


/**
 * ==== Login Route ====
 */
router.get('/login', AuthController.login);


/**
 * ==== Logout Route ====
 */
router.get('/logout', AuthController.logout);


export default router;