export let checkUrlDuplicate = (fn, rawData, reqBody) => {
	const parsedData = fn(rawData);
	let toBeReturned;

	for (let jsObj of parsedData) {
		if (jsObj.original_url === reqBody) {
			return true;
		} else {
			toBeReturned = false;
		}
	}
	return toBeReturned;
};
