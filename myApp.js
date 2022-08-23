//MAKE SURE TO NEVER PUSH ENV FILE TO GITHUB, ADD IT TO GIT IGNORE LIST
require('dotenv').config({path:'SYNC/JAVASCRIPT_CODE/NODEJS/Node FCC Tutorial/boilerplate-express/.env'});
//FCC Q# [Use the .env File]=>Biggest hurdle here was:
//1-not being able to access env vars unless in the root(programming folder//non project root)
//2- not being able to use comparison operator even able to access env vars through non project root
//3- had to read documentation to be able to add path in config up there
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

let express = require('express');
const { json } = require('body-parser');
let app = express();

app.use("/",(req,res,next)=>{//could not submit,works it terminal but not when submitted on fcc, found multiple posts pointing to error on their end..will follow up
    let string=`${req.method} ${req.path} - ${req.ip}`;
    console.log(string);
    next();
});


app.get("/",(req,res)=>{
    //res.send('Hello Expressians');  //
    res.sendFile(__dirname+'/views/index.html');
    app.use("/public",express.static(__dirname + '/public'));
})

app.get("/json",(req,res)=>{  
    if(process.env.MESSAGE_STYLE=="uppercase"){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message": "Hello json"})
    }
})

app.get("/now",(req,res,next)=>{
    req.time=new Date().toString();
    next();
},
    function(req,res){
        res.json({time:req.time});
    }
)



































 module.exports = app;
