require("dotenv").config();
let mongoose = require("mongoose");
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MongoDB connected!");
	})
	.catch(err => {
		console.error("MongoDB connection error:", err);
	});

console.log(process.env.TEST_VAR);

const personSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: Number,
	city: {
		type: String,
		default: "Vancouver",
	},
	favoriteFoods: [String],
});
let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = done => {
	let carl = new Person({
		name: "Carl",
		age: 30,
		city: "Vancouver",
		favoriteFoods: ["Steak", "Sushi", "Popeye's Chicken"],
	});
	carl.save((err, data) => {
		if (err) return console.error(err);
		done(null, data);
	});
};

let arrayOfPeople = [
	{
		name: "Carlos",
		age: 29,
		city: "Metrotown",
		favoriteFoods: ["Tacos", "Burritos", "arrepas"],
	},
	{
		name: "Ibson",
		age: 33,
		city: "Vancouver",
		favoriteFoods: ["Raclette", "Baguette", "Mcdonald's"],
	},
	{
		name: "Pamir",
		age: 27,
		city: "Metrotown",
		favoriteFoods: ["Donair", "Khebab", "Turkish Delight"],
	},
];

const createManyPeople = (arrayOfPeople, done) => {
	Person.create(arrayOfPeople, (err, data) => {
		if (err) return done(err);
		done(null, data);
	});
};

const findPeopleByName = (personName, done) => {
	Person.find({name: personName}, (err, data) => {
		err ? done(err) : done(null, data);
	});
};

const findOneByFood = (food, done) => {
	Person.findOne({favoriteFoods: food}, (err, data) => {
		err ? done(err) : done(null, data);
	});
};

const findPersonById = (personId, done) => {
	Person.findById({_id: personId}, (err, data) => {
		err ? done(err) : done(null, data);
	});
};

const findEditThenSave = (personId, done) => {
	const foodToAdd = "hamburger";
	Person.findById({_id: personId}, (err, person) => {
		err ? console.log(err) : person.favoriteFoods.push(foodToAdd);
		person.save((err,updatedPerson)=>{
			err?console.log(err):done(null,updatedPerson);
		})
	});
};

const findAndUpdate = (personName, done) => {
	const ageToSet = 20;
	Person.findOneAndUpdate({name:personName},{age:ageToSet},{new:true},(err,data)=>{
		err?console.log(err):done(null,data);
	})

};

const removeById = (personId, done) => {
	Person.findByIdAndRemove({_id: personId}, (err, data) => {
		err ? console.log(err) : done(null, data);
	});

};

const removeManyPeople = done => {
	const nameToRemove = "Mary";
	Person.remove({name:nameToRemove},(err,data)=>{
		err?console.log(err):done(null,data);
	})
	
};

const queryChain = done => {
	const foodToSearch = "burrito";

	done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
