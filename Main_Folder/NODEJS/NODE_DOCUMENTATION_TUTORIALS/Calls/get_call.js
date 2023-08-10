import http from 'http';

let url="http://localhost:3000/please";

let getRequest=http.request(url,(res)=>{
    console.log(res)
})

getRequest.on("error", err => console.log(err));
