const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productname: String,
    category: String,
    reviews: [Number],
    actualPrice: Number,
    orderSummary: [Number],
    discountedPrice: [Number],
})

const Product = mongoose.model('product',productSchema);

module.exports = Product;