let express=require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path=require("path");

const liveReloadServer = livereload.createServer();
let App=express();
let PORT=process.env.PORT || 3001;

liveReloadServer.watch(path.join(__dirname,"../client/build"));
App.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

App.use(express.static(path.join(__dirname,"..","client","build")));

App.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname ,"..","client","build","index.html"));
})

App.listen(PORT,()=>{
    console.log(`We are live on port ${PORT}`)
})

console.log("here is"+path.join(__dirname ,"../client/build","index.html"))