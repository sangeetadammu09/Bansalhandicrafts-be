const express = require ('express');
const productController = require ('../controllers/productController');
const fileUpload = require('../Utils/fileUpload');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');

router.post('/list',productController.list);
router.post('/form',fileUpload("./Storage/images"),productController.create);

//validated apis
router.post('/listbyid/:id',validateToken, productController.listbyid);

router.post('/search', productController.search);

router.get('/:id',validateToken, productController.single);

router.put('/update/:id', fileUpload("./Storage/images"),productController.update);

router.get('/check/:id', productController.checkPhoneandEmailValidation)

router.delete('/delete/:id',validateToken, productController.delete);

module.exports= router; 
