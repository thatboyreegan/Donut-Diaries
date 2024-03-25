import tokenAuth from "../auth/tonekAuth.js";
import dbClient from "../utils/dbClient.js";
import sha1 from 'sha1';


const UsersController = {
    async register(req, res) {
        const { username, email, password } = req.body;

        if(!username) {
            res.status(400).json({error: 'Missing username'});
            return;
        }
        if (!email) {
            res.status(400).json({error: 'Missing email'});
            return;
        };

        if(!password) {
            res.status(400).json({error: 'Missing password'});
            return;
        }

        const user = await dbClient.users.findOne({email});

        if (user) {
            res.status(401).json({error: 'user already exists'});
            return;
        }

        const hashedPassword = sha1(password);

        const result  = await dbClient.users.insertOne({
            username,
            email,
            password: hashedPassword,
        });
        const userId = result.insertedId.toString();

        res.status(200).json({
            id: userId,
            username,
            email
        });
        return;
    },

    async login(req, res) {
        const {email, password} = req?.body;

        if(!email) {
            res.status(400).json({error: 'Missing email'});
            return;
        };

        if(!password) {
            res.status(400).json({error: 'Missing password'});
            return;
        }

        const user = await dbClient.users.findOne({email});

        if(!user) {
            res.status(400).json({error: 'User does not exist'});
            return;
        }

        if(sha1(password) !== user.password) {
            res.status(400).json({error: 'Wrong password'});
            return;
        }

        const userId = user.insertedId;
        res.status(200).json({
            id: userId,
            email,
            username: user.username
        });
        return;
    },

    async getMe(req, res) {
        const user = await tokenAuth.getUser(req);

        if (!user) {
            res.status(400).json(
                {error: 'Unauthorized'}
            );
        };

        res.status(200).json(
            {
                id: user._id,
                username: user.username,
                email: user.email
            }
        );
        return;
    }
};

export default UsersController;