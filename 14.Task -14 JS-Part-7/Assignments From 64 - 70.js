// Assignment 1
function getDetails(zName, zAge, zCountry) {
	function namePattern(zName) {
		return `${zName.slice(0 , zName.indexOf(" "))} ${zName.substr(zName.indexOf(" ")+1,1).toUpperCase()}.`;
	}
	function ageWithMessage(zAge) {
		return `Your Age Is ${parseInt(zAge)}`;
	}
	function countryTwoLetters(zCountry) {
		return `You Live In ${zCountry.substr(0,2).toUpperCase()}`;
	}
	function fullDetails() {
		return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
	}
	return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

// Assginment 2
console.log("***********");

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function\

// Assginment 3
console.log("***********");

let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// Assginment 4
console.log("***********");

function specialMix(...data) {
	let result = 0;
	let flag = false;
	for (let i = 0; i < data.length; i++) {
		if (! isNaN(parseInt(data[i]))){
			result += parseInt(data[i]);
			flag = true;
		}
	}
	if (flag){
		return result;
	}else{
		return "All Is Strings";
	}
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

