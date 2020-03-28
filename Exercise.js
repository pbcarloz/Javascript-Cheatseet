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

const name = "carlos";
const age = 27;
const pet = "dog";

const greeting = `Hello ${name} you seem to be ${age}. What a nice ${pet} you have`;
console.log(greeting);



// DEFAULT ARGUMENTS/////////////////////////////////////////////////////////////////////////////////////

function greet (name = "", age = 30, pet = "cat"){
    return `Hello ${name} you seem to be ${age}. What a nice ${pet} you have`;
}

// SYMBOL///////////////////////////////////////////////////

let sym = Symbol();
let sym2 = Symbol("foo");

// ARROW FUNCTIONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add (a, b){
    return a + b;
}

const add = (a,b) => a + b;

// ADVANCED FUNCTIONS//////////////////////
// closures a function ran. the function executed. it's never going to execute again but it's going to remember
// that there are references to those variables. So the child scope always has access to the parent scope.

const first = () => {
    const greet = "hi";
    const second = () =>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// CURRYING///////////////////////
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

// compose////////////
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose (sum, sum)(5);

// AVOID SIDE EFFECTS! DO FUNCTIONAL PURITY, ALWAYS RETURN SOMETHING!!!