export let checkUrlDuplicate = (fn, rawData, reqBody) => {
	/* const parsedRawData = JSON.parse(rawData);
	const parsedData = parsedRawData.map(obj => JSON.parse(obj)); */
	const parsedData = fn(rawData);
	let toBeReturned;

	for (let jsObj of parsedData) {
		if (jsObj.original_url === reqBody) {
			console.log("url already exists");
			return true;
		} else {
			toBeReturned = false;
		}
	}
	return toBeReturned;
};
