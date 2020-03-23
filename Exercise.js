const player = "carlos";
let experience = 100;
let tankLevel = false;

if (experience > 90 ){
    let tankLevel = true;
}
const a = function (){
    console.log("a");
}

const obj = {
    player: "Carlos",
    experience: 100,
    tankLevel: false
}

obj.tankLevel = true;

// DESTRUCTURING //////////////////////////////////////////////////////////////////

const obj = {
    player: "Carlos",
    experience: 100,
    tankLevel: false
}

const player = obj.player;
const experience = obj.experience;
let tankLevel = obj.tankLevel;

// syntax para hacer lo mismo/////////////////

const {player, experience} = obj;
let {tankLevel} = obj;

// OBJECT PROPERTIES/////////////////////

const name = "Carlos Barcenas";

const obj = {
    [name]: "hello",
    ["ray" + "smith"]: "hihi"
}

const a = "carlos";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

// Template Strings//////////////////////////////

