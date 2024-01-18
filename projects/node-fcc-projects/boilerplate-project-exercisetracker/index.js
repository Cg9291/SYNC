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
		if (req.url === "/public/style.css") {
			const filePath = path.join(__dirname, "./views/index.html");
			fs.readFile(filePath, "utf-8", (err, data) => {
				if (err) {
					console.log(err);
					return;
				} else {
					res.writeHead(200, { "Content-Type": "text/css" });
					res.end(data);
				}
			});
		} else if (routesIndex.rootEndpoint(pathSegments) === true) {
			/* if (request.url.match(/^\/css\//)) {
				var css = fs.readFileSync("./FirstApp/HtmlPages" + request.url);
				response.writeHead(200, { "Content-Type": "text/css" });
				response.write(css);
				response.end();
				return;
			} */

			const filePath = path.join(__dirname, "./views/index.html");
			fs.readFile(filePath, "utf-8", (err, content) => {
				if (err) {
					console.log(err);
					res.writeHead(500, { "Content-Type": "text/plain" });
					res.end("Internal server error");
				} else {
					res.writeHead(200, { "Content-Type": "text/html" });
					/* res.on("finish", err => {
						if (err) {
							console.log(err);
						}
					}); */
					res.end(content);
				}
			});
		} else if (routesIndex.usersEndpoint(pathSegments) === true) {
			const filePath = path.join(__dirname, "./objects/usersData.json");
			fs.readFile(filePath, "utf-8", (err, data) => {
				if (err) {
					console.log("Get users error is:" + err);
					return;
				} else {
					res.writeHead(200, { "Content-Type": "application/json" });
					res.end(data);
				}
			});
		} else if (routesIndex.logsEndpoint(pathSegments) === true) {
			const filePath = path.join(__dirname, "./objects/usersData.json");
			fs.readFile(filePath, "utf-8", (err, data) => {
				if (err) {
					console.log(err);
					return;
				} else {
					const parsedData = JSON.parse(data);
					
				}
			});
		}
	} else if (req.method === "POST") {
		if (req.url === "/api/users") {
			let body = "";
			req.on("data", chunk => {
				body += chunk;
			});
			req.on("end", () => {
				const filePath = path.join(__dirname, "./objects/usersData.json");
				fs.readFile(filePath, "utf-8", (err, data) => {
					console.log("Data received");
					if (err) {
						console.log(err);
						return;
					} else {
						const parsedData = JSON.parse(data);
						body = body.replace("username=", "");
						const newUser = {
							username: body,
							_id: Math.floor(Math.random() * (4000 - 1000) + 1000),
						};
						parsedData.push(newUser);
						fs.writeFile(filePath, JSON.stringify(parsedData), err => {
							if (err) {
								console.log(err);
							} else {
								console.log("userData has successfully been updated!");
							}
						});
						res.writeHead(200, { "Content-Type": "application/json" });
						res.end(JSON.stringify(newUser));
					}
				});
			});
		} else if (routesIndex.exercisesEndpoint(pathSegments) === true) {
			/* res.writeHead(200, { "Content-Type": "text/plain" });
			res.end("ff"); */
			let body = "";
			const filePath = path.join(__dirname, "./objects/usersData.json");

			req
				.on("data", chunk => {
					body += chunk;
				})
				.on("end", () => {
					const requestedUserId = JSON.parse(pathSegments[3]);
					fs.readFile(filePath, "utf-8", (err, data) => {
						if (err) {
							console.log("reading error" + err);
							return;
						} else {
							let parsedData = JSON.parse(data);
							let jsonRes;
							for (let obj of parsedData) {
								if (obj._id === requestedUserId) {
									body = body.split("&").map(x => x.toString().split("="));
									if (body[3][1] === "") {
										body[3][1] = new Date().toDateString();
									}
									//console.log(obj, decodeURIComponent(body[1][1]));
									obj[body[1][0]] = body[1][1];
									obj[body[2][0]] = body[2][1];
									obj[body[3][0]] = body[3][1];
									jsonRes = JSON.stringify(obj);
									fs.writeFile(filePath, JSON.stringify(parsedData), err => {
										console.log(err);
									});
									break;
								} else {
									console.log("doesnt match any object");
								}
							}

							res.writeHead(200, { "Content-Type": "application/json" });
							res.end(jsonRes);
						}
					});
				});
		}
	}
});

server.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
