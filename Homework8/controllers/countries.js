const Country = require ("../models/country");
const Car= require("../models/car");

module.exports = {
    getAll: async (req,res)=>{
        const countries = await Country.find().populate('car');
        res.render('./countries/countries',{countries: countries});
    },
    getCreate: async(req,res)=>{
        const cars = await Car.find();
        res.render('./countries/create', {cars: cars});
    },
    postCreate: async (req,res)=>{
        await Country.create(req.body);
        res.redirect('/countries');
    },
    getUpdate: async (req,res)=>{
        const countries= await Country.findById(req.params.id).populate("car");
        const cars = await Car.find();
        res.render('./countries/update', {countries: countries, cars: cars})
    },
    postUpdate: async (req,res)=>{
        await Country.findByIdAndUpdate(req.params.id,req.body);
        res.redirect("/countries");
    }
}