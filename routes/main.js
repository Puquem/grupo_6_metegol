// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);

/* GET - login. */
router.get('/login', mainController.login);

/* GET - Formulario Producto */
router.get('/addProduct', mainController.addProduct);

/* POST - Formulario Producto */
router.post('/addProduct', mainController.saveProduct);

/* DELETE - Borrar Producto */
router.delete('/deleteProduct/:id', mainController.deleteProduct);

module.exports = router;
