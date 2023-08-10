import http from "http";
import { myRq } from "./Calls/echo_call.js";
import bodyParser from "body-parser"
import { myApiCall } from "./Calls/lucas_api_call.js";



const server = http.createServer((req, res) => {
    let mybody=req.body;

	req.on("error", () => {
		console.log(err);
		res.statusCode = 400;
		res.end();
	});

	res.on("error", () => {
		console.log(err);
	});

	if (req.method === "POST" && req.url === "/echo") {

		req
			.on("data", () => {
                mybody=req.body;
				req.pipe(res);
			})
			.on("end", () => {
               // myEcho=res;
				res.end();
			});

		res
			.writeHead(200, { "Content-Type": "application/javascript" })
			.on("finish", () => {
				console.log(req);
			});
	}else if (req.method === "GET" && req.url === "/echo") {
		res.end(mybody);
	} else {
		//res.write()
		res.end("Welcome to my server boss");
	}
});

server.listen(3000, () => {
	console.log("Server is operational");
});

//myRq();
//myApiCall();
