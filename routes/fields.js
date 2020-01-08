// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const fieldsController = require('../controllers/fieldsController');

/* GET - home page. */
router.get('/', mainController.root);

/* GET - Formulario Producto */
router.get('/addProduct', mainController.addProduct);

/* POST - Formulario Producto */
router.post('/addProduct', mainController.saveProduct);

/* GET - detalleProducto */
router.get('/productDetail/:id', mainController.productDetail);

