import BasicAuth from "../auth/basicAuth";
import tokenAuth from "../auth/tonekAuth";
import redisClient from "../utils/redisClient";
import { v4 } from "uuid";


class AuthController {
    async Connect(req, res) {
        const { authorization } = req.headers;

        if(!authorization.startsWith('Basic ')) {
            res.status(400).json(
                {error: 'Uauthorized'}
            );
        };

        const auth = new BasicAuth(authorization.slice(6));
        const user = auth.currentUser();

        if(!user) {
            res.status(400).json(
                {error: 'Uauthorized'}
            );
        }

        const token = v4();
        await redisClient.set(`auth_${token}`, user._id.toString(), 86400);

        res.status(200).json({ token });
    
        return;
    }

    async disconnect(req, res) {
        const user = tokenAuth.getUser(req);

        if(!user) {
            res.status(400).json(
                {error: 'Unauthorized'}
            );
        }

        await redisClient.del(`auth_${req.headers['x-token']}`);

        res.status(204).json();
        return;
    }
}

export default AuthController;