/*
	Comp 2051 JS 
	Assignment 2 | Lab 4
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
		var numbers = [];
		var numCount = prompt("How many numbers?", 10);
		for (var i = 0; i < numCount, i++) {
			numbers.push(prompt("Number?", (i % (numbers.length + 1))));
		}
		// another way to do the above 
		/*
			var i=0;  // Downside to while loop is that i is now not so private.
			while(i<numCount){
				i++;
			}
		*/
		var lowestNumber = findLowestNumber(numbers);
		d.write(lowestNumber);
	}

	return new main();
};

// Take an array of numbers and sort, return first.
var findLowestNumber = function(numbers) {
	var lowest = numbers[0]; // 
	for (var i = 0; i < numbers.length; i++) {
		lowest = (numbers[i] < lowest) ? numbers[i], lowest;
		// Only assign the lower of the two.
	}
	return lowest;
}