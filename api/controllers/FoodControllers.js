import dbClient from "../utils/dbClient.js";

const FoodController = {
    async AddFood(req, res) {
        const {name, price, count, timeToPrepare} = req.body;

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
        if(!timeToPrepare) {
            res.status(400).json({
                error: 'Missing time to prepare'
            })
        }

        const food = await dbClient.food.insertOne(
            {
                name,
                price,
                count
            }
        );

        res.status(201).json({
            id: food.insertedId,
            success: 'Food added successfully'
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
            success: 'Food removed successfully'
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
            count,
            success: 'Food details updated successfully'
        });
        return;
    },

    async fetchFood(req, res) {
        const foodName = req.body?.name;

        if(!foodName) {
            res.status(400).json({
                error: 'Missing the name of the food'
            });
            return;
        }

        const food = await dbClient.food.findOne({foodName})

        res.status(200).json({
            food
        });
        return;
    }
}

export default FoodController;