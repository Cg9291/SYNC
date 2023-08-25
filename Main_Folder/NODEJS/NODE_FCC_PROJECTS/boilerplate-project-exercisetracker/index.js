import { error } from "console";
import http from "http";
import path from "path";

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

	if (req.method === "GET") {
		if (req.url === "/") {

		}
	} else if (req.method === "POST") {
	}
});

server.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
