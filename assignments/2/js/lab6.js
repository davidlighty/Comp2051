/*
	Comp 2051 JS 
	Assignment 2 | Lab 6
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
	var outputToContentDiv = function(cnt) {
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), cnt));
	}

	// Print an array by element into a new div element and append that to our content div.
	var printArrayToDiv = function(arr,divID) {
		var newDiv = htmlModule.createElement("div", divID);
		var pre = htmlModule.createElement("pre","");
		for (var i = 0; i < arr.length; i++) {
			pre.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), arr[i]))
		}
		newDiv.appendChild(pre)
		htmlModule.cntDiv.appendChild(newDiv);
	}

	// Constructor
	// Creates and initilizes, returns view.

		function main() {
			htmlModule = new htmlUtil(); // View creation / HTML logic
			arrModule = new arrMethods(); // Array Method shortcuts
			msg = htmlModule.msg; // Logging
			msg.set("Starting Module");
			// Create our pyramid module with desired length
			var length = prompt("Width of pyramid base?",0);

			var pyramid = new pyramidPrint(length);

			// Top Left Pyramid
			printArrayToDiv(pyramid.topLeft(),"topLeft");
			// Bottom Left Pyramid
			printArrayToDiv(pyramid.bottomLeft(),"bottomLeft");
			// Top Right Pyramid
			printArrayToDiv(pyramid.topRight(),"topRight");
			// Bottom right Pyramid
			printArrayToDiv(pyramid.bottomRight(),"bottomRight");


		};

	return new main();
};

/*
	Create a module to print 4 kinds of
	pyramid blocks, up down, left and right halfs.	
*/
var pyramidPrint = function(width) {
	var pyramidWidth = width; // Width of the largest line 

	// Return string always length = pyramidWidth
	var printLine = function(numBlocks, leftToRight) {
		msg.set("Blocks: "+ numBlocks + " LeftToRight:"+leftToRight);
		var spaces = pyramidWidth - numBlocks;
		var blocks = "";
		var nonBlocks = "";
		for (var i = 0; i < numBlocks; i++) {
			blocks += "*";
		}
		for (var i = 0; i < spaces; i++) {
			nonBlocks += " "; //space
		}
		if (leftToRight) {
			return blocks + nonBlocks;
		} else {
			return nonBlocks + blocks;
		}
	};

	// Top Left going down...
	this.topLeft = function() {
		msg.set("Top Left");
		var lines = [];
		for (var i = 1; i <= pyramidWidth; i++) {
			lines.push(printLine(i, true));
		}
		return lines;
	};

	// Top Right going down...
	this.topRight = function() {
		msg.set("Top Right");
		var lines = [];
		for (var i = 0; i <= pyramidWidth; i++) {
			lines.push(printLine(i, false));
		}
		return lines;
	};

	// Bottom Left going down...
	this.bottomLeft = function() {
		msg.set("Bottom Left");
		var lines = [];
		for (var i = pyramidWidth; i > 0; i--) {
			lines.push(printLine(i, true));
		}
		return lines;
	};

	// Bottom Left going down...
	this.bottomRight = function() {
		msg.set("Bottom Right");
		var lines = [];
		for (var i = pyramidWidth; i > 0; i--) {
			lines.push(printLine(i, false));
		}
		return lines;
	};
}