const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    name: {
        type: String
    },
    colors: {
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema);