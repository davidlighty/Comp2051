/*
	Comp 2051 JS 
	Assignment 3 | Lab 4
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

	var powerForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "powerForm");
		formEle.appendChild(makeInputAndLabel("Base:", "base"));
		formEle.appendChild(makeInputAndLabel("To Power of:", "power"));
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
			var _base = d.getElementById("base").value;
			var _power = d.getElementById("power").value;
			msg.set("TestResult:" + Math.pow(_base, _power));
			var result = integerPower(_base, _power);
			msg.set("FunctionResult:" + result);
			htmlModule.outputToContentDiv("Result: " + result);
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
			powerForm();

		}

	return new main();
};


var integerPower = function(base, power) {
	//return Math.pow(base, power);
	// or the long way
	var result = base;
	// power - 1 becuase power of 2 == 1 iteration only!! (could have been a 1 based loop also)
	for (var i = 0; i < power-1; i++) {
		result *= base;
	}
	return result;
}