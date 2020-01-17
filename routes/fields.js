// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require ("multer");
const path = require ("path");

//************ Storage Engine for the field images ************
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) { //Where the image is stored
      cb(null, path.join(__dirname + "/../public/images/fields"))
    },
    filename: function (req, file, cb) {  //Image name stored
      cb(null, file.fieldname + '-' + Date.now() + path.extname (file.originalname));
    }
});

// ************ Upload variable ************

const upload = multer ({
   storage: diskStorage});

//    fieldSize: (1000000),
//    fileFilter: function(req, file, cb){
//     checkFileType(file,cb);
//    }
// }).single("image1");

// ************ Check File Type ************

// function checkFileType (file, cb){

//     const filetype = /jpeg|jpg|png/;
//     const extname =filetype.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetype.test(file.mimetype);

//     if (mimetype && extname){
//         return cb (null, true);
//     } else {
//         cb ("Error: Ingresa sólo imágenes!");}
// }

// ************ Controller Require ************
const fieldsController = require('../controllers/fieldsController.js');

/* GET - Fields List*/
router.get('/', fieldsController.index);

/* GET - Create Field Form*/
router.get('/create', fieldsController.create);

/* POST - Create Field Form*/
router.post('/create', upload.any(), fieldsController.store);

/* GET - Edit Field Form
router.get('/:id/edit', fieldsController.edit);*/

/* PATCH - Edit Field Form
router.patch('/:id/edit', fieldsController.update);*/

/* GET - Field Detail*/
router.get('/:id', fieldsController.show);

/* DELETE - Edit Field Detail */
router.delete('/:id', fieldsController.destroy);

module.exports = router;


