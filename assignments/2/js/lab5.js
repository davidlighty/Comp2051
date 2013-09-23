/*
	Comp 2051 JS 
	Assignment 2 | Lab 5
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

	// Constructor
	// Creates and initilizes, returns view.

	function main() {
		htmlModule = new htmlUtil(); // View creation / HTML logic
		arrModule = new arrMethods(); // Array Method shortcuts
		msg = htmlModule.msg; // Logging
		msg.set("Starting Module");

		var oddNumberProd = oddNumberProduct();
		d.write("Odd Number Product: " + oddNumberProduct.oddsProduct);


	};

	return new main();
};

var oddNumberProduct = function() {
	var toNumber = 15;
	var odds = [];
	var oddProduct = 1; // First odd number! Don't let this be zero!
	// Start at 2, 1 is unneeded
	for (var i = 2; i <= toNumber; i++) {
		if ((i % 2) !== 0) {
			odds.push(i); // this is an odd, due to a remainder
			oddProduct = oddProduct * i;
		}
	}

	return {
		odds: odds,
		oddsProduct: oddProduct
	};

};