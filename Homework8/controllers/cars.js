const Car = require ('../models/car');

module.exports = {
    getAll: async (req, res)=>{
        const cars = await Car.find();
        res.render('./cars/cars',{cars: cars});
    },
    getCreate: (req,res)=>{
        res.render('./cars/create');
    },
    postCreate: async (req,res)=>{
        await Car.create(req.body);
        res.redirect('/cars');
    },
    update: async (req,res)=>{
        const car = await Car.findById(req.params.id);
        res.render('./cars/update',{car: car});
    },
    patch: async (req,res)=>{
        await Car.findByIdAndUpdate(req.params.id,req.body);
        res.redirect('/cars');
    }
}