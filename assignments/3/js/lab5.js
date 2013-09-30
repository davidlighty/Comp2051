/*
	Comp 2051 JS 
	Assignment 3 | Lab 5
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

	var multipleForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "multipleForm");
		formEle.appendChild(makeInputAndLabel("Is: ", "num1"));
		formEle.appendChild(makeInputAndLabel("a <i>Multiple</i> of: ", "num2"));
		htmlModule.cntDiv.appendChild(formEle);
		addGetInputBtn();
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Get Result";
		var btn = htmlModule.createElement("button", "getResultBtn");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Getting Values");
			var _num1 = d.getElementById("num1").value;
			var _num2 = d.getElementById("num2").value;
			msg.set("TestResult:" + (_num2 % _num1));
			var result = multipleFunction(_num1, _num2);
			msg.set("FunctionResult:" + result);
			htmlModule.outputToContentDiv("Result: It " + ((result) ? "is" : "is not") + " a multiple");
		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}


	// Constructor
	// Creates and initilizes, returns view.

		function main() {
			htmlModule = new htmlUtil(); // View creation / HTML logic
			arrModule = new arrMethods(); // Array Method shortcuts
			msg = htmlModule.msg; // Logging
			msg.set("Starting Module");

			// Setup Form.
			multipleForm();

		}

	return new main();
};

var multipleFunction = function(x, y) {
	// Validate!
	// Rules are x must be larger than y.
	// Both x,y must be numbers.
	// Test for integer vs float??
	if (x < y || isNaN(x) || isNaN(y)) {
		return false;
	}
	return ((x % y) == 0); // If y divides into x and returns NO remainder, it is a multiple.
}