// Assignment 1

function sayHello(theName, theGender) {
	if (theGender === "Male") {
		console.log(`Hello Mr ${theName}`);
	} else if (theGender === "Female") {
		console.log(`Hello Miss ${theName}`);
	} else {
		console.log(`Hello ${theName}`);
	}
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("**************");
// Assignment 2

function calculate(firstNum, secondNum, operation) {
	if (secondNum === undefined) {
		console.log("Second Number Not Found")
	} else {
		switch (operation) {
			case "add":
			case undefined:
				console.log(firstNum + secondNum);
				break;
			case "subtract":
				console.log(firstNum - secondNum);
				break;
			case "multiply":
				console.log(firstNum * secondNum);
				break;
		}
	}
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
console.log("**************");
// Assignment 3

function ageInTime(theAge) {
	if (theAge <= 10 || theAge >= 100) {
		console.log("Age Out Of Range");
	} else {
		console.log(`Your Age: ${theAge * 12} Months`);
		console.log(`Your Age: ${theAge * 12 * 4} Weeks`);
		console.log(`Your Age: ${theAge * 12 * 4 * 30} Days`);
		console.log(`Your Age: ${theAge * 12 * 4 * 30 * 24} Hours`);
		console.log(`Your Age: ${theAge * 12 * 4 * 30 * 24 * 60} Minutes`);
		console.log(`Your Age: ${theAge * 12 * 4 * 30 * 24 * 60 * 60} Seconds`);
	}
}

// Needed Output
ageInTime(110); // theAgeOut Of Range
ageInTime(38); // Months Example => 456 Months

console.log("**************");
// Assignment 4

function checkStatus(a, b, c) {
	let check = [a, b, c], statue;
	for (let i = 0; i < 3; i++) {
		if (typeof check[i] === "string") {
			a = check[i];
		} else if (typeof check[i] === "number") {
			b = check[i];
		} else {
			c = check[i];
		}
	}
	if (c === true) {
		statue = "Avialable For Hire";
	} else {
		statue = "Not Avialable For Hire";
	}
	console.log(`Hello ${a}, Your Age Is ${b}, Your Are ${statue}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("**************");
// Assignment 5

function createSelectBox(startYear, endYear) {
	document.write("<select>")
	for(let i = startYear; i < endYear; i++){
		document.write(`<option value="${i}">${i}</option>`)
	}
	document.write("</select>")
}
createSelectBox(2000, 2021);

// Assignment 6
function multiply(...arr){
	let result = 1;
	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] === "string"){
			continue;
		}else{
			result *= parseInt(arr[i]);
		}
	}
	console.log(result)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000