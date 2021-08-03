const mongoose = require('mongoose');


const covidSchema = new mongoose.Schema({
    sur: {
        type: String,
        trim: true,
        required: "Please provide first name",
    },
    given:{
        type: String,
        required: "Please provide last name",
        trim: true,
    },
    residence: {
        type: String,
        trim: true,
    },
    dob: {
        type: Date,
        
        
    },
    occupation:{
        type: String,
        required: "Please provide last name",
        trim: true,
    },
    nationality:{
        type: String,
        required: "Please provide last name",
        trim: true,
    },
    
    select:{
        type: String,
        trim: true,
    },
});


module.exports = mongoose.model('Covid', covidSchema);