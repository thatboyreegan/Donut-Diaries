import MongoClient from 'mongodb';

class DBClient {
    constructor() {

        this.host = process.env.DBHOST ? process.env.DBHOST : 'localhost';
        this.port = process.env.DBPORT ? process.env.DBPORT : 27017;
        this.dbName = process.env.DBNAME ? process.env.DBNAME : 'donut_diaries';
        const url = `mongodb://${this.host}:${this.port}`

        this.client = new MongoClient(url, {useUnifiedTopology: true})

    }
}

const dbClient = new DBClient();

export default dbClient;