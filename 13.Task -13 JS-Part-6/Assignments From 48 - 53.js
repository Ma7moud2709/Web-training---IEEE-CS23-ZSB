let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
	if (i === exclude) {
		continue;
	}
	console.log(i);
}

// Assignment 2
console.log("Assignment 2");
start = 10;
end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
	i < start ? console.log(`${end}${i}`) : console.log(i);
}

// Assignment 3
console.log("Assignment 3");
start = 1;
end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
	console.log(i)
	for (let j = breaker; j < end; j += breaker) {
		console.log(`--${j}`)
	}
}

/*  for(let i = start; i <= end; i++){
	console.log(`${i}\n--${breaker}\n--${(end/breaker)+start}`);
} */

// Assignment 4
console.log("Assignment 4");
let index = 10;
let jump = 2;

for (; ;) {
	let i = index;
	if (i === jump) {
		break;
	}
	console.log(i);
	index -= jump;
}

// Assignment 5
console.log("Assignment 5");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length;
for (let i = count; i < friends.length; i++) {
	if (friends[i][0] === letter[0].toUpperCase()) {
		continue;
	}
	console.log(`${count++} => ${friends[i]}`)
}
// Assignment 6
console.log("Assignment 6");
start = 0;
let swappedName = "elZerO";
let result = "";
for (let i = start; i < swappedName.length; i++) {
	if (swappedName[i] === swappedName[i].toLowerCase()) {
		result += swappedName[i].toUpperCase();
	}
	else {
		result += swappedName[i].toLowerCase();
	}
}
console.log(result);
// Output
"ELzERo"
// Assignment 7
console.log("Assignment 7");

start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i = ++start; i < mix.length; i++){
	if(typeof mix[i] === "number"){
		console.log(mix[i]);
	}
}

