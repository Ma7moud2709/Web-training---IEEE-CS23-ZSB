let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In all Variables Abd Return Integer
console.log(Math.ceil(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log((Math.pow(Math.ceil(d),2))*1000 + a*10);

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Values
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number