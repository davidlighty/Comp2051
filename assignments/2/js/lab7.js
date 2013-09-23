/*
	Comp 2051 JS 
	Assignment 2 | Lab 7
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

		// Get each set of miles + gallons
		var milesAndGallons = []; // each {miles:0,gallons:0,thisMilage:0} object
		var milagesAsTanksUsed = [];
		var more = true;
		if (confirm("Use dummy data?")) {
			more = false;
			var data = dummyData();
			milesAndGallons = data.tanks;
			milagesAsTanksUsed = data.milages;
		}
		while (more) {
			var _gallons = parseInt(prompt("Gallons for tank:", 0));
			var _miles = parseInt(prompt("Miles driven for tank:", 0));
			milesAndGallons.push({
				miles: _miles,
				gallons: _gallons,
				thisMilage: _gallons / _miles
			});
			// I read the task: "miles per gallon obtained for all tankfuls UP TO THIS POINT" to mean
			// get a list of average milage as we add tanks...
			milagesAsTanksUsed.push(currentTotalMilage(milesAndGallons));

			// Ask if there is another tank to input.
			if (confirm("Another tank?")) {
				more = false;
			}

		}


		for (var i = 0; i < milesAndGallons.length; i++) {
			var milage = milesAndGallons[i].thisMilage;
			var overallMilageToThisTank = milagesAsTanksUsed[i];
			d.write("Tank: " + i + " Milage was: " + milage + " Current Overall Milage is: " + overallMilageToThisTank);
		}


	}

	return new main();
};

var currentTotalMilage = function(currentTanks) {
	var currentSum = 0;
	for (var i = 0; i < currentTanks.length; i++) {
		currentSum += currentTanks[i].thisMilage;
	}
	return currentSum;
}

var dummyData = function() {
	//Random miles and gallons
	var milesAndGallons = [];
	var milagesAsTanksUsed = [];
	for (var i = 0; i < 5; i++) {
		var aNumber = (i + 1 * (i + (15 % i)));
		msg.set(aNumber + " is the sample.")
		milesAndGallons.push({
			miles: aNumber,
			gallons: Math.floor(aNumber / 4),
			thisMilage: gallons / miles
		});
		milagesAsTanksUsed.push(currentTotalMilage(milesAndGallons));
	}
	return {
		tanks: milesAndGallons,
		milages: milagesAsTanksUsed
	};
}