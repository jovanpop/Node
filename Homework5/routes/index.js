var express = require('express');
var router = express.Router();
let names =["Aco","Irina","Matea"];
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', people: names});
});
// router.get ("/countries", (req,res)=>{
//   res.render ('countries', {countries: [{name:"USA",city: "Washington",population: 300},{name:"Macedonia",city:"Skopje",population:2},{name:"Germany",city:"Berlin",population:80}]});
// }); 
module.exports = router;
