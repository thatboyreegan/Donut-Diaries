import sha1 from 'sha1';
import dbClient from '../utils/dbClient.js';

class BasicAuth {
    constructor(basicAuthHeader) {
        this.basicAuthHeader = basicAuthHeader;
        this.decodedBasicAuthHeader = undefined;
        this.userCredentials = [];
    }

    decodeBasicAuthHeader() {
        if(!this.basicAuthHeader) return null;
        if(!(typeof this.basicAuthHeader === 'string')) return null;

        this.decodedBasicAuthHeader = Buffer.from(
            this.basicAuthHeader,
            'base64',
        ).toString('utf8');

        return this.decodedBasicAuthHeader;
    }

    getUserCredentials() {
        if(this.decodedBasicAuthHeader === undefined) return null;
        if(!this.decodedBasicAuthHeader.includes(':')) return null;

        this.userCredentials = this.decodedBasicAuthHeader.split(':', 2);
        return this.userCredentials;
    }

    async getUser() {
        if(this.userCredentials.length === 0) return null;

        const [email, password] = this.userCredentials;
        const user = await dbClient.users.findOne({ email });

        if (!user) return null;
        if (sha1(password) !== user.password) return null;

        return user;
    }

    async currentUser() {
        if(!this.decodeBasicAuthHeader()) return null;
        if(!this.getUserCredentials()) return null;

        const user = await this.getUser();

        if(!user) return null;
        return user;
    }
}

export default BasicAuth;