let express=require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path=require("path");
const bodyParser = require('body-parser');
const fs=require('fs');
//import { myObj } from '../client/src/components/Inputs';
//import { jsonObj } from '../client/src/components/Inputs';

//LIVERELOAD SETUP
const liveReloadServer = livereload.createServer();
let App=express();
let PORT=process.env.PORT || 3001;
let data;
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
  res.send(req.body)
  fs.appendFile("Main_Folder/MY_PROJECTS/form_Api_Node/server/apiData.json",req.body)
})


App.get('/api',(req,res)=>{
    res.sendFile(__dirname+'/apiData.json')
})



App.listen(PORT,()=>{
    console.log(`We are live on port ${PORT}`)
})

console.log("here is"+path.join(__dirname ,"../client/build","index.html"))