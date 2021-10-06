const mongoose= require("mongoose");

const countrySchema = mongoose.Schema({
    name: String,
    capital: String,
    population: Number
});
module.exports= mongoose.model('Country', countrySchema);