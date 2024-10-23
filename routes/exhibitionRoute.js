const express = require ('express');
const exhibitionController = require ('../controllers/exhibitionController');
const fileUpload = require('../Utils/fileUpload');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');

router.post('/list',exhibitionController.list);
router.post('/form',fileUpload("./Storage/images"),exhibitionController.create);
//validated apis
router.post('/listbyid/:id',validateToken, exhibitionController.listbyid);
router.post('/search', exhibitionController.search);
router.get('/:id',validateToken, exhibitionController.single);
router.put('/update/:id', fileUpload("./Storage/images"),exhibitionController.update);
router.delete('/delete/:id',validateToken, exhibitionController.delete);

module.exports= router; 
