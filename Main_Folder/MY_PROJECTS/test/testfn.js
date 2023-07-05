let myFunction = input => {
	let myArray = input.split("");
	let myOutput = [];
	let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	for (let i = 0; i < myArray.length; i++) {
		if (numbers.indexOf(Number(myArray[i])) >= 0) {
			for (let j = 0; j < myArray[i]; j++) {
				myOutput.push(myArray[i+1]);
			}
		}else if(numbers.indexOf(Number(myArray[i-1]))<0){
			myOutput.push(myArray[i]);
		}
	}
	console.log(myOutput);
};

myFunction("12a3bc");
