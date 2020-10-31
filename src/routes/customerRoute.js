const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.get('/', customerController.list);
router.get('/add', customerController.add);
router.post('/add', customerController.create);
router.get('/edit/:id', customerController.edit);
router.post('/edit/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;