//node demo_fileserver.js
//BELOW IS THE CODE FROM THE W3 EXAMPLE

var http = require('http');//ASSIGNS THE MODULE TO THE VAR 
var url = require('url');//""
var fs = require('fs');//""

http.createServer(function (req, res) {//CALLS HTTP MODULE,APPLIES CREATESERVER METHOD TO IT,THE METHOD IS PASSED A REQUESTLISTENER() FUNCTION (FUNCTION THAT SPECIFIES WHAT TO DO WHEN SERVER GETS A REQUEST..HANDLES REQUEST FROM USER & RESPONSE BACK TO USER),AND THAT REQUESTLISTENER FUNCTION HAS TWO ARGUMENTS(REQ AKA INCOMING MESSAGE OBJECT(NEEDS TO BE PRESENT IN ARG BUT CAN BE UNUSED AFTER THAT):HANDLES THE REQUEST THE CLIENT MAKES FROM THE SERVER..USUALLY ASKS TO RETURN SOMETHING) & (RES AKA SERVER RESPONSE OBJECT:WHICH HAS METHODS FOR HANDLING THE RESPONSE STREAM BACK TO THE OBJECT..EX WRITE,WRITEHEADETC..)-----
//

  var q = url.parse(req.url, true);//q variable is assigned a method that returns the requested url
  
  var filename = "." + q.pathname;//filename variable is assigned a value of the requested url's pathname preceeded by a "."
  fs.readFile("summer.html", function(err, data) {//CALL FILESYSTEM MODULE,APPLIES READFILE METHOD TO IT WITH ARGS (NAME/PATH OF FILE TO BE READ,)
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});//**LOOKS LIKE WRITEHEAD CONTAINS INFO/META TO BE PASSED TO BROWSER (STATUS & TYPE OF DOCUMENT TO DISPLAY)
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    return res.end(data);
  });
}).listen(8080);//MAKES THE HTTP SERVER(CREATED ABOVE) LISTEN TO PORTS ON THE COMPUTER..IN THIS CASE #8080


//BELOW IS THE CODE THAT I CAME UP WITH ON MY OWN....IT WORKED TO DISPLAY THE PAGE BUT DID NOT INCLUDE HANDLING OF ERROR NOR THE URL MODULE
/*


var http= require("http");
var fs=require("fs");
var file="summer.html";

http.createServer(function(req,res){
    fs.readFile(file,function(err,data){
        res.write(data);
        res.end();
    })
}).listen(8080);*/

//node demo_fileserver.js