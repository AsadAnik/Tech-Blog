import { Request, Response, NextFunction } from 'express';
import catchAsyncErrorHandle from "../middleware/catchAsyncErrors";
import { ControllerFunction } from '../common/types';


class UserController {
    /**
     * ---- Uer Check Controller ----
     */
    static userCheck: ControllerFunction = catchAsyncErrorHandle(async (
        req: Request | any,
        res: Response,
        _next: NextFunction
    ) => {
        try {
            const user = req.user;

            res.status(200).json({
                success: true,
                user, 
            });
        } catch (error) {
            // Error Catch..
            return res.status(404).json({
                success: false,
                error,
            });
        }
    });
}

export default UserController;