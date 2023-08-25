import { error } from "console";
import http from "http";
import path from "path";
import url from "url";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

import { routesIndex } from "./objects/routesIndex.js";

const server = http.createServer((req, res) => {
	//CORS
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	req.on("error", err => {
		console.log(err);
	});
	res.on("error", err => {
		console.log(err);
	});

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const parsedURL = url.parse(req.url, true);
	const pathSegments = parsedURL.pathname.split("/");

	if (req.method === "GET") {
		if (routesIndex.rootEndpoint(pathSegments) === true) {
			fs.readFile(
				path.join(__dirname, "./views/index.html"),
				"utf-8",
				(err, data) => {
					if (err) {
						console.log(err);
						return;
					} else {
						res.writeHead(200, { "Content-Type": "text/html" });
						res.end(data);
					}
				},
			);
		}
	} else if (req.method === "POST") {
		let body = "";
		if (routesIndex.usersEndpoint === true) {
			req.on("data", chunk => {
				body += chunk;
			});
			req.on("finish", () => {
				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(JSON.stringify({ newUser: body }));
			});
		}
	}
});

server.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
