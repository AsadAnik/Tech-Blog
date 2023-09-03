import User from '../models/User';
import cloudinary from '../config/cloudinaryConfig';
import bcrypt from 'bcrypt';

class AuthService {
    /**
     * ---- Login for user ----
     * @param param0 
     */
    static async loginUser(nameOrEmail: string, password: string) {
        const user = await this.findByNameOrEmail(nameOrEmail);
        if (!user) return false;

        // Check if the provided password matches the stored hashed password..
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) return false;

        return user;
    }

    /**
     * ----- Find By Username Or Email -----
     * @param nameOrEmail 
     * @returns 
     */
    static async findByNameOrEmail(nameOrEmail: string) {
        // Find out user with name or email..
        const user = await User.findOne({
            $or: [{ email: nameOrEmail }, { name: nameOrEmail }],
        }).select("+password");

        return user;
    }

    /**
     * ---- Create for user registering -----
     * @param param0 
     * @returns 
     */
    static async createUser({ name, email, password, avatarPath = '' }: {
        name: string;
        email: string;
        password: string;
        avatarPath?: string;
    }) {
        // Upload the avatar to Cloudinary..
        let avatarResult;

        if (avatarPath) {
            avatarResult = await cloudinary?.v2.uploader.upload(avatarPath as string);
        }

        // Hasing Password..
        const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS) || 10);

        // Store User..
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            ...(avatarPath && {
                public_id: avatarResult?.public_id,
                url: avatarResult?.secure_url,
            })
        });

        // Save and Returning User..
        return await newUser.save();
    }

    /**
     * ----- Check if an email is already registered -----
     * @param email 
     * @returns 
     */
    static async checkEmailExists(email: string) {
        return await User.findOne({ email }) !== null;
    }

    /**
     * ---- Check if a user with the same name already exits ----
     * @param name 
     * @returns 
     */
    static async checkNameExists(name: string) {
        return await User.findOne({ name }) !== null;
    }
}

export default AuthService;