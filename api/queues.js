import Bull from "bull";

const orderQueue = new Bull('order queue');
const ticketQueue = new Bull('ticket queue');


const Queues = {
    async orderQueueProducer (data) {
    await orderQueue.add(data)
},
    orderQueueProcessor () {
    orderQueue.process(async (job) => {
        console.log('You have succesfully placed your order and the order id is', job.data.ticketNumber);
        const ticket = {
            ticketId: job.data.ticketId,
            ticketNumber: job.data.ticketNumber,
            ticketItems: job.data.ticketItems,
            totalPrice: job.data.totalPrice
        }
        await ticketQueue.add(ticket);
        console.log('Your order has been accepted...Preparation will begin shortly');
        return ticket;  
    });
},
    ticketQueueProcessor() {
        ticketQueue.process(async (job) => {
            console.log(`Processing your order now...`);
        })
    }
}

export default Queues;
