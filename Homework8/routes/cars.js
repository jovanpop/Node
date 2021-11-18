var express = require('express');
const cars = require('../controllers/cars');
var router = express.Router();

router
.get('/', cars.getAll)
.get ('/create', cars.getCreate)
.post('/', cars.postCreate)
.get('/:id',cars.getUpdate)
.post('/:id',cars.postUpdate)


module.exports = router;
