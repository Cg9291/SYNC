//MAKE SURE TO NEVER PUSH ENV FILE TO GITHUB, ADD IT TO GIT IGNORE LIST
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

let express = require('express');
let app = express();
require('dotenv').config();



app.get("/",(req,res)=>{
    //res.send('Hello Expressians');  //
    res.sendFile(__dirname+'/views/index.html');
    app.use("/public",express.static(__dirname + '/public'));
})

app.get("/json",(req,res)=>{  
    if(JSON.stringify(process.env.MESSAGE_STYLE)===JSON.stringify('uppercase')){//not working
        res.json({"messages": "HELLO JSON"})
    }else{
        res.json({"message": "Hello json"})
    }
})

console.log(process.env.MESSAGE_STYLE)

































 module.exports = app;
