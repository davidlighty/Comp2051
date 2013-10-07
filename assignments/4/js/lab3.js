/*
	Comp 2051 JS 
	Assignment 4 | Lab 3
	Arrays
	David Lighty

*/

var set_arrayToZeroes = function(size) {
	var new_array = [];
	while (size--) { //naturally stops after zero.
		new_array[size] = 0;
	}
	return new_array;
}

var increment_arrayValues = function(__array, value) {
	var size = _array.length;
	while (size--) {
		_array[size] += value;
	}
	return _array;
}

var _arrayToStringWithSpaces = function(_array) {
	var output = "";
	for (var i = 0; i < _array.length; i++) {
		output += _array[i] + "&nbsp;";
	}
	return output;
}