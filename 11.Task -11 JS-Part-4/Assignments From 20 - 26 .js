/*
Assignment 1
*/

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
// Your Solutions
console.log(Math.pow(10,5)); // 100000
console.log(10e4); // 100000
console.log(10 ** 5); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.min(200000,100000)); // 100000
console.log(Math.max(50000,100000)); // 100000
console.log(parseInt(100000.5)); // 100000
console.log(100 * 1000); // 100000
console.log(10e5 / 10); // 100000
//---------------------------------------------------------------

/*
Assignment 2
*/
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
//---------------------------------------------------------------

/*
Assignment 3
*/
console.log((Number.MAX_SAFE_INTEGER).toString().length);
//---------------------------------------------------------------

/*
Assignment 4
*/
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
//---------------------------------------------------------------

/*
Assignment 5
*/
let num = 10;
console.log(true + Number.isInteger(num)); // 2
//---------------------------------------------------------------

/*
Assignment 6
*/
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
//---------------------------------------------------------------

/*
Assignment 7
*/
console.log(Math.floor(Math.random() * 4)+1); // 0 || 1 || 2 || 3 || 4
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
//---------------------------------------------------------------
