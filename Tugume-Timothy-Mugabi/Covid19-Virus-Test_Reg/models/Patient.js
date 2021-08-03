//Imports the mongoose module into our Project
const mongoose = require('mongoose');
//The Worker Schema which is the model for the data we save to the DataBase

const patientSchema = new mongoose.Schema({
  //The fullname is added to the Database via the fullname input.
  surnname: {
    type: String,
    trim: true,
  },
  givenname: {
    type: String,
    trim: true,
  },
  dob: {
    type:Date
  },
  occupation: {
    type: String,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },
  Gender:{
    type: String,
    trim: true,
  },
  category:{
    type: String,
    trim: true,
  }
  
});
//Exports the Washer Model as a module.
module.exports = mongoose.model('Patient', patientSchema);