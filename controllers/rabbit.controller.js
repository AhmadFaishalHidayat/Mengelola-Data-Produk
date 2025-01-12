const Product = require('../models/product.model');
let channel;

exports.initRabbitMQ = async (amqp, uri, queueName) => {
    const connection = await amqp.connect(uri);
    channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    console.log('RabbitMQ connected');
};

exports.publishMessage = (req, res) => {
    try {
        const message = req.body;
        channel.sendToQueue('product_queue', Buffer.from(JSON.stringify(message)));
        res.status(200).json({ message: 'Message published to RabbitMQ' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to publish message' });
    }
};

exports.consumeMessages = async () => {
    channel.consume('product_queue', async (msg) => {
        const productData = JSON.parse(msg.content.toString());
        const product = new Product(productData);

        try {
            await product.save();
            console.log('Product saved to MongoDB:', product);
            channel.ack(msg);
        } catch (err) {
            console.error('Failed to save product:', err);
        }
    });
};
