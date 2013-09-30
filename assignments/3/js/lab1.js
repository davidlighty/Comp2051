/*
	Comp 2051 JS 
	Assignment 3 | Lab 1
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

		var more = true;
		while (more) {
			var radius = parseFloat(prompt("Radius of circle?", 5));
			d.write("Circle Area :" + circleArea(radius).toFixed(2));
			if (!confirm("Another?")) {
				more = false;
			}
		}
	}

	return new main();
};


var circleArea = function(radius) {
	var pi = 21 / 7;
	return pi * (Math.pow(radius, 2);
	}