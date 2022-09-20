//MAKE SURE TO NEVER PUSH ENV FILE TO GITHUB, ADD IT TO GIT IGNORE LIST
require('dotenv').config({path:'SYNC/JAVASCRIPT_CODE/NODEJS/Node FCC Tutorial/boilerplate-express/.env'});
let bodyParser=require('body-parser');
//FCC Q# [Use the .env File]=>Biggest hurdle here was:
//1-not being able to access env vars unless in the root(programming folder//non project root)
//2- not being able to use comparison operator even able to access env vars through non project root
//3- had to read documentation to be able to add path in config up there
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

let express = require('express');
const { json } = require('body-parser');
let app = express();

console.log("Hello World");
const players={
    davis:{//0
        Lastname: "Davis",
        Firstname: "Anthony",
        Position: "PF",
        Jerseynumber:3,
        Height: 208},
    kuzma:{//1
        Lastname: "Kuzma",
        Firstname: "Kyle",
        Position: "PF",
        Jerseynumber: 0,
        Height:207},
    james:{//2
        Lastname:"James",
        Firstname:"Lebron",
        Position:"SF",
        Jerseynumber:23,
        Height:207},
    horton_tucker:{//3
        Lastname:"Horton Tucker",
        Firstname:"Talen",
        Position:"PG",
        Jerseynumber:99,
        Height:193},
    green:{//4
        Lastname:"Green",
        Firstname:"Danny",
        Position:"SG",
        Jerseynumber:"14",
        Height:198},
    cousins:{//5
        Lastname:"Cousins",
        Firstname:"Demarcus",
        Position:"C",
        Jerseynumber:99,
        Height:211},
    caldwell_pope:{//6
        Lastname:"Caldwell-Pope",
        Firstname:"Kentavious",
        Position:"SG",
        Jerseynumber:1,
        Height:196},
    mcgee:{//7
        Lastname:"Mcgee",
        Firstname:"Javale",
        Position:"C",
        Jerseynumber:"7",
        Height:213},
    cook:{//8
        Lastname:"Cook",
        Firstname:"Quinn",
        Position:"PG",
        Jerseynumber:2,
        Height:193},
    dudley:{//9
        Lastname:"Dudley",
        Firstname:"Jared",
        Position:"SF",
        Jerseynumber:10,
        Height:198}
};

app.use(bodyParser.urlencoded({extended: false}))

app.use((req,res,next)=>{//could not submit,works it terminal but not when submitted on fcc, found multiple posts pointing to error on their end..will follow up
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/now",(req,res,next)=>{
    req.time=new Date().toString();
    next();
},
    function(req,res){
        res.json({time:req.time});
    }
)

//personal example
app.get('/players/:name',(req,res)=>{
    res.json(players[req.params['name']])
})

app.get('/:word/echo',(req,res)=>{
    res.json({echo:req.params.word})
})

app.get("/name", function(req,res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    // OR you can destructure and rename the keys
   
    // Use template literals to form a formatted string
    res.json({
      name: `${firstName} ${lastName}`
    });
  });

  //personal example
  app.get("/players", function(req,res) {
   
    res.json({
      name: `${firstName} ${lastName}`
    });
  });

  app.post('/name',(req,res)=>{
    res.json({name:`${req.body.first} ${req.body.last}`})
  })

    

/*
app.post('/name',
    app.use(bodyParser.urlencoded({extended: false}
        ))
    )
*/

/*
//COPIED UP

app.use("/",(req,res,next)=>{//could not submit,works it terminal but not when submitted on fcc, found multiple posts pointing to error on their end..will follow up
    let string=`${req.method} ${req.path} - ${req.ip}`;
    console.log(string);
    next();
});


//COPIED UP
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

//COPIED UP
app.get("/now",(req,res,next)=>{
    req.time=new Date().toString();
    next();
},
    function(req,res){
        res.json({time:req.time});
    }
)
*/


































 module.exports = app;
