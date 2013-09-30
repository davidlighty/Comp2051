/*
	Comp 2051 JS 
	Assignment 3 | Lab 14
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

	var graderForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "graderForm");
		formEle.appendChild(makeInputAndLabel("Average Grade: ", "num1"));
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Reverse", function() {
			msg.set("Eval and get the grade");
			var _num1 = d.getElementById("num1").value;
			var startFunc = Date().getTime();
			var result = grader(_num1);
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
			htmlModule.outputToContentDiv("Grading");
			// Setup Form.
			graderForm();
		}

	return new main();
};

var grader = function(x) {
	return (x >= 90) ? 4 : (x >= 80) ? 3 : (x >= 70) ? 2 : (x >= 60) ? 1 : 0;
}