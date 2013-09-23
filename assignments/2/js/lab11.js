/*
	Comp 2051 JS 
	Assignment 2 | Lab 10
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
		var promptToStopCrash=20;
		var currentMultiple = 2;
		d.write("Multiples of: " + currentMultiple);
		while (more) {
			d.write(Math.pow(currentMultiple, 2));
			if(currentMultiple % 20==0){
				if(confirm("Continuing this will crash the browser, do you wish to stop?")){
					more=false;
				}
			}
		}

	}

	return new main();
};