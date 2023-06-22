//this wont happen as the free twitter api wont allow these functions, and the basic api that could help is $100/month
require("dotenv").config({path: "Main_Folder/MY_PROJECTS/twitter_clone/.env"});

var request = require("request");
var fs = require("fs");
var myJson = require("./apiResponse.json");

let oauthSignatureMethod = "HMAC-SHA1";
let oauthVersion = "1.0";
let oauthNonce = Date.now(); //generates timestamp in milliseconds
let oauthTimeStamp = Math.floor(Date.now()/1000);//generates timestamp in seconds
let url =
	"https://publish.twitter.com/oembed?url=https://twitter.com/TheSportsMediaC/lists/1543020161199812608";


request(url, function (error, response, body) {
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
});
//console.log(myJson.message.hound);

//https://api.twitter.com/2/users/:id/timelines/reverse_chronological
//required params are => screen_name=TheSportsMediaC
