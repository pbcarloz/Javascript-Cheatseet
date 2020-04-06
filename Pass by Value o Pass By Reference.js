// PASS BY VALUE SIGNIFICA COPIAR EL VALOR, Y PASARLO A OTRO LUGAR EN LA MEMORIA.////////////PRIMITIVE TYPES

var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

// PASS BY REFERENCE LOS OBJETOS EN JS SE ALMACENAN EN LA MEMORIA Y SE PASAN POR REFERENCIA. NO SE COPIAN COMO LOS PRIMITIVOS.
// SIMPLEMENTE SE REFERENCIO Y SE DIJO ESTA ESTA LA UBICACION AQUI ESTA LA INFORMACION DEL OBJETO

let obj1 = {name: "Carlos", password: "123"};
let obj2 = obj1;

obj2.password = "easy";

console.log(obj1);
console.log(obj2);

// Los  Array son pasados por referencia pass by reference

var c = [1,2,3,4,5];
var d = c;
d.push(654321);
console.log(c);
// Var c aparecera con el nuevo valor 654321 ya que fue pasado por refencia

var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(654321);
console.log(c);
// creamos un nuevo array tomando los valores de C. y empujamos un nuevo valor en el nuevo array "d"//////////////////////////
// clonar un objeto///////////////////////
let obj ={a: "a", b: "b", c: "c"};
let Clone = Object.assign({},obj);
// otra manera de clonar
let clone2 = {...obj};

obj.c = 5;
console.log(obj);
console.log(clone);
console.log(clone2);

// Hacer un deep clone usando JSON//////////////////////////////////

let deepObj = {
    a: "a",
    b: "b",
    c: {
        deep: "Copy Me"
    }
};

let superClone = JSON.parse(JSON.stringify(deepObj));

