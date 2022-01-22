const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required:true},
    price: {type: Number, required: true},
});

const StoreSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    categories: {type: Array, required: true},
    address: {type: String, required: true},
    area: {type: String, required: true},
    delivery_time: {type: String, required: true},
    min_order_price: {type: String, required: true},
    rating: {type: String, required: true},
    review_no: {type: String, required: true},
    image: {type: String, required: true},
    products: {type: [productSchema], required: true},
});

StoreSchema.index({id: 1});

const model = mongoose.model('stores', StoreSchema);

module.exports = model;