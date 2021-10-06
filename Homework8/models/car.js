const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number
});

module.exports = mongoose.model('Car', carSchema)