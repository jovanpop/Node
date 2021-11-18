let express=require("express");
let router=express.Router();
const countries = require('../controllers/countries');

router
.get("/",countries.getAll)
.get('/create',countries.getCreate)
.get('/:id', countries.getUpdate)
.post("/",countries.postCreate)
.post("/:id",countries.postUpdate)
module.exports=router;