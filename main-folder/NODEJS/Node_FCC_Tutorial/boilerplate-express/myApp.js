//MAKE SURE TO NEVER PUSH ENV FILE TO GITHUB, ADD IT TO GIT IGNORE LIST


//FCC Q# [Use the .env File]=>Biggest hurdle here was:
//1-not being able to access env vars unless in the root(programming folder//non project root)
//2- not being able to use comparison operator even able to access env vars through non project root
//3- had to read documentation to be able to add path in config up there
var livereload = require("livereload");
//TO PARSE POST REQUEST USING A BODYPARSER 1/2
let bodyParser = require("body-parser");
var connectLiveReload = require("connect-livereload");

let express = require("express");
const {json} = require("body-parser");
let app = express();
require("dotenv").config();

console.log("Hello World");

//TO PARSE POST REQUEST USING A BODYPARSER 2/2 + MIDDLEWARE TO PARSE URL ENCODED DATA(FOR POST REQUESTS MOSTLY ..IE /MYPATH?MYPROP=MYVAL&MYPROP2=MYVAL2)
app.use(bodyParser.urlencoded({extended: false}));

// TO SERVE STATIC ASSETS/FILES 1/2
app.use("/public", express.static(__dirname + "/public"));

//TO CREATE A REQUEST LOGGER MIDDLEWARE
app.use((req, res, next) => {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});

//TO CHAIN A MIDDLEWARE AND CREATE TIME SERVER
app.get(
	"/now",
	(req, res, next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res) => {
		res.json({time: req.time});
	}
);

//TO GET SPECIFIC REQUEST INFORMATION FROM CLIENT USING ROUTE PARAMETERS(/MYPATH/MYPROP/:MYVAL)
app.get("/:word/echo", (req, res) => {
	res.json({echo: req.params.word});
});


//TO GET SPECIFIC REQUEST INFORMATION FROM CLIENT USING QUERY PARAMETERS(/MYPATH?MYPROP=MYVAL&MYPROP2=MYVAL2)
app.get("/name", (req, res) => {
	res.json({name:`${req.query.first} ${req.query.last}`});
});

//TO POST DATA TO API & HAVE IT DISPLAYED(FORM & JSON..SEE INDEX.HTML FILE FOR POSTING METHOD)
app.post("/name",(req,res)=>{
    res.json({name:`${req.body.first} ${req.body.last}`});
})

/* // TO SERVE STRINGS
app.get("/",function(req,res){
    res.send('Hello Express');
}) */

/* // TO SERVE FILES
 app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
}) */

// TO SERVE STATIC ASSETS/FILES 2/2

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

// TO SERVE JSON AND ACCESS .ENV FILES
app.get("/json", (req, res) => {
	if (process.env.MESSAGE_STYLE == "uppercase") {
		res.json({message: "Hello json".toUpperCase()});
	} else {
		res.json({message: "Hello json"});
	}
});

//OLD
/* const players={
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
 */

/* app.use((req,res,next)=>{//could not submit,works it terminal but not when submitted on fcc, found multiple posts pointing to error on their end..will follow up
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
  }) */
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
