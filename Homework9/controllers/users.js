const User = require ('../models/users');

module.exports= {
    postUser: async(req,res)=>{  
        req.body.email= req.body.email.toLowerCase();
        const user = await User.create(req.body);
        res.send(user);
    },
    postLogIn: async(req,res)=>{
        if (await User.findOne({email: req.body.email.toLowerCase(), password: req.body.password})){
            res.send("Logged in");
        } else{
            res.send("Incorect pw or email");
        }
    }
}