function whichIsLarger(f, g) {
	if (f() > g()) {
		return "f";
	}
	else if (f() < g()) {
		return "g";
	}
	else {
		return "neither";
	}
}
// ----------------------------
function numberSquares(n) {
	let sum = 0;
	for (let i = n; i >= 1; i--) {
		sum += i ** 2;
	}
	return sum;
}
// ----------------------------
function seriesResistance(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	if (sum <= 1) {
		return sum + " ohm";
	}
	else {
		return sum + " ohms";
	}
}
// ----------------------------
function minMax(arr) {
	let MinMax = [];
	MinMax.push(Math.min(...arr));
	MinMax.push(Math.max(...arr));
	return MinMax;
}
// ----------------------------