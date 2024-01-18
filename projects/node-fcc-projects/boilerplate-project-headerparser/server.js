import http from "http";
import url from "url";

http
	.createServer((req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		res.setHeader("Access-Control-Allow-Headers", "Content-Type");

		let myResObj = {};

		req.on("error", err => {
			console.log(err);
		});

		res.on("error", err => {
			console.log(err);
		});

		if (req.url === "/api/whoami") {
			myResObj.ipaddress = req.headers.host;
			myResObj.language = req.headers["accept-language"];
			myResObj.software = req.headers["user-agent"];
			res.writeHead(200, { "Content-type": "application/json" });
			res.end(JSON.stringify(myResObj));
			console.log(req.headers);
		} else {
			//res.writeHead(200, { "Content-type": "plain/text" });
			res.writeHead(200, { "Content-type": "text/plain" });
			res.end("Welcome to the root");
		}
	})
	.listen(3000, () => {
		console.log("Server is listening");
	});
