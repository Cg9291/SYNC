import http from "http";
import url from "url";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import postUrl from "./requests/post_Call.js";
import { checkUrlDuplicate } from "./functions/checkUrlDuplicate.js";
import { makeRawDataItterable } from "./functions/makeRawDataItterable.js";
import { error } from "console";

import { routesIndex } from "./objects/routesIndex.js";
import { match } from "assert";

const myResObj = {};
let myJsonResponse;

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
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const parsedURL = url.parse(req.url, true);
	const pathSegments = parsedURL.pathname.split("/");

	if (req.method === "GET") {
		if (routesIndex.isRouteRoot(pathSegments) === true) {
			const filePath = path.join(__dirname, "./views/index.html");
			fs.readFile(filePath, "utf-8", (err, content) => {
				if (err) {
					console.log(err);
					res.writeHead(500, { "Content-Type": "text/plain" });
					res.end("Internal server error");
				} else {
					res.writeHead(200, { "Content-Type": "text/html" });
					res.end(content);
				}
			});
			/* 	res.writeHead(200, { "Content-type": "text/plain" });
			res.end("Welcome to the root"); */
		} else if (routesIndex.isRouteShortUrl(pathSegments) === true) {
			const filePath = path.join(__dirname, "./objects/addressLookup.json");
			fs.readFile(filePath, "utf-8", (err, data) => {
				if (err) {
					console.log(err);
					res.writeHead(500, { "Content-Type": "text/plain" });
					res.end("Internal server error");
				} else {
					const matchingObj = makeRawDataItterable(data).filter(
						jsObj => jsObj.short_url == pathSegments[3],
					);

					const redirectedUrl = matchingObj[0].original_url
						.toString()
						.replace("%3A%2F%2F", "://");

					console.log(redirectedUrl);

					res.writeHead(302, {
						Location: redirectedUrl,
						"Content-type": "application/json",
					});
					res.end();

					/* console.log(
						"data is " + data + "and then " + makeRawDataItterable(data),
					); */
				}
			});
		} else {
			res.writeHead(404, { "Content-type": "text/plain" });
			res.end("This is not a valid endpoint");
		}
	} else if (req.method === "POST") {
		let body = "";
		if (req.url === "/api/shorturl") {
			req
				.on("data", chunk => {
					body += chunk;
				})
				.on("end", () => {
					/* body = Buffer.concat(body).toString(); */
					body = JSON.stringify(body).slice(5, body.length + 1);
					console.log(body);

					fs.readFile("./objects/addressLookup.json", "utf-8", (err, data) => {
						if (err) {
							console.log(err);
							return;
						} else {
							if (checkUrlDuplicate(makeRawDataItterable,data, body) === true) {
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
	//postUrl();
});

process.on("SIGINT", code => {
	fs.writeFileSync("./objects/addressLookup.json", "[]");
	console.log("..........Server has been terminated");
	process.exit(0);
});

