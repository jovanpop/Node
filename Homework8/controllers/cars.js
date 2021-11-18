const Car = require ('../models/car');
const Country = require('../models/country');

module.exports = {
    getAll: async (req, res)=>{
        const cars = await Car.find().populate("country");
        res.render('./cars/cars',{cars: cars });
    },
    getCreate: async(req,res)=>{
        const countries = await Country.find();
        const cars = await Car.find();
        res.render('./cars/create', {countries: countries, cars: cars});
    },
    postCreate: async (req,res)=>{
        await Car.create(req.body);
        res.redirect('/cars');
    },
    getUpdate: async (req,res)=>{
        const cars = await Car.findById(req.params.id).populate('country');
        const countries = await Country.find();
        res.render('./cars/update',{cars: cars , countries: countries});
    },
    postUpdate: async (req,res)=>{
        await Car.findByIdAndUpdate(req.params.id,req.body);
        res.redirect('/cars');
    }
}