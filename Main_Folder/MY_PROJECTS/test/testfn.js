let myFunction = input => {
	let myArray = input.split("");
	let myOutput = [];
	let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let number = [];

	for (let i = 0; i < myArray.length; i++) {
		if (digits.indexOf(Number(myArray[i])) >= 0) {
			number.push(myArray[i]);
		} else {
			if (number.length === 0) {
				myOutput.push(myArray[i]);
			} else {
				number = Number(number.join(""));
				for (let j = 0; j < number; j++) {
					myOutput.push(myArray[i]);
				}
				number = [];
			}
		}
	}

	console.log(myOutput);
};

myFunction("2a3bc4d");
