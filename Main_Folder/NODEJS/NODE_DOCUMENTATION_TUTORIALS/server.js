import http from "http";
import { myRq } from "./Calls/echo_call.js";
//import { myApiCall } from "./Calls/lucas_api_call.js";

var body = [];

const server = http.createServer((req, res) => {
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
			.on("data", chunk => {
				body.push(chunk);
				//req.pipe(res);
			})
			.on("end", () => {
				body = Buffer.concat(body).toString();
				//console.log(body);
				res.end(body);
			});

		res
			.writeHead(200, { "Content-Type": "application/javascript" })
			.on("finish", () => {
				console.log(body);
			});
	} else if (req.method === "GET" && req.url === "/echo") {
		//console.log(body);
		res.end(body);
	} else {
		res.end("Welcome to my server boss");
	}
});

server.listen(3000, () => {
	console.log("Server is operational");
});
