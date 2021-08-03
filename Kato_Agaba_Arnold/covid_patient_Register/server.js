//importing of dependencies
const express= require ('express');
const mongoose= require('mongoose');
const path = require('path');
const Covid= require('./models/Covid');
require('dotenv/config');




//instantions that enable us to use our imported dependencies

const app = express();

//use the connect method of mongoose to help us connect to the mongodb database
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true,
     useUnifiedTopology: true});

//when connection happens log the message below
mongoose.connection
.on('open',()=>{
  console.log('Mongoose connection open')
});
mongoose.connection
.on('error',(err)=>{
  console.log(`Connection error: ${err.message}`)
});

//configurations 
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(path.join(__dirname,'public')));

//middleware
app.use(express.urlencoded({extended: true}));




    

//routes
 
 app.get('/', (req,res) => {
  res.render('covid')
}); 
app.post('/',async(req,res)=>{
    
    try{

    let data = req.body
     


    const covid= new Covid(data);
    await covid.save()
    res.redirect('covid?alert=success')
    }
    catch (err) {
       res.status(400).render('covid',{title:"Covid", alert:"error"}) 
      console.log(err)}
    });


// error message
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.')
});


// start server
app.listen(3200, ()=> {console.log('Example app listening on port 3200!')});

