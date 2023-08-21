import http from "http";

export default function postUrl() {
	let options = {
		hostname: "localhost",
		port: 3000,
		path: "/api/shorturl",
		method: "POST",
		headers: { "Content-Type": "text/plain" },
	};
	let myReq = http.request(options, (res) => {});
	myReq.on("error", err => {
		console.log(err);
	});
	myReq.on("finish", () => {
		console.log("Data has been transmitted");
	});
    myReq.end("https://www.google.com/");

}


postUrl();
