const express=require("express");
const app =express();
const users=[{id:1,username:"Johnny21"},{id:2,username:"Tommy32"},{id:8,username:"Ronny15"}];
app.use(express.json());
// app.use(express.text()); // text input with numbers for id.
app.get ("/users",(req,res)=>{
    res.send(users);
});
app.get ("/",(req,res)=>{
    res.send("App started on port 3002");
});
app.post ("/users",(req,res)=>{
    users.push(req.body);
    res.send(users);
});
app.delete('/users', (req, res) => {
    // if (req.body>0){users.splice((req.body)-1,1)}; // text input with numbers for id.
    // users.pop(); // last object of array.
    // users.shift(); // first object of array.
    for (let i=0;i< users.length;i++){
        if (users[i].id === req.body.id && users[i].username === req.body.username){
            users.splice(i,1)
        }
    }
    res.send(users);
});
app.listen("3002");