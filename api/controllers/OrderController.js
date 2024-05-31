import dbClient from "../utils/dbClient.js";
import Queues from "../queues.js";


const OrderController = {
    async createOrder(req, res) {
        const {orderId, items, totalPrice} = req?.body;

        if (!orderId || !items || !totalPrice ) {
            res.status(404).json({
                error: 'Missing order details'
            });
            return;
        }

        //Add the orderid to the orders queue


        const order = await dbClient.orders.insertOne({
            orderId,
            items,
            totalPrice
        });
        console.log(order)

        if (order.acknowledged) {
            Queues.orderQueueProducer({
                ticketId: order.insertedId,
                ticketNumber: orderId,
                TicketItems: items,
                totalPrice: totalPrice
            });
            Queues.orderQueueProcessor();// this can only be initiated once and it rusn for all the tickets
            res.status(200).json({
                success: `order ${orderId} placed successfully`
            });
            return;
        };
        return;
    },

    async cancelOrder(req, res) {
        const {orderId} = req.body;

        if (!orderId) {
            res.status(400).json({
                error: 'Missing order Id'
            });
        }

        //remove the order id from the orders array


        const order = await dbClient.orders.findOneAndDelete({orderId});
        
        res.status(200).json({
            order,
            success: 'OK'
        });
        return;
    }
}

export default OrderController;