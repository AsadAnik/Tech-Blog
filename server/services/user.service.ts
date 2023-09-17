import User from '../models/User';


class UserService {
    /**
     * ----- Logout User ----
     * @param userId 
     */
    static async logout (userId: string): Promise<any> {
        const user = await User.findOne({ _id: userId });
        if (!user) return false;

        // Update the token with empty for clear token..
        user.token = '';
        await user.save();

        return user;
    }

    /**
     * ----- User Check For Users Details ----
     * @param userId 
     */
    static async userCheck (userId: string): Promise<any> {
        const user = await User.findOne({ _id: userId });
        if (!user) return false;

        return user;
    }
}

export default UserService;