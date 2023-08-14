import http from "http";
import fs from "fs";
import modifyHTML from "./utility_functions/modifyHTML.js";
import { rewriteHTML } from "./utility_functions/rewriteHTML.js";
import { postToServer } from "./Calls/echo_call.js";
//import { getApiServerData } from "./Calls/lucas_api_call.js";

var body = "Welcome to the echo endpoint";
var newHTML;
let myData;

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

		res.end(newHTML);
	} else {
		fs.readFile("./index.html", (err, data) => {
			if (err) {
				console.log(err);
			} else {
				newHTML = modifyHTML(data.toString(), body);
				myData = data.toString();
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(newHTML);
				//console.log(req.method)
			}
		});
	}
});

let mydatas=fs.readFile("./index.html", (err, data) => {
	if (err) {
		console.log(`reading error is ${err}`);
	} else {
		console.log(`!!!!!!!HERE IS ${data.toString()}`);
		return data.toString();
	}
})
	rewriteHTML("vamos","mydatas");

server.listen(3000, () => {
	console.log("Server is operational", http.METHODS);
});
