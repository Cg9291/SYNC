let express=require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path=require("path");

const liveReloadServer = livereload.createServer();
let App=express();
let PORT=process.env.PORT || 3000;

liveReloadServer.watch(path.join(__dirname,));
App.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

App.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname ,"index.html" ));
}).listen(PORT,()=>{
    console.log(`We are live on port ${PORT}`)
})

console.log(__dirname)