// reference type//////////////////////
var object1 = { value 10};
var object2 = object1;
var object3 = { value 10};
// Cada objecto tiene una direccion diferente, una estructura de datos diferente. El objeto 1 no es igual objeto 3 aun que cuenten con el mismo valor.

// context VS SCOPE ////////////////
console.log(this)
VM101:1 Window {parent: Window, opener: null, top: Window, length: 3, frames: Window, …}
// console. log (this) hace refencia a Window.
console.log( this === window)
VM201:1 true
undefined
this.alert ("hello");
undefined
// this hace referencia al objeto donde se encuentra dentro, en el caso de la consola de google, es "window".


// instantiation es cuando hace una copia de un objeto y reusas el codigo//////////////////////////////////
// class requiere que se use un constructor 
class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce (){
        console.log(`Hello I Am ${this.name}, i am a ${this.type}!`);
    }
}

// Para extender class requiere un constructor y syntax Super para accesar a la informacion de Player
class Wizard extends Player {
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`Weee! I am a ${this.type}!`);
    }
}

class Tank extends Player {
    constructor(name, type){
        super(name, type)
    }
    introduce(){
        console.log(`Hello! I am ${this.name}, and i am a ${this.type}!`);
    }
}

// para no repetir el codigo, se ocupa el siguiente syntax///////////////// importante considerar NEW

const Wizard1 = new Wizard ("Carlos", "Warlock");
const Wizard2 = new Wizard ("Erick", "Healer");
const Tank1 = new Tank ("Fenrir", "Tank");

Wizard1.introduce();
Wizard1.play(); 
