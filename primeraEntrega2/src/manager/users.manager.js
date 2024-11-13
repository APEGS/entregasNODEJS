import userModel from './models/user.model.js';

class userManager {
    constructor() {}

    get = async () => {
        try {
            return await userModel.find().lean();
        } catch (err) {
            return null;
        }
    }

}

export default userManager;