import http from "http";

export default function call1() {
	let data = new Date().toString();

	let options = {
		hostname: "localhost",
		port: 3000,
		path: "/api/:date?",
		method: "POST",
		headers: {
			"Content-Type": "application/javascript",
		},
	};

	let myReq = http.request(options, res => {});

	myReq.on("error", err => {
		console.log("Request error:" + err);
	});

	myReq.on("finish", () => {
		console.log("Transmitted"/* ,new Date(data).getTime() */);
	});

	myReq.write(data);
	myReq.end();
}

call1();

/* module.exports = {
	call1,
}; */
