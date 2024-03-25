import { createClient } from "redis";
import { promisify } from "util";


class RedisClient {
    constructor() {
        this.client = createClient();
        this.clientConnected = true;

        this.client.on('connect', () => {
            this.clientConnected = true;
        }).on('error', (_err) => {
            console.log(`RedisClient not connected: ${_err}`);
            this.clientConnected = false;
        });
        this.client.get = promisify(this.client.get)
    }

    isConnected() {
        return this.clientConnected;
    }

    async get(key) {
        const value = await this.client.get(key).then((value) => value);
        return value;
    }

    async set(key, value, duration) {
        this.client.set(key, value);
        this.client.expire(key, duration);
    }

    async del(key) {
        await this.client.del(key);
    }
}

const redisClient = new RedisClient();

export default redisClient;