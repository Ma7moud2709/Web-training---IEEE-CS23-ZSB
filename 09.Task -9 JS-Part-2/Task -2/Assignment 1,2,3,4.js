function howManySeconds(hours) {
	return hours * 3600;
}
// ---------------------------------------
function addUp(num) {
	let sum = 0;
	for(let i = 1; i <= num ; i++){
		sum += i;
	}
	return sum;
}
// ---------------------------------------
function matchHouses(step) {
	if (step == 0){
		return 0;
	}
	else
		return (step*5) +1;
}
// ---------------------------------------
function shiftToLeft(x, y) {
	return x * (2**y);
}
// ---------------------------------------