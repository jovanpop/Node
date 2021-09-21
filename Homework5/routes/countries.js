let express=require("express");
let router=express.Router();

router.get("/", (req,res)=>{
    res.render('countries',{countries: [{name:"USA",city: "Washington",population: 300},{name:"Macedonia",city:"Skopje",population:2},{name:"Germany",city:"Berlin",population:80}]});
});
module.exports=router;