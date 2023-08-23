/* !!THIS IS A COPY OF MY WORKING SERVER.JS FILE,MODIFIED TO IMPLEMENT LIVERELOAD SERVER..ALTHOUGH LIVERELOAD COULD BE USED IN THE MAIN SERVER,I HAVE MADE THIS COPY TO AVOID CONFUSION ON CODE CHANGES WILL IM STILL LEARNING NODE */

import livereload from "livereload"; //imported to allow browser to reload & reflect changes automatically
import { fileURLToPath } from "url"; //imported because livereload requires __dirname which is not available here because i am using modules
import { dirname } from "path"; //imported because livereload requires __dirname which is not available here because i am using modules

import http from "http";
import { postToServer } from "./Calls/echo_call.js";
//import { getApiServerData } from "./Calls/lucas_api_call.js";

const __filename = fileURLToPath(import.meta.url); //see imports if you need to know why this is here
const __dirname = dirname(__filename); //see imports if you need to know why this is here

var body = "Welcome to the echo endpoint";

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
		res.end("Welcome to the server's roots");
	}
});

const livereloadServer = livereload.createServer();
livereloadServer.watch(__dirname);

server.listen(3000, () => {
	console.log("Server is operational", __dirname);
});
