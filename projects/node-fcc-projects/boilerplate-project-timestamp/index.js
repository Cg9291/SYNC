import http from "http";
import querystring from "querystring";
import url from "url";
//import call1 from "./calls/call.js";

let body = "";
//let date = new Date();
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

	const parsedUrl = url.parse(req.url, true);
	const pathSegments = parsedUrl.pathname.split("/");

	if (req.method === "POST" && req.url === "/api/") {
		req.on("data", chunk => {
			body += chunk;
		});
		req.on("end", () => {
			//console.log(body);
			/* body = Buffer.concat(body).toString(); */

			res.writeHead(200, {
				"Content-type": "application/json",
			});
			res
				.end
				//console.log(body.toString()) /* JSON.stringify({ data: body }) */,
				();
			//body = body.toString();
		});

		/* res.writeHead(200).on("finish", () => {
			console.log(body);
		}); */
	} else if (
		req.method === "GET" &&
		pathSegments[1] === "api" /* &&
		(Date.parse(pathSegments[2]) || 0 || new Date(Number(pathSegments[2]))) */
	) {
		const myResObj = {};
		//let unixFormatParam=Date.parse(pathSegments[2])
		//console.log(typeof(unixFormatParam))
		if (Date.parse(pathSegments[2]) || 0) {
			//console.log(1);
			res.writeHead(200, {
				"Content-type": "application/json",
			});
			myResObj.unix = Date.parse(pathSegments[2]);
			myResObj.utc = new Date(pathSegments[2]).toUTCString();
			res.end(JSON.stringify(myResObj));
		} else if (
			(new Date(Number(pathSegments[2])) &&
				!isNaN(Number(pathSegments[2])) &&
				pathSegments[2] !== "") ||
			0
		) {
			res.writeHead(200, {
				"Content-type": "application/json",
			});
			myResObj.unix = Number(pathSegments[2]);
			myResObj.utc = new Date(Number(pathSegments[2])).toUTCString();
			res.end(JSON.stringify(myResObj));
			//console.log(2, typeof Number(pathSegments[2]), Number(pathSegments[2]));
		} else if (
			(!Date.parse(pathSegments[2]) ||
				typeof Number(pathSegments[2]) !== "number") &&
			pathSegments[2]
		) {
			myResObj.error = "Invalid Date";
			res.writeHead(400, {
				"Content-type": "application/json",
			});
			res.end(JSON.stringify(myResObj));
			//console.log(3, pathSegments[2] === false);
		} else if (!pathSegments[2]) {
			res.writeHead(200, {
				"Content-type": "application/json",
			});
			myResObj.unix = Date.now();
			myResObj.utc = Date.now();
			res.end(JSON.stringify(myResObj));
			//console.log(4);
		}
	} else {
		res.writeHead(200, { "Content-type": "text/plain" });
		res.end("Welcome to the root");
	}
});

server.listen(3000, () => {
	console.log("Server is listening");
});
