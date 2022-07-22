let sport:string='football';
let euroSport=sport;
sport='basketball'

let teamCaptain:{name:string,number:number} = {
    name:"Cg",
    number:1
};

let starPlayer=teamCaptain;
teamCaptain={
    name:"Carl",
    number:1
}

let myarr:number[]=[0,1,2]
let myarr2:(number|string)[]=[0,0,"aa",1]

interface league{
    name:string,
    teamsNumber:number,
    starTeam:string,
    playersLeague:boolean
};

let nba:league={
    name:"NBA",
    teamsNumber:30,
    starTeam:"Lakers",
    playersLeague:true
}

interface Animal{
    name:string
}
interface Bear extends Animal{
    honey:boolean
}

const Bear:Bear={
    name:"Winnie-deh-pooh",
    honey:true,
}

console.log(sport,euroSport,teamCaptain,starPlayer,nba)