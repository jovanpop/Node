const express=require("express");
const app=express();
let countries=[];
app.use(express.json());
app.post("/countries", (req,res)=>{
    countries.push(req.body);
    res.send(countries);
});
app.delete("/countries/:id",(req,res)=>{
    for (let i=0;i<countries.length;i++){
        if (countries[i].id == req.params.id){
            countries.splice(i,1);
        }
    };
    res.send(countries);
});
app.get ("/countries",(req,res)=>{
    res.send(countries);
});
app.patch("/countries/:id", (req,res)=>{
    countries.forEach(country=> {
        if (country.id == req.params.id) {
          if (req.body.name) {
            country.name = req.body.name;
          }
          if (req.body.lang) {
            country.lang = req.body.lang;
          }
        }
      });
    res.send(countries);
});
app.put("/countries/:id", (req,res)=>{
    for (let i=0;i<countries.length;i++){
        if (countries[i].id == req.params.id){
            countries[i]=req.body;
        }
    };
    // for (let i=0;i<countries.length;i++){
    //     if (i+1 == req.params.id){
    //         countries[i]=req.body;
    //     }
    // } // Vtor nacin (so pishuvanje vo rutata koj chlen od nizata da se zameni).
    res.send (countries);
});
app.listen("3000");