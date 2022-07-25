let sport:string = 'football';
let euroSport:string=sport;

let basketballPositions:(string|number)[]=['PG','SG','SF','PF','C',5];

interface league{
  name:string;
  teamsNumber:number;
  playersLeague:boolean
}


/*const addID = (obj: object) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person1 = addID({ name: 'John', age: 40 });

console.log('id is '+person1.id); // 271
console.log(person1.name);
console.log(person1)*/