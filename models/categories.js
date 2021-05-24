const mongoose = require('mongoose');

//Creating Schema

const Category_Schema = mongoose.Schema ({
    categoryId: String,
    category_name: String,
    category_image: String
});


// {
//     "categoryId" : "test_category_1",
//     "category_name" : "category_name_01_test",
//     "category_image" : "URL_test_category_image"
// }

module.exports = mongoose.model('category', Category_Schema);