let express=require("express");
let router=express.Router();
const cars=[];

router.get("/", (req,res)=>{
    res.render('cars',{cars: cars});
});
router.post("/",(req,res)=>{
    cars.push(req.body);
    res.redirect("/cars");
})
module.exports=router;