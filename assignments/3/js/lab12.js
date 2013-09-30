/*
	Comp 2051 JS 
	Assignment 3 | Lab 12
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
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Reverse", function() {
			msg.set("Eval and get the lowest");
			var _num1 = d.getElementById("num1").value;
			var startFunc = Date().getTime();
			var result = reverser(_num1);
			var endFunc = Date().getTime();
			msg.set("Elapse time :" + endFunc - startFunc);
			htmlModule.outputToContentDiv(result);
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
			htmlModule.outputToContentDiv("Reverse Number");
			// Setup Form.
			mathMinForm();
		}

	return new main();
};

var reverser = function(x) {
	x += "";
	y;
	for (var i = x.length; i > 0; i--) {
		y += "" + x.charAt(i);
	}
	return y;
}