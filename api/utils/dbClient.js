import MongoClient from 'mongodb';

class DBClient {
    constructor() {

        this.host = process.env.DBHOST ? process.env.DBHOST : 'localhost';
        this.port = process.env.DBPORT ? process.env.DBPORT : 27017;
        this.dbName = process.env.DBNAME ? process.env.DBNAME : 'donut_diaries';
        const url = `mongodb://${this.host}:${this.port}`

        this.client = new MongoClient(url, {useUnifiedTopology: true})

        (async () => {
            this.db = await this.client.db(this.dbName);
            this.users = this.db.collection('Users');
            this.orders = this.orders.collection('orders');
            this.menus = this.db.collection('menus');
            this.food = this.db.collection('food');
        })();

    }

    isConnected() {
        try {
            this.db.command({ping: 1});
            return true;
        } catch (error) {
            return false;
        }
    };

    async Users() {
        const users = await this.users.countDocuments({});
        return users;
    };

    async Orders() {
        const orders = await this.orders.countDocuments({});
        return orders;
    };

    async Menus() {
        const menus = await this.menus.countDocuments({});
        return menus;
    }

    async Food() {
        const food  = await this.food.countDocuments({});
        return food;
    }
}

const dbClient = new DBClient();

export default dbClient;