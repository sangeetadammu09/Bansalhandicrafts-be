const express = require ('express');
const projectController = require ('../controllers/projectController');
const fileUpload = require('../Utils/fileUpload');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');

router.post('/list',projectController.list);
router.post('/form',fileUpload("./Storage/images"),projectController.create);
//validated apis
router.post('/listbyid/:id',validateToken, projectController.listbyid);
router.post('/search', projectController.search);
router.get('/:id',validateToken, projectController.single);
router.put('/update/:id', fileUpload("./Storage/images"),projectController.update);
router.delete('/delete/:id',validateToken, projectController.delete);

module.exports= router; 
