export const makeRawDataItterable = (rawData) => {
	const parsedRawData = JSON.parse(rawData);
	const parsedData = parsedRawData.map(obj => JSON.parse(obj));
    return parsedData
};
