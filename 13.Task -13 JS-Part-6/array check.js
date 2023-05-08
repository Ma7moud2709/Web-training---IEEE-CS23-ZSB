let test = 0;
// check rows
for (let i = 0; i < 3; i++) {
	test = 0;
	for (let j = 0; j < 3; j++) {
		if (arr[i][j] == 1){test++};
	}
	if (test == 3){console.log("True")};
}
// check cols
for (let i = 0; i < 3; i++) {
	test = 0;
	for (let j = 0; j < 3; j++) {
		if (arr[j][i] == 1){test++};
	}
	if (test == 3){console.log("True")};
}