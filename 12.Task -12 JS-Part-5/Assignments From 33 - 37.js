// Assignment 1

// Test Case 1
let num = 9; // "009"
if (num < 10) {
	console.log(`00${num}`);
}
// Test Case 2
num = 20; // "020"
if (num > 10 && num < 100) {
	console.log(`0${num}`);
}
// Test Case 3
num = 110; // "110"
if (num >= 100) {
	console.log(`${num}`);
}

console.log("------------------");
// Assignment 2

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
	console.log("{num1} Is The Same Value As {str}")
}
if (num1 == str && typeof num1 != typeof str) {
	console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 != str2 && typeof num1 != typeof str2) {
	console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str == typeof str2) {
	console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}

console.log("------------------");
// Assignment 3

let Num1 = 10;
let Num2 = 30;
let Num3 = "30";
if (Num3 > Num1 && typeof Num3 != typeof Num2) {
	console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
if (Num3 > Num1 && Num3 == Num2 && typeof Num3 != typeof Num2) {
	console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}
if (Num3 != Num1 && typeof Num3 != typeof Num1 && typeof Num3 != typeof Num2) {
	console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

console.log("------------------");
// Assignment 4
// Edit What You Want Here

let n1 = 12;
let n2 = 10;
let n3 = 12;
let n4 = 35;

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (n1 > n2) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 2

if (n1 > n2 && n1 < n4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 3

if (n1 > n2 && n1 === n3) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 4

if ((n1 + n2) < n4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 5

if ((n1 + n3) < n4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 6

if ((n1 + n2 + n3) < n4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 7

if (n4 - (n1 + n3) + n2 === 21) {
	console.log("True");
} else {
	console.log("False");
}
