const express = require('express');
const router = express.Router();
const hoopersCtrl = require('../controllers/hoopers');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/new', ensureLoggedIn, hoopersCtrl.new);
router.post('/', ensureLoggedIn, hoopersCtrl.create);


module.exports = router;