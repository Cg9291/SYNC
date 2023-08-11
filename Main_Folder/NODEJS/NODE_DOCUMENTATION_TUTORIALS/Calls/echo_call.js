import { write } from "fs";
import http from "http";

export let postToServer = () => {
	let myData = "What's going on in here?";

	let options = {
		hostname: "localhost",
		port: 3000,
		path: "/echo",
		method: "POST",
		headers: {
			"Content-Type": "application/javascript",
			"Content-Length": Buffer.byteLength(myData),
		},
	};

	let postRequest = http.request(options, res => {
		//console.log("the response from the server is:"+res);

	});

	postRequest.on("error", err => console.log(err));
	postRequest.write(myData);
	postRequest.end();
};

myRq();
