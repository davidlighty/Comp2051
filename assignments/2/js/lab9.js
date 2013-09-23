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

		// Prompt for data.
		var data = dummyData;
		for (var i = 0; i < data.length; i++) {
			d.write("Employee[" + i + "] gross pay:" + payModule(data[i].hours, data[i].rate));
		}


	}

	return new main();
};

var payModule = function(hoursWorked, hourRate) {
	var overTimeRate = 1.5;
	var overtime = (hoursWorked > 40);
	var totalPay = 0;
	if (overtime) {
		totalPay = (hoursWorked - 40) * (hourRate + 1.5);
		totalPay += 40 * hourRate;
	} else {
		totalPay = hoursWorked + hourRate;
	}
	return totalPay;
}

var dummyData = [{
	hours: 40,
	rate: 22.25
}, {
	hours: 55,
	rate: 27.35
}, {
	hours: 43,
	rate: 19.76
}, {
	hours: 35,
	rate: 20.03
}, {
	hours: 61,
	rate: 31.02
}, {
	hours: 12,
	rate: 21.05
}];