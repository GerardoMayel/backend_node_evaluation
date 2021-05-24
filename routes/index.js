const express = require('express');
const router = express.Router();
const product = require('../models/product');

//ROUTES: 

router.get('/',(req, res) => {
    res.send('We are on home api');
});

//Add more routes requires:
//Import routes on App.js
//const indexRoute = require('./routes/index');
//app.use('/api', indexRoute);

//GET /api/products/ Endpoint para retornar la lista de productos.
router.get('/products', async (req, res) => {
    try{
        const findProduct = await product.find();
        res.json(findProduct);
    }catch(err){
        res.json({message: err});
    }
});

//GET /api/products/{id}/ Endpoint para retornar un producto.

router.get('/products/:Id', async (req, res) => {
    try{
    const findid = await product.findById(req.params.Id);
    res.json(findid);
    }catch(err){
        res.json({message: err});
    }
});

//POST /api/products/ Endpoint para crear un producto.
router.post('/products', async (req, res) => {
    // console.log(req.body);
    const post_product = new product({
        product_name : req.body.product_name,
        price : req.body.price,
        description : req.body.description,
        categoryId : req.body.categoryId,
        product_image : req.body.product_image
    });
    try {
    const saveProduct = await post_product.save();
        res.json(saveProduct);
    }catch(err){
        res.json({message: err})
    }
});

//PUT /api/products/{id}/ Endpoint para modificar un producto.

router.patch('/products/:Id', async (req, res) => {
    try{
    const modifyProduct = await product.updateOne({_id : req.params.Id}, {
        $set : {
            product_name : req.body.product_name,
            price : req.body.price,
            description : req.body.description,
            categoryId : req.body.categoryId,
            product_image : req.body.product_image
        }
     } );
    res.json(modifyProduct);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE /api/products/{id}/ Endpoint para eliminar un producto.

router.delete('/products/:Id', async (req, res) => {
    try{
        const deleteProduct = await product.remove({_id : req.params.Id});
        res.json(deleteProduct);
    }catch(err){
        res.json({message: err});
    }
});



module.exports = router;