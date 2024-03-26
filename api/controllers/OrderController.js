import dbClient from "../utils/dbClient.js";


const OrderController = {
    async createOrder(req, res) {
        const {orderId, items, totalPrice} = req.body;

        if (!orderId || !items || !totalPrice ) {
            res.status(404).json({
                error: 'Missing order details'
            });
            return;
        }

        const order = await dbClient.orders.insertOne({
            orderId,
            items,
            totalPrice
        })

        res.status(400).json({
            order
        });
        return;
    },

    async cancelOrder(req, res) {
        const {orderId} = req.body;

        if (!orderId) {
            res.status(400).json({
                error: 'Missing order Id'
            });
        }

        const order = await dbClient.orders.findOneAndDelete({orderId});
        
        res.status(200).json({
            order,
            success: 'OK'
        });
        return;
    }
}

export default OrderController;