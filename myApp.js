let express = require('express');
let app = express();
require("dotenv").config();
//console.log(__dirname + "/views/index.html");

// TO SERVE STATIC ASSETS/FILES 1/2
 app.use('/public',express.static(__dirname+'/public'));

 //TO CREATE A REQUEST LOGGER MIDDLEWARE
 app.use( (req, res, next) => {
		console.log(`${req.method} ${req.path} - ${req.ip}`);
		next();
 });

/* // TO SERVE STRINGS
app.get("/",function(req,res){
    res.send('Hello Express');
}) */

/* // TO SERVE FILES
 app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
}) */

// TO SERVE STATIC ASSETS/FILES 2/2

 app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

// TO SERVE JSON AND ACCESS .ENV FILES
app.get('/json',(req,res)=>{
    if (process.env.MESSAGE_STYLE=="uppercase"){
         res.json({message: "Hello json".toUpperCase()});
    }else{
        res.json({message: "Hello json"});
    }
})
































 module.exports = app;
