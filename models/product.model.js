// const mongoose = require("mongoose");

const { mongo, default: mongoose } = require("mongoose");

// const ProductSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
        
//         price: {
//             type: Number,
//             required: true,
//         },
//     },
//     {
//         timestamps: true
//     }
// );

// const Product = mongoose.model("Product", ProductSchema);

// module.exports = Product;

module.exports = mongoose => {
    const schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    })
    return mongoose.model('product', schema);
};

