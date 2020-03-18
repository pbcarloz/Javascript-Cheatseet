var firstname = prompt ("Enter First Name")
    
undefined
firstname
"Carlos"
var secondname = prompt ("Enter Second Name")
var fullname = firstname + " " + secondname
alert(fullname)
undefined
var firstname = prompt ("Enter First Name");
var secondname = prompt ("Enter Second Name");
var fullname = firstname + " " + secondname;
alert(" Your name is " + fullname)
undefined
var firstname = prompt ("Enter First Name" , "lol");
var secondname = prompt ("Enter Second Name");
var fullname = firstname + " " + secondname;
alert(" Your name is " + fullname)
undefined
var a = 34;
var b = 21;
a = 2;
a + b
23
var c;
undefined
var name = "Carlos"
if ( name === "Carlos") {
    alert( "Hi Carlos");}

undefined
var name = "C"
if ( name === "Carlos") {
    alert( "Hi Carlos");
}
undefined
var name = "Carlos"
if ( name === "Carlos") {
    alert( "Hi Carlos");
}

// ELSEEE//
if (name === "Lol") {
    alert ( "Hi Lol");
} else { 
        alert ("Hi Stranger");
       }
undefined
var name = "Lol"
undefined
if (name === "Lol") {
    alert ( "Hi Lol");
} else { 
        alert ("Hi Stranger");
       }

       // ELSE IFFFFFF//

       name = "Carlos"
"Carlos"
if (name === "Carlos") {
    alert ( "Hi Carlos");
} else if (name === "Kiki") { 
        alert ("Hi Kiki");
       }
else { alert ("Hello Stranger");
}
undefined
name = "Kiki";
"Kiki"
if (name === "Carlos") {
    alert ( "Hi Carlos");
} else if (name === "Kiki") { 
        alert ("Hi Kiki");
       }
else { alert ("Hello Stranger");
}

// OPERADORES LOGICOS  || OR//

if (name === "Carlos" || name === "Kiki") {
    alert ("Hi Kiki or Carlos");
} else { 
    alert ("Hello Stranger");
}

// OPERADOR && AND ///
Firstname = "Carlos"
Lastname = "Barcenas"

if (Firstname === "Carlos" && Lastname === "Barcenas" ) {
	alert("Hello Carlos Barcenas");
}	else{
	alert("Hello Stranger");
}

// OPERADOR ! //
! EVALUA Y DEFINE CONTRARRIO?

!true
false
!false
true

// EJERCICIO LLAVE ///

var age = prompt("Enter Your Age");
if (age <"18") {
	alert( "You are too Young and Naive to drive");
} else if (age ==="18") {
	alert("Ok Rookie");
} else {
	alert("Welcome Onboard Master");
}

// SOLUCION ANDREI ///


var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

// arrays//

var numbers = [1,2,3,4]
var booleans =[true,false,true]

var functionlist = [function apple(){
  console.log("apple");
}]

// not recomendable
var mixedlist = ["apple", 3, undefined, true, function]

var listinlist = [
  ["tiger", "cat","bear","bird"]
];

console.log(listinlist[0][2]);

// remueve el primero de la lista
list.shift();

// remueve el ultimo sin guardar
list.pop();
// agrega item sin guardar
list.push("elephant");

// concatena// no lo guarda como una variable
list.concat(["bee","deer"]);

// concatena// ya lo guarda como una variable
var mynewlist = list.concat(["bee","deer"]);

// ordenar original
list.sort()

// OBJECTS!!!!!///

var user ={
  name: "carlos",
  age: 27,
  hobby: "developer",
  isMarried: false,
  spells: ["Cruciatus","heal","lifesteal"]
  shout: function(){
    console.log("AAH!");
  }
}

// como tomar propiedades///
user.name
user.age
user.isMarried
// como tomar propiedades si hay array///
user.spells[1];
///////COMO AGREGAR ITEMS o cambiar/////////

user.favouriteFood = "spinach";

user.isMarried = true;

// experimento si funciona/
if (user.age === 27){
    alert("Tienes 27")
          };

// OBJETO DENTRO DE UN ARRAY///

var list =[
{
  username: "carlos",
  password: "123",
},
{
  username: "kiyoko",
  password: "456",
}
]
// acceder objects en un array////

list[0].password;

// METODOS SON FUNCIONES DENTRO DE UN OBJETO//

// UN OBJETO NULL ESTA COMPLENTAMENTE VACIO//
var nullobject = null;
