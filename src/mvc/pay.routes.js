const router = require('express').Router();
const payController = require('./pay.controllers');

router.get('/', payController.getPays);
router.get('/:id', payController.getPayById);
router.post('/', payController.createPays);

module.exports = router;
