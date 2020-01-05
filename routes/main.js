// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);

/* GET - login. */
router.get('/login', mainController.login);

/* GET - addProduct */
router.get('/addProduct', mainController.addProduct);

/* GET - detalleProducto */
router.get('/detalleproducto/:id', mainController.detalleproducto);

/* GET - user */
router.get('/user', mainController.user);

module.exports = router;
