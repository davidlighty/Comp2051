/*
	Comp 2051 JS 
	Assignment 4 | Lab 4
	Arrays
	David Lighty

	Use the smallest array to hold the least number of non-duplicate numbers
	from 10-100, as input.

*/

var smallArray = []; // empty array, no elements.

// Test input, add if not there.
var acceptInput = function(value) {
	(!contains(smallArray, value)) ? smallArray.push(value) : false;
}

// Find a value in the given array
var contains = function(arr, x) {
	//returns index location
	for (var i = 0; i <= arr.length; i++) {
		if (arr[i] == x) {
			return i;
		}
	}
}

var printArray = function() {
	var output = "";
	for (var i = 0; i < smallArray.length; i++) {
		output += "Value of index:" + i + " " + smallArray[i] + "<br/>";
	}

	return output;

}