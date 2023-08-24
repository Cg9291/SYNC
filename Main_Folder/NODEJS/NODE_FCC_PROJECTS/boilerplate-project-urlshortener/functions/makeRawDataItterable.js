export const makeRawDataItterable = (rawData) => {
	const parsedRawData = JSON.parse(rawData);
	const parsedData = parsedRawData.map(obj => JSON.parse(obj));
	console.log("Parsed Data is "+ parsedData)
    return parsedData
};
