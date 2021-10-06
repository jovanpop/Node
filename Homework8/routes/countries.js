let express=require("express");
let router=express.Router();
const countries = require('../controllers/countries');

router
.get("/",countries.getAll)
.get('/create',countries.getCreate)
.get('/:id', countries.update)
.post("/",countries.postCreate)
.post("/:id",countries.patch)
module.exports=router;