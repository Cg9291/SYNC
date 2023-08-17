import http from "http";
import fs from "fs";
import { postToServer } from "./Calls/echo_call.js";
//import html from "./index.html"
//import { getApiServerData } from "./Calls/lucas_api_call.js";

/* var body = "Welcome to the echo endpoint";
export let avar;

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
		body = [];
		req
			.on("data", chunk => {
				body.push(chunk);
				req.pipe(res);
			})
			.on("end", () => {
				body = Buffer.concat(body).toString();
				//console.log(body);
				res.end();
			});

		res
			.writeHead(200, { "Content-Type": "application/javascript" })
			.on("finish", () => {
				//console.log(res);
			});
	} else if (req.method === "GET" && req.url === "/echo") {
		//console.log(body);
		res.end(body);
	} else {
		fs.readFile("./index.html", (err, data) => {
			if (err) {
				console.log(err);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			}
		});
	}
});

server.listen(3000, () => {
	console.log("Server is operational", http.METHODS);
});
 */


http
	.createServer((request, response) => {
		request.on("error", err => {
			console.error(`error is ${err}`);
			response.statusCode = 400;
			response.end();
		});
		response.on("error", err => {
			console.error(err);
		});
		if (request.method === "POST" && request.url === "/echo") {
			request.pipe(response);
		} else {
			response.statusCode = 404;
			response.end(response);
		}
	})
	.listen(3000,()=>{console.log("hey")});
