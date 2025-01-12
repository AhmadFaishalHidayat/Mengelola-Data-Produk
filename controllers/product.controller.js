const db = require('../models');
const Product = db.product;
const Joi = require('joi');

// Validation schema using Joi
const productValidationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().positive().required()
});

module.exports = class Controller {
    static async getProducts(req, res) {
        try {
            console.log('getProducts');
            const data = await Product.find({});
            res.status(200).json(data);
        } catch (error) {
            console.log('error', error);
            res.status(500).send({ message: error.message });
        }
    }

    static async getProduct(req, res) {
        try {
            const { id } = req.params;

            const data = await Product.findById(id);

            if (!data) {
                res.status(404).json({ message: 'Product not found' });
            }

            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createProduct(req, res) {
        const { error } = productValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });
        try {
            const { name, price } = req.body;

            let data = await Product.create({ name, price });

            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async updateProduct(req, res) {
        const { error } = productValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });
        try {
            const { id } = req.params;

            const { name, price } = req.body;

            let data = await Product.findByIdAndUpdate(id, { name, price });

            if (!data) {
                res.status(404).json({ message: 'Product not found' });
            }

            const updateProduct = await Product.findById(id);

            res.status(200).json(updateProduct);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;

            let data = await Product.findByIdAndDelete(id);

            if (!data) {
                res.status(404).json({ message: 'Product not found' });
            }

            res.status(200).json({ message: `Product ${data.name} deleted successfully` });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
};
