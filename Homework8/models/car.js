const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    country: {
        type: mongoose.Types.ObjectId,
        ref: 'country'
    }
});

module.exports = mongoose.model('car', carSchema)