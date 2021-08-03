//Modules Imported
const express =require("express")
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

//ROUTES
const regRoutes=require("./routes/regRoutes")


//Instantaites the app(child)Object from the Express Module(parent)
const app=express()

//Mongoose Connection Function
mongoose.connect('mongodb://localhost:27017/Patients', {useNewUrlParser: true, useUnifiedTopology: true});


// //Mongoose Connection Checker
mongoose.connection
.on('open', () => {
  console.log('Mongoose connection open');
})
.on('error', (err) => {
  console.log(`Connection error: ${err.message}`);
});

//Makes the Files in the views Folder static
app.use(express.static(__dirname+"/views"))

//Makes the Files in the public Folder static
app.use(express.static(path.join(__dirname, 'public')));

//Sets the view Engine to pug
app.set("view engine","pug")
//Sets the view to files in the views folder
app.set("views","./views")




//MiddleWare Routes
app.use("/",regRoutes)

//Not found Route , that is executed when the Route is not Found
app.get("*",(req,res)=>{
  res.status(404).send("This is an Invalid URL")
})

//Creates the server, which listens for GET requests from our Browser 
app.listen(3000,()=>{
    console.log(" We are Listening on Port 3000")
})