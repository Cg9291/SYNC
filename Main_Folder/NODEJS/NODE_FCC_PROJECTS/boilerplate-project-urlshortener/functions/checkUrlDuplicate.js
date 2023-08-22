export let checkUrlDuplicate = (rawData, reqBody) => {
	const parsedRawData = JSON.parse(rawData);
	const parsedData = parsedRawData.map(obj => JSON.parse(obj));
	let toBeReturned;
	//console.log(parsedData);
	for (let jsObj of parsedData) {
		console.log("url" + jsObj.short_url);
		if (jsObj.original_url === reqBody) {
			console.log("url already exists");
			return true;
		} else {
			toBeReturned = false;
		}
	}
	return toBeReturned;
};
