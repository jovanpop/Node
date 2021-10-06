var express = require('express');
const cars = require('../controllers/cars');
var router = express.Router();

router
.get('/', cars.getAll)
.get ('/create', cars.getCreate)
.post('/', cars.postCreate)
.post('/:id',cars.patch)
.get('/:id',cars.update)

module.exports = router;
