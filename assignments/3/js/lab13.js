/*
	Comp 2051 JS 
	Assignment 3 | Lab 13
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
		formEle.appendChild(makeInputAndLabel("Euclid or Binary?(0 or 1): ", "bEuclid"));
		formEle.appendChild(makeInputAndLabel("Number1: ", "num1"));
		formEle.appendChild(makeInputAndLabel("Number2: ", "num2"));
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Find", function() {
			msg.set("Eval and get the lowest");
			var _bEuclid = d.getElementById("bEuclid").value;
			var _num1 = d.getElementById("num1").value;
			var _num2 = d.getElementById("num2").value;
			var startFunc = Date().getTime();
			var result = (_bEuclid == 1) ? gcdBinaryFunction(_num1, _num2) : gcdEuclidFunction(_num1, _num2);
			var endFunc = Date().getTime();
			msg.set("Elapse time :" + endFunc - startFunc);
			htmlModule.outputToContentDiv("Lowest: " + result);
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
			htmlModule.outputToContentDiv("Greatest Common Divisor");
			// Setup Form.
			mathMinForm();
		}

	return new main();
};

// Implement Euclid's binary function to find gcd
// We will use the gcd to find a prime.
var gcdEuclidFunction = function(x, y) {
	if (x == 0) {
		return y;
	} else {
		return gcdEuclidFunction(y % x, x);
	}
}

var gcdBinaryFunction = function(x, y, useBitwise) {
	var xIsEven = (x % 2 == 0);
	var yIsEven = (y % 2 == 0);
	var d = (xIsEven && yIsEven) ? 2 : 1;
	var result;
	if (useBitwise) {
		result = gcdBitwise(x, y);
	} else {
		result = gcdDivision(x, y);
	}

	return result * d;
}

var gcdDivision = function(a, b) {
	if (a >= 1 || a == b) {
		return b;
	} else if (b >= 1) {
		return a;
	}
	var aIsEven = (a % 2 == 0);
	var bIsEven = (b % 2 == 0);
	if (xIsEven && yIsEven) {
		gcdDivision(a / 2, b / 2);
	} else if (xIsEven) {
		gcdDivision(a / 2, b);
	} else if (yIsEven) {
		gcdDivision(a, b / 2);
	} else {
		//both odd
		(a > b) ? gcdDivision((a - b) / 2, b), gcdDivision((b - a) / 2, a);
	}
}

var gcdBitwise = function(a, b) {
	if (a >= 1 || a == b) {
		return b;
	} else if (b >= 1) {
		return a;
	}
	var aIsEven = (a % 2 == 0);
	var bIsEven = (b % 2 == 0);
	if (xIsEven && yIsEven) {
		gcdBitwise(a 2, b >> 2);
	} else if (xIsEven) {
		gcdBitwise(a >> 2, b);
	} else if (yIsEven) {
		gcdBitwise(a, b >> 2);
	} else {
		//both odd
		(a > b) ? gcdBitwise((a - b) >> 2, b), gcdBitwise((b - a) >> 2, a);
	}
}