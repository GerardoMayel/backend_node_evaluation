const mongoose = require('mongoose');

//Creating Schema

const Product_Schema = mongoose.Schema ({
    product_name: {type : 'String', required: true},
    price : Number,
    description : String,
    categoryId : String,
    product_image : String
});

// {
//     "product_name" : "test_product_1",
//     "price" : 100.00,
//     "description" : "this is only a test delete later",
//     "categoryId" : "category_id_01_test",
//     "product_image" : "URL_test_image"
// }


module.exports = mongoose.model('product', Product_Schema);