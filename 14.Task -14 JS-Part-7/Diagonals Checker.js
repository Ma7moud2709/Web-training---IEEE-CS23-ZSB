function checkDiagonal(arr) {
	let Left = 0, Right = 0;
	// Right Diagonal
	for (let i = 0; i < 3; i++) {
		if (arr[i][i] === 1) {
			Right += 1;
		}
	}
	// Left Diagonal
	for (let i = 0; i < 3; i++) {
		if (arr[i][2 - i] === 1) {
			Left += 1;
		}
	}
	if (Right == 3 || Left == 3) {
		return "True";
	} else {
		return "False";
	}
}

console.log(checkDiagonal(/* Put Your Matrix */))