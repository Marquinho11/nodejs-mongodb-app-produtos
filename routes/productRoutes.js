const express = require('express');
const router =  express.Router();
const Product = require('../controllers/ControllerRoutes');



router.get('/', Product.home);
router.get('/cadastrodeproduto', Product.createProduct);
router.post('/create', Product.create);
router.get('/listaprodutos/:id', Product.listProducts);
router.post('remove/:id', Product.remove);



module.exports = router;