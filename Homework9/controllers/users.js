const User = require ('../models/users');
const bcrypt= require ('bcryptjs');
const jwt= require('jsonwebtoken');

module.exports= {
    postUser: async(req,res)=>{  
        try {
            let user = await User.findOne({email: req.body.email.toLowerCase()});
            if (user){
                throw new Error ("This email is taken");
            };
            req.body.email= req.body.email.toLowerCase();
            req.body.password = bcrypt.hashSync(req.body.password);
            user = await User.create(req.body);
            res.send({
                error: false,
                message: "Created",
                user: user
            })
        } 
        catch(error){
            res.send({
                error: true,
                message: error.message
            })
        };
    },
    postLogIn: async(req,res)=>{
        try {
            user = await User.findOne({email: req.body.email.toLowerCase()});
            if (user && bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    id: user._id,
                    email: user.email
                }
                const token = jwt.sign(payload,"asd",{expiresIn: "10s"})
                res.send({
                    error: false,
                    message: "Logged in",
                    token: token
                })
            }else{
                throw new Error("Invalid credentials");
            }
        }
        catch (error){
            res.send({
                error: true,
                message: error.message
            })
            };
        }
    }