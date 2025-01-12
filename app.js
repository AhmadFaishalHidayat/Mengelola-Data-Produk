const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const amqp = require('amqplib');
require('dotenv').config();

const db = require('./models');
const productRoute = require('./routes/product.route');
const rabbitRoutes = require('./routes/rabbit.route');
const rabbitController = require('./controllers/rabbit.controller');

const app = express();

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});

app.use('/products', productRoute);
app.use('/rabbit', rabbitRoutes);


// Connect to MongoDB
mongoose
    .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(err => {
        console.log(`Connection failed! ${err}`);
        process.exit();
    });

// Connect to RabbitMQ
rabbitController.initRabbitMQ(amqp, process.env.RABBITMQ_URI, 'product_queue')
    .then(() => {
        // Start consuming messages
        rabbitController.consumeMessages();
    })
    .catch(err => console.error('RabbitMQ initialization error:', err));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});