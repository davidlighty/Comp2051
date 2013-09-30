/*
	Comp 2051 JS 
	Assignment 3 | Lab 10
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

	var mathMinForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "mathMinForm");
		formEle.appendChild(makeInputAndLabel("Number1: ", "num1"));
		formEle.appendChild(makeInputAndLabel("Number2: ", "num2"));
		formEle.appendChild(makeInputAndLabel("Number3: ", "num3"));
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Find", function() {
			msg.set("Eval and get the lowest");
			var _num1 = d.getElementById("num1").value;
			var _num2 = d.getElementById("num2").value;
			var _num3 = d.getElementById("num3").value;
			htmlModule.outputToContentDiv("Lowest: " + min3([_num1, _num2, _num3]));
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
			mathMinForm();
		}

	return new main();
};


var min3 = function(arrOfNumbers) {
	if (arrOfNumbers.length <= 0) {
		return null;
	}
	// Don't alter the actual numbers.
	// Just use and save their index.
	var minEntry = 0;
	for (var i = 0; i < arrOfNumbers; i++) {
		minEntry = (Math.min(arrOfNumbers[minEntry]) < Math.min(arrOfNumbers[i])) ? minEntry : i;
	}
	return arrOfNumbers[minEntry];
}