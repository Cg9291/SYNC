var request = require("request");
var fs = require("fs");
var myJson = require("./apiResponse.json");

request(
	" https://dog.ceo/api/breeds/list/all",
	function (error, response, body) {
		if (!error && response.statusCode == 200) {
			fs.writeFile(
				__dirname + "/apiResponse.json",
				body,
				function (err) {
					if (err) throw err;
					console.log("saved");
				} // Print the google web page.
			);
		} else {
			console.log("error", response.statusCode);
		}
	}
);
console.log(myJson.message.hound)
