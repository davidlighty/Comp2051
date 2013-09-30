/*
	Comp 2051 JS 
	Assignment 3 | Lab 7
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

	var squareForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "squareForm");
		formEle.appendChild(makeInputAndLabel("Width: ", "num1"));
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
			var _width = d.getElementById("num1").value;
			var square = drawSquareBox(_width); // Function should only return data!

			if (square != null) {
				// Create the view here, don't create html in the function.
				var cnt;
				for (var i = 0; i < square.length; i++) {
					cnt += square[i] + "<br/>";
				}
				htmlModule.outputToContentDiv("Square of: " + width + " size.");
				htmlModule.outputToContentDiv(cnt);
			} else {
				msg.set("sqaure returned null, not a valid number.");
				htmlModule.outputToContentDiv("Error, please try again.");
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
			squareForm();
		}

	return new main();
};

var drawSquareBox = function(width) {
	// width == height, as we are creating a SQUARE
	// Return string always length = pyramidWidth
	var lines = [];
	msg.set("bricks: " + width);
	var bricks = "";
	// Outer for loop controls height of square.
	for (var i = 0; i < width; i++) {
		// Inner for loop creates each line.
		for (var i = 0; i < width; i++) {
			bricks += "*";
		}
		lines.push(bricks);
	}
	// lines array now holds all the lines.
	return lines;
};