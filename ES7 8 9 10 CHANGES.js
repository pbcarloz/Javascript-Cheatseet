// ES7 ES2016/////////////////
// includes se define por obviedad, tal cosa incluye (x) cosa
// .includes()

"Helloooo".includes("o");
// true

const pets = ["cat", "dog", "bird"];
pets.includes("dog");
// true

pets.includes("Fish");
// false


// exponential operator crear un operador exponencial con **

const square = (x) => x**2;

square(5);
// regresa 25//////////

const cube = (x) => x**3;

cube(3);
// regresa 27////////////

// .padStart y .padEnd agregan espacios al principio o al final.
// .padStart()
// .padEnd()

// TRATAR UN OBJETO COMO UN ARREGLO ARRAY

// Object.values
// Object.entries
// Object.keys

let obj = {
    username0: "Carlos",
    username1: "Ron",
    username2: "Alff",
};

Object.keys(obj).forEach((key, index) =>{
    console.log(key, obj[key]);
})
// devuelve
// username0 Carlos
// username1 Ron
// username2 Alff

Object.values(obj).forEach(value => {
    console.log(value);
});
// devuelve
// Carlos
// Ron
// Alff

Object.entries(obj).forEach(value => {
    console.log(value);
});
// devuelve////////////
// ["username0", "Carlos"]
//  ["username1", "Ron"]
//  ["username2", "Alff"]

Object.entries(obj).map(value =>{
    return value[1] + value[0].replace("username","");
})
// ["Carlos0", "Ron1", "Alff2"]////////////
