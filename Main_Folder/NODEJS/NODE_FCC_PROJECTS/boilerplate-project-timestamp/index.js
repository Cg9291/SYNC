import http from "http";
import call1 from "./calls/call.js";

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

	if (req.method==="POST" && req.url === "/api/:date?") {
		let body = "";
		req
			.on("data", chunk => {
				body+=chunk;
			})
			req.on("end", () => {
                 console.log(body);
				/* body = Buffer.concat(body).toString(); */

				res.writeHead(200, {
					"Content-type": "application/json",
				});
				res.end(JSON.stringify({ data: body }));
				//body = body.toString();
				//console.log(body.toString());
			});

		/* res.writeHead(200).on("finish", () => {
			console.log(body);
		}); */
	} else if (req.method === "GET" && req.url === "/api/:date?") {
		res
			res.writeHead(200, {
					"Content-type": "application/json",
				});
				res.end(JSON.stringify({ data: body }));
	}
});

server.listen(3000, () => {
	console.log("Server is listening");
});
