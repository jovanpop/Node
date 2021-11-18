const mongoose= require("mongoose");

const countrySchema = mongoose.Schema({
    name: String,
    capital: String,
    population: Number,
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'car'
    }
});
module.exports= mongoose.model('country', countrySchema);