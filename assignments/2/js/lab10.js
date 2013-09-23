/*
	Comp 2051 JS 
	Assignment 2 | Lab 9
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

	// Centralized logic to create a label and input with specified name & id
	// Probably could refactor this to html.js
	var makeInputAndLabel = function(name, id) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", id));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	};

	// Constructor
	// Creates and initilizes, returns view.

	function main() {
		htmlModule = new htmlUtil(); // View creation / HTML logic
		arrModule = new arrMethods(); // Array Method shortcuts
		msg = htmlModule.msg; // Logging
		msg.set("Starting Module");

		// Prompt for any single digit number
		var numbers = [];
		var more = true;
		var upperBand = 10;
		var lowerBand = -10;
		while (more) {
			var numberInput = parseInt(prompt("Number (single digit only, e to end)", 0));
			if (numberInput == "e") {
				more = false;
				break;
			}
			if (isNaN(numberInput) || numberInput >= upperBand || numberInput <= lowerBand) {
				d.write("Not valid input, please try again.");
			}
			number.push(numberInput);
		}

		d.write("Largest number in set: " + largestNumber(numbers));
	}

	return new main();
};

var largestNumber = function(numbers) {
	var largest = numbers[0]; //Take the first value
	for (var i = 0; i < numbers.length; i++) {
		largest = (largest > numbers[i]) ? largest : numbers[i];
	}
	retun largest;
}