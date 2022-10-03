let express=require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path=require("path");
const bodyParser = require('body-parser');
const fs=require('fs');
const apiData=require('./apiData.json');

let apiData2=apiData.slice();
//import { myObj } from '../client/src/components/Inputs';
//import { jsonObj } from '../client/src/components/Inputs';

//LIVERELOAD SETUP
const liveReloadServer = livereload.createServer();
let App=express();
let PORT=process.env.PORT || 3001;
let data=require("./apiData.json");
liveReloadServer.watch(path.join(__dirname,"../client/build"));
App.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  
//ROUTES
App.use(express.urlencoded({extended: false}))
App.use(express.json())
App.use(express.static(path.join(__dirname,"..","client","build")));

/*App.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname ,"..","client","build","index.html"));
})*/

App.post('/',(req,res)=>{
  res.send(req.body);
  apiData2=[...apiData2,req.body]
  fs.writeFile(__dirname+"/apiData.json",JSON.stringify(apiData2),function (err) {
  if (err) throw err;
  console.log('Saved!',apiData2);
});
console.log(apiData)
  App.get('/api',(req,res)=>{
    res.sendFile(__dirname+"/apiData.json")
  })
})


/*App.get('/api',(req,res)=>{
    res.sendFile(__dirname+'/apiData.json')
})*/



App.listen(PORT,()=>{
    console.log(`We are live on port ${PORT}`)
})

console.log("here is"+path.join(__dirname ,"../client/build","index.html"))