export function rewriteHTML(newContent, datas) {
	let startMarker = "<marker>";
	let endMarker = "</marker>";
	let startIndex = datas.indexOf(startMarker);
	let endIndex = datas.indexOf(endMarker);
	let rewrittenContent;

	if (startIndex >= 0 && endIndex >= 0 && endIndex > startIndex) {
		rewrittenContent =
			datas.toString().substring(0, startIndex + startMarker.length) +
			newContent +
			datas.toString().substring(endIndex);
	}

	return rewrittenContent;
}
