import dbClient from "../utils/dbClient.js";

const FoodController = {
    async AddFood(req, res) {
        const {name, price, count} = req.body;

        if(!name) {
            res.status(400).json(
                {error: 'Missing name of food'}
            );
            return;
        };
        if(!price) {
            res.status(400).json(
                {error: 'Missing price of food'}
            );
            return;
        };
        if(!count) {
            res.status(400).json(
                {error: 'Missing amount available'}
            );
            return;
        };

        const food = await dbClient.food.insertOne(
            {
                name,
                price,
                count
            }
        );

        res.status(201).json({
            id: food._id,
            name,
            price,
            count
        });
        return;
    },

    async removeFood(req, res) {
        const {name} = req.body;

        if(!name) {
            res.status(400).json({
                error: 'Missing name'
            });
            return;
        };

        const food = await dbClient.food.findOneAndDelete({name});

        res.status(200).json({
            success: 'Ok'
        })
    },

    async updateFood(req, res) {
        const {name, count} = req.body;

        if(!name || !count) {
            res.status(400).json({
                error: 'Missing details'
            });
            return;
        }

        const food = await dbClient.food.findOneAndDelete({name});

        const updatedFood = await dbClient.food.insertOne({
            name,
            insertedId: food._id,
            count,
        })

        res.status(200).json({
            name: updatedFood.name,
            count
        });
        return
    }
}