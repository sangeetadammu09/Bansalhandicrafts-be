const express = require ('express');
const router = express.Router();
const fileUpload = require('../Utils/fileUpload');
const adminController = require ('../controllers/adminController');
const validateToken = require('../middlewares/validateTokenHandler');

router.post('/register',fileUpload("./Storage/images"),adminController.register);
router.get('/:id',validateToken, adminController.singleuser);
router.put('/update/:id', fileUpload("./Storage/images"),adminController.updateuser);
router.post('/login',adminController.login);
router.post('/all',validateToken, adminController.allAdmins);
router.delete('/delete/:id',validateToken, adminController.deleteuser);

module.exports= router;

//admin/register