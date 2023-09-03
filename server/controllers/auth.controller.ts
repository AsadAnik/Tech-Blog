import { Request, Response, NextFunction } from 'express';
// import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrorHandle from "../middleware/catchAsyncErrors";
import { ControllerFunction } from '../common/types';
// import User from "../models/User";


class AuthController {
    /**
     * ---- Login Controller ----
     */
    static login: ControllerFunction = catchAsyncErrorHandle(async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        res.status(200).json({
            message: "Hi I am Login controller"
        });
    });

    /**
     * ---- Logout Controller ----
     */
    static logout: ControllerFunction = catchAsyncErrorHandle(async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });

        res.status(200).json({
            success: true,
            message: 'Logged Out',
        });
    });
}

export default AuthController;