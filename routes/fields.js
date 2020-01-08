// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const fieldsController = require('../controllers/fieldsController.js');

/* GET - Create Field Form*/
router.get('/createField', fieldsController.create);

/* POST - Create Field Form*/
router.post('/createField', fieldsController.store);

/* GET - Edit Field Form
router.get('/field/:id/edit', fieldsController.edit);*/

/* PATCH - Edit Field Form
router.patch('/field/:id/edit', fieldsController.update);*/

/* GET - Field Detail*/
router.get('/field/:id', fieldsController.show);

/* DELETE - Edit Field Detail
router.delete('/field/:id', fieldsController.destroy);*/

/* DELETE- Edit Field
router.get('/', fieldsController.root);*/

module.exports = router;



/* GET - Formulario Producto 
router.get('/createField', fieldsController.create);

/* POST - Formulario Producto 
router.post('/addProduct', mainController.saveProduct);

/* GET - detalleProducto 
router.get('/productDetail/:id', mainController.productDetail);
*/





