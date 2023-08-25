import http from "http";

export default function userPostRequest() {
	const options = {
		hostname: "localhost",
		port: 3000,
		method: "POST",
		headers: { "Content-Type": "text/plain" },
	};

	let myReq = http.request(options, res => {});

	myReq.on("error", err => {
		console.log(err);
	});
	myReq.on("finish", () => {
		console.log("User Id has been transmitted");
	});

	myReq.end();
}
