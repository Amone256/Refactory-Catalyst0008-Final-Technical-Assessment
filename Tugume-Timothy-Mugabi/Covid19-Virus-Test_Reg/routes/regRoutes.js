//Imports the Express Module into Our Project
const express= require("express")
//It allows us to use the Express Router Functionality.
const router=express.Router()
const Patient=require('..Patient')
//const Patient=require('/../../../Tugume-Timothy-Mugabi/models/Patient')
//Renders the Register worker Page
router.get("/",(req,res)=>{
    res.render('main')
})
router.post("/", async (req,res)=>{
    try{
        const patient = new Patient(req.body);
        console.log(req.body)
        patient.save()
        res.redirect('main')
        //res.redirect("main?alert=success")
    }catch(err){
       //res.status(400).render("main?alert=error",{alert:req.query.alert})
    }
     
})




//Exports the Router as a module.
module.exports=router;