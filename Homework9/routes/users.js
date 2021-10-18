var express = require('express');
var router = express.Router();
const users= require('../controllers/users');

/* GET users listing. */
router.post('/',users.postUser);
router.post('/login',users.postLogIn);
module.exports = router;
