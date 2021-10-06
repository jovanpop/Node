const Country = require ("../models/country");
module.exports = {
    getAll: async (req,res)=>{
        const countries = await Country.find();
        res.render('./countries/countries',{countries: countries});
    },
    getCreate: (req,res)=>{
        res.render('./countries/create');
    },
    postCreate: async (req,res)=>{
        await Country.create(req.body);
        res.redirect('/countries');
    },
    update: async (req,res)=>{
        const country= await Country.findById(req.params.id);
        res.render('./countries/update', {country: country})
    },
    patch: async (req,res)=>{
        await Country.findByIdAndUpdate(req.params.id,req.body);
        res.redirect("/countries");
    }
}