// Prpblem 1

function binary(decimal) {
	if (decimal == 0) 
		  return "0";
	let bin = "";
	while (decimal > 0) {
	  bin += decimal % 2;
	  decimal = Math.floor(decimal / 2);
	}
	return bin.split("").reverse().join("");
  }

// Problem 2

function multiSum(num, ten=10) {
	if (ten == 1){
		return num;
	}
	return num*ten+multiSum(num, ten-1);
}

// Problem 3

function getAbsSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum += Math.abs(arr[i])
	}
	return sum;
}