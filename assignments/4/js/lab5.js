/*
	Comp 2051 JS 
	Assignment 4 | Lab 5
	Arrays
	David Lighty

*/


var outputElementPositions = function(array) {
	for (var r = 0; r < array.length; r++) {
		d.write("We are editing the row:" + r);
		for (var c = 0; c < array[0].length; c++) {
			document.write("We are editing the column position: " + c);
			array[r][c]=0;
		}
	}
}


/*
	Order they are zeroed
	first array[0][0] 
	first array[0][1] 
	first array[0][2] 

	first array[1][0] 
	first array[1][1] 
	first array[1][2]

	first array[2][0] 
	first array[2][1] 
	first array[2][2]

*/