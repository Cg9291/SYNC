const myObj = {
	name: "cg",
	age: "30",
	city: "burnaby",
};

const { name: prenom, age, city } = myObj;
const myFn = () => {
	let myArr = [];

    Object.entries(myObj).forEach(([key,value])=>myArr.push({[key]:[value]}))


   /*  for (let prop in myObj) {
		myArr.push({ [prop]: myObj[prop] });
	} */

	return myArr;
};

console.log(myFn());
