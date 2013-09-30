/*
	Comp 2051 JS 
	Assignment 3 | Lab 6
	Control Statements
	David Lighty

*/

// Global
var arrModule; // util.js
var msg; // util.js

// Main Module - this holds the init and page creation logic  ((Controller))
var labModule = function() {
	var htmlModule; // This doesn't need to be a global.

	var d = document; // shortcut variable, I just don't want to write document everywhere.
	var dB = document.body;


	// Constructor
	// Creates and initilizes, returns view.

	function main() {
		htmlModule = new htmlUtil(); // View creation / HTML logic
		arrModule = new arrMethods(); // Array Method shortcuts
		msg = htmlModule.msg; // Logging
		msg.set("Starting Module");

		// Setup Form.
		var more = true;
		while (more) {
			var numIsEvenToTest = parseInt(prompt("Number to test for eveness? ", 2));
			htmlModule.outputToContentDiv("Result: It " + ((isEven(numIsEvenToTest)) ? "is" : "is not") + " even.");
			if (!confirm("Another?")) { // Confusing negation, but it makes sense from the loops perspective.  Only STOP when confirm returns FALSE (or NOT TRUE).
				more = false;
				break; // Really this is all that is needed to stop looping.
			}
		}


	}

	return new main();
};

var isEven = function(x) {
	// Validate!
	// Rules are x must be larger than y.
	// Both x,y must be numbers.
	// Test for integer vs float??
	if (isNaN(x)) {
		return false;
	}
	return ((x % 2) == 0); // If 2 divides into x and returns NO remainder, it is even.
}