import https from "https";

export const myApiCall = () => {
	let url = "https://run.mocky.io/v3/ce160a84-83a8-45cf-9cf7-755d61acef54";

	https.get(url, res => {
		let data = "";

		res
			.on("error", err => {
				console.log(err);
			})
			.on("data", chunk => {
				data += chunk;
			})
			.on("end", () => console.log(data));
	});
};

myApiCall();
