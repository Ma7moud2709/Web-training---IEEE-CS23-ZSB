console.log("Assignment 1");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.indexOf("Ahmed"),num)); // ["Ahmed", "Elham", "Osama"];
//-------------------------------------------
console.log("Assignment 2");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//-------------------------------------------
console.log("Assignment 3");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//-------------------------------------------
console.log("Assignment 4");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//-------------------------------------------
console.log("Assignment 5");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
	console.log("found");
}
if (haystack.indexOf(needle)) {
	console.log("found");
}
if (haystack.lastIndexOf(needle)) {
	console.log("found");
}

//-------------------------------------------
console.log("Assignment 5");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
// ["A","C",'D',"E","F","X","Y"]
allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
console.log(allArrs); // fxy
