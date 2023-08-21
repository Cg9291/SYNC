import http from "http";
import url from "url";
import fs from "fs";

import postUrl from "./post_Call.js";
import { error } from "console";

let myResObj = {};
let myJsonResponse;
let body = [];

const server = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	req.on("error", err => {
		console.log(err);
	});
	res.on("error", err => {
		console.log(err);
	});

	const parsedURL = url.parse(req.url, true);
	const pathSegments = parsedURL.pathname.split("/");

	/* let fn = shortUrl => {
		if (shortUrl == myResObj["short_url"]) {
			console.log("found");
		}
	}; */

	let routesIndex = {
		isRouteRoot: () =>
			/*  /"" */
			pathSegments[0] === "" &&
			pathSegments[1] === "" &&
			pathSegments.length === 2,

		isRouteShortUrl: () =>
			pathSegments[0] === "" &&
			pathSegments[1] === "api" &&
			pathSegments[2] === "shorturl" &&
			pathSegments[3] &&
			pathSegments.length === 4,
	};

	if (req.method === "GET") {
		/* 	console.log("AddressLookup:" + JSON.stringify(myAddressLookup)); */
		routesIndex.isRouteRoot() === true
			? (res.writeHead(200, { "Content-type": "text/plain" }),
			  //console.log(0),
			  res.end("Welcome to the root"))
			: routesIndex.isRouteShortUrl() === true
			? /* fn(pathSegments[3]),
			  console.log, */
			  (res.writeHead(200, { "Content-type": "application/json" }),
			  res.end(myJsonResponse))
			: (res.writeHead(404, { "Content-type": "text/plain" }),
			  res.end("This is not a valid endpoint"));
	} else if (req.method === "POST" && req.url === "/api/shorturl") {
		req
			.on("data", chunk => {
				body.push(chunk);
			})
			.on("end", () => {
				body = Buffer.concat(body).toString();
				myResObj.original_url = body;
				myResObj.short_url = Math.floor(Math.random() * (1000 - 1) + 1);
				myJsonResponse = JSON.stringify(myResObj);

				res.writeHead(200, {
					"Content-type": "application/json",
				});
				res.end(myJsonResponse);

				fs.readFile("./addressLookup.json", "utf8", (err, data) => {
					if (err) {
						console.log(error);
						return;
					}
					const arrayData = JSON.parse(data);
					/* 	myAddressLookup.push(myResObj); */

					arrayData.push(myJsonResponse);
					fs.writeFile(
						"./addressLookup.json",
						JSON.stringify(arrayData),
						"utf8",
						err => {
							if (err) {
								console.log(err);
								return;
							}
							console.log("success ");
						},
					);

					console.log(arrayData);
				});
				/*
				if (myAddressLookup.hasOwnProperty(body)) {
					res.writeHead(500, { "Content-type": "text/plain" });
					res.end("this address already exists in our databaswe");
				} else { */

				// console.log(myAddressLookup)
			});
	}
});

server.listen(3000, () => {
	console.log("Server is listening");
});
