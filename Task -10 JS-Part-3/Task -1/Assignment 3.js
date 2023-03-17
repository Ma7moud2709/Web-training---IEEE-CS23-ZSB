let num = "10";

// Solution One
console.log(Number(num*2)); // 20

// Solution Two
console.log(Number(Math.sqrt(num**2)*2)); // 20

// Solution Three
console.log(Number((2*num+21)%21)); // 20

// Solution Four
console.log(Number(num)+Number(num)); // 20