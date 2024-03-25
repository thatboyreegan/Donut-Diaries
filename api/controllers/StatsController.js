import dbClient from "../utils/dbClient.js";

const Stats = {
    async stats(req, res) {
        const users = await dbClient.Users();
        const orders = await dbClient.Orders();
        const food = await dbClient.Food();

        res.status(200).json(
            {
                users,
                orders,
                food
            }
        )
    },
}

export default Stats;