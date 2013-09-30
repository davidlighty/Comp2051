/*
	Comp 2051 JS 
	Assignment 3 | Lab 9
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

	var tempForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "tempForm");
		formEle.appendChild(makeInputAndLabel("Width: ", "num1"));
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Convert to F", function() {
			msg.set("Converting to F");
			var _tempInC = d.getElementById("num1").value;
			htmlModule.outputToContentDiv("Converted to: " + tempToF(_tempInC).toFixed(1));
		});
		addGetInputBtn("Convert to C", function() {
			msg.set("Converting to C");
			var _tempInF = d.getElementById("num1").value;
			htmlModule.outputToContentDiv("Converted to: " + tempToC(_tempInF).toFixed(1));
		});
	}

	// We will set the button onclick to the callbackFunc parameter!
	var addGetInputBtn = function(txt, callbackFunc) {
		msg.set("Adding Button");
		var btn = htmlModule.createElement("button", "getResultBtn");
		// Add click behaviour
		btn.onclick = callbackFunc;
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, txt));
	}


	// Constructor
	// Creates and initilizes, returns view.

		function main() {
			htmlModule = new htmlUtil(); // View creation / HTML logic
			arrModule = new arrMethods(); // Array Method shortcuts
			msg = htmlModule.msg; // Logging
			msg.set("Starting Module");

			// Setup Form.
			tempForm();
		}

	return new main();
};

var tempToC = function(tempInF) {
	return ((5.0 / 9.0) * (tempInF - 32));
}
var tempToF = function(tempInC) {
	return ((9.0 / 5.0) * tempInC + 32);
}