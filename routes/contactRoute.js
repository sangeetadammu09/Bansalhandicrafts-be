const express = require ('express');
const contactController = require ('../controllers/contactControllers');
const validateToken = require('../middlewares/validateTokenHandler');
const router = express.Router();


router.post('/form',contactController.createContact);

router.put('/update/:id',validateToken, contactController.updatecontact);

router.post('/listofcontact',validateToken,contactController.listofcontacts);

router.delete('/delete/:id',validateToken, contactController.deletecontact);

module.exports= router;