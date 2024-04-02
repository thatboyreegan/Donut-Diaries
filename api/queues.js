import Bull from "bull";

const orderQueue = new Bull('order queue');
const ticketQueue = new Bull('ticket queue');


const orderQueueProducer = async (data) => {
    await orderQueue.add(data)
};

const orderQueueProcessor = () => {
    orderQueue.process(async (job, done) => {
        console.log('You have succesfully placed your order and the order id is', job.data.id);
        const ticket = {
            ticketId: job.data.id,
            ticketStatus: 'Active',
            items: job.data.items,
            totalPrice: job.data.totalPrice,
            billSettled: true,
            approximatedTime: 50
        }
        /**Implement a prompt input from the vendor that 
         * indicates acceptance of the order so that the order 
         * is moved to the ticket queue
         */
        await ticketQueue.add(ticket);
        console.log('Your order has been accepted...Preparation will begin shortly')
        done();
    })
}

const ticketQueueProcessor = () => {
    ticketQueue.process(async (job, done) => {
        job.progress(0);

        setTimeout()
    })
}