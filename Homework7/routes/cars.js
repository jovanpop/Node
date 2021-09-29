var express = require('express');
var router = express.Router();
let cars=[];

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('./cars/cars',{cars: cars});
})
.get ('/create',(req,res)=>{
  res.render('./cars/create',{cars: cars});
})
.post('/', (req,res)=>{
  cars.push(req.body);
  res.redirect('/cars');
})

module.exports = router;
