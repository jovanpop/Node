var express = require('express');
var router = express.Router();
let names =["Aco","Irina","Matea"];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', names: names});
});
module.exports = router;
