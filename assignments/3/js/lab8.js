/*
	Comp 2051 JS 
	Assignment 3 | Lab 8
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

	var digitForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "digitForm");
		formEle.appendChild(makeInputAndLabel("Integer: ", "num1"));
		htmlModule.cntDiv.appendChild(formEle);
		addGetInputBtn();
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Draw";
		var btn = htmlModule.createElement("button", "getResultBtn");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Getting Values");
			var _num = d.getElementById("num1").value;
			// Do something with num
			if (isNaN(_num) || _num < 0 || _num > 99999) {
				htmlModule.outputToContentDiv("Invalid Entry.");
			} else {
				var digits = splitDigits(_num);
				for (var i = 0; i < digits.length; i++) {
					// output to div with spaces.
					htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("span", ""), digits[i] + "&nbsp;&nbsp;"));
				}
			}

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
			digitForm();
		}

	return new main();
};


var integerQuotient = function(a, b) {
	return (a / b).toFixed(0); // Integer only
}

var integerRemainder = function(a, b) {
	return (a % b).toFixed(0);
}

var splitDigits = function(num) {
	num = num + ""; // Make this a string to get the length for a loop
	var digits = [];
	for (var i = 0; i < num.length; i++) {
		digits.push(num.charAt(i));
	}
	return digits; //return the array of digits.
}