import http from "http";
import url from "url";
import fs from "fs";

import postUrl from "./requests/post_Call.js";
import { checkUrlDuplicate } from "./functions/checkUrlDuplicate.js";
import { error } from "console";

import { routesIndex } from "./objects/routesIndex.js";

const myResObj = {};
let myJsonResponse;
let body = [];

const server = http.createServer((req, res) => {
	//CORS
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	//ERRORS HANDLERS
	req.on("error", err => {
		console.log(err);
	});
	res.on("error", err => {
		console.log(err);
	});

	//SERVER LOGIC
	const parsedURL = url.parse(req.url, true);
	const pathSegments = parsedURL.pathname.split("/");

	if (req.method === "GET") {
		/* 	console.log("AddressLookup:" + JSON.stringify(myAddressLookup)); */
		if (routesIndex.isRouteRoot(pathSegments) === true) {
			res.writeHead(200, { "Content-type": "text/plain" });
			res.end("Welcome to the root");
		} else if (routesIndex.isRouteShortUrl(pathSegments) === true) {
			res.writeHead(200, { "Content-type": "application/json" });
			res.end(myJsonResponse);
		} else {
			res.writeHead(404, { "Content-type": "text/plain" });
			res.end("This is not a valid endpoint");
		}
	} else if (req.method === "POST") {
		if (req.url === "/api/shorturl") {
			req
				.on("data", chunk => {
					body.push(chunk);
				})
				.on("end", () => {
					body = Buffer.concat(body).toString();
					//console.log("request body is:" + body);
					fs.readFile("./objects/addressLookup.json", "utf-8", (err, data) => {
						if (err) {
							console.log(err);
							return;
						} else {
							if (checkUrlDuplicate(data, body) === true) {
								return;
							} else {
								myResObj.original_url = body;
								myResObj.short_url = Math.floor(Math.random() * (1000 - 1) + 1);
								myJsonResponse = JSON.stringify(myResObj);

								res.writeHead(200, {
									"Content-type": "application/json",
								});
								res.end(myJsonResponse);
								const arrayData = JSON.parse(data);
								//console.log("parsed is" + arrayData);

								arrayData.push(myJsonResponse);
								fs.writeFile(
									"./objects/addressLookup.json",
									JSON.stringify(arrayData),
									"utf8",
									err => {
										if (err) {
											console.log(err);
											return;
										}
										//console.log("success ", arrayData);
									},
								);
							}
						}
					});
				});
		}
	}
});

server.listen(3000, () => {
	console.log("Server is listening");
	postUrl();
});

process.on("SIGINT", code => {
	fs.writeFileSync("./objects/addressLookup.json", "[]");
	console.log("out");
	process.exit(0);
});
