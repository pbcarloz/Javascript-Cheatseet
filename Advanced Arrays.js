const array = [1,2,10,16];

const double =[];

const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

// MAP, FILTER, REDUCE///////////////////////
// MAP////////////////////

const mapArray = array.map((num) => {
    return num * 2 ;
})
// another syntax for map///////////////
const mapArray2 = array.map(num => num * 2);

console.log("map", mapArray);

// FILTER////////////////////////////

const filterArray = array.filter(num => {
    return num > 2;
})
// another syntax for filter///////////////
const filterArray2 = array.filter(num => num > 5 );

// REDUCE /////////////////////////////////////

const reduceArray = array.reduce((accumulator, num)=> {
    return accumulator + num;
},0);