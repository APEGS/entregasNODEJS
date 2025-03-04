import userModel from './models/user.model.js';
import { createHash } from '../utils.js';
import { validateHash } from '../utils.js';

class userManager {
    constructor() {};

    get = async () => {
        try {
            return await userModel.find().lean();
        } catch (err) {
            return null;
        }
    };

    getOne = async (filter) => {
        try {
            return await userModel.findOne(filter).lean();
        } catch (err) {
            return err.message;
        };
    };

    add = async (data) => {
        try {
            return await(userModel.create(data));
        } catch (err) {
            return err.message;
        }
    };

    update = async (filter, update, options) => {
        try {
            return await userModel.findOneAndUpdate(filter, update, options);
        } catch (err) {
            return err.message;
        }
    };

    delete = async (filter, options) => {
        try {
            return await userModel.findOneAndDelete(filter, options);
        } catch (err) {
            return err.message;
        }
    };

    authenticate = async (user, pass) => {
        try {
            const filter = { email: user };
            const foundUser = await userModel.findOne(filter).lean();

            if (foundUser && isValidPassword(pass, foundUser.password)) {
                const { password, ...filteredUser } = foundUser;

                return filteredUser;
            } else {
                return null;
            }
        } catch (err) {
            return err.message;
        }
    };

    register = async (data) => {
        try {
            const filter = { email: data.username };
            const user = await userModel.findOne(filter);
            if (user === null) {
                data.password = createHash(data.password);
                return await this.add(data);
            } else {
                return null;
            }
        } catch (err) {
            return err.message;
        }
    };

};

export default userManager;