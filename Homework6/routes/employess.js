let express=require("express");
let router=express.Router();
const employess=[];

router.get("/", (req,res)=>{
    res.render('employess',{employess: employess});
});
router.post("/",(req,res)=>{
    employess.push(req.body);
    res.redirect("/employess");
})
module.exports=router;