let express=require("express");
let router=express.Router();
let countries=[];

router.get("/", (req,res)=>{
    res.render('./countries/countries',{countries: countries});
})
.get('/create',(req,res)=>{
    res.render('./countries/create',{countries: countries});
})
.post("/",(req,res)=>{
    countries.push(req.body);
    res.redirect('/countries');
});
module.exports=router;