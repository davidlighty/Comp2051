/*
	Comp 2051 JS 
	Assignment 3 | Lab 3
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

	var newDistanceForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "coordinateForm");
		formEle.appendChild(makeInputAndLabel("Coordinate1 X: ", "x1"));
		formEle.appendChild(makeInputAndLabel("Coordinate1 Y: ", "y1"));
		formEle.appendChild(makeInputAndLabel("Coordinate2 X: ", "x2"));
		formEle.appendChild(makeInputAndLabel("Coordinate2 Y: ", "y2"));
		htmlModule.cntDiv.appendChild(formEle);
		addGetInputBtn();
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Get Distance";
		var btn = htmlModule.createElement("button", "getDistanceBtn");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Adding Employee");
			var _x1 = d.getElementById("x1").value;
			var _y1 = d.getElementById("y1").value;
			var _x2 = d.getElementById("x2").value;
			var _y2 = d.getElementById("y2").value;
			var thisDistance = getDistance(_x1, _y1, _x2, _y2);
			htmlModule.outputToContentDiv("Distance is: " + thisDistance.toFixed(2));
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
			newDistanceForm();

		}

	return new main();
};

// Pass in the actual coordianates
var getDistance = function(x1, y1, x2, y2) {
	return Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
}

// Use a "Point" Object instead of x1,y1,x2,y2
var getDistanceByObject = function(point1, point2) {
	return Math.sqrt((Math.pow((point2.x - point1.x), 2)) + (Math.pow((point2.y - point1.y), 2)));
}

var Point = function(x, y) {
	this.x = x;
	this.y = y;
};