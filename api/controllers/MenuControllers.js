import dbClient from "../utils/dbClient.js";

const MenuController = {
    async addMenu(req, res) {
        const {name, items, period} = req.body;

        if (!name || !items || !period) {
            res.status(400).json({
                error: 'Missing menu details'
            });
            return;
        };

        const menu = await dbClient.menus.insertOne({
            name,
            items,
            period
        });

        res.status(200).json({
            id: menu._id,
            name,
            items,
            period
        });
        return;
    },

    async removeMenu(req, res) {
        const {name} = req.body;

        if(!name) {
            res.status(400).json({
                error: 'Missing menu details'
            });
        };

        const menu = await dbClient.menus.findOneAndDelete({name});

        res.status(200).json({
            id: menu._id,
            success: 'OK'
        });
        return;
    },

    async fetchMenu(req, res) {
        const {name} = req.body?.name;

        if(!name) {
            res.status(400).json({
                error: 'Missing name of menu'
            });
            return;
        }

        const menu  = await dbClient.food.findOne({name});

        res.status(200).json({menu})
    }

}

export default MenuController;