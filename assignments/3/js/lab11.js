/*
	Comp 2051 JS 
	Assignment 3 | Lab 11
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
			var primes = [2]; // start with 2.

			// Setup Form.
			var x = 2;
			var more = true;
			while (more) {
				var startFunc = Date().getTime();
				var isPerfect = (isPrime(x)) ? perfectNumberTest(x - 1) ? true : false;
				var endFunc = Date().getTime();
				msg.set("It took: " + (endFunc - startFunc));
				if (isPerfect) {
					htmlModule.outputToContentDiv(x + " is a Perfect Number.");
				}
				if (x % 12 == 0) {
					//every multiple of 12, ask if they want to keep finding more.
					if (!confirm("Do you still want to look for more perfect numbers? x=" + x))
						more = false;
				}
				if (x == 2147483647) {
					//We cannot test higher than this in javascript, as it will bit shift the number down.
					more = false;
					htmlModule.outputToContentDiv("Must stop here, due to limits with javascript.");
					htmlModule.outputToContentDiv("2147483647 though is also a double Mersenne prime.");
					// http://en.wikipedia.org/wiki/2147483647
				}
				x += 1;
			}

			return new main();
		};


	// Test to determine if x is a prime number
	var isPrime = function(x, foundPrimes) {
		// Given x=2, first prime
		// These are quick tests to remove the easy multiples.
		if (x % 2 == 0 && x != 2) return false;
		if (x % 3 == 0 && x != 3) return false;
		// Otherwise test the square root.
		var sqrt = Math.floor(Math.sqrt(x));
		if (x % sqrt == 0) return false; // not a prime
		for (var i; i < foundPrimes.length; i++) {
			if (x % foundPrimes[i] == 0) {
				return false; // not a prime
			}
			if (foundPrimes[i] > sqrt) {
				break; // don't test higher than our square root.
			}
		}
		// no primes divide me, I'm also prime.
		return true;
	}

	// Only test numbers that are prime - 1.
	// There are no known ODD perfect, prime IS odd, so test the EVEN LOWER of Prime(s).
	// This is a take on the fact that only Mersenne primes - 1 are perfect.
	// 6, 28, ...
	var perfectNumberTest = function(x) {
		//Given x, find all my multiples.
		var multiples = [];
		var result = 1; // Start at one.
		for (var i = x; i > 1; i++) {
			if (x % i == 0) {
				multiples.push(i);
			}
		}
		for (var i = 0; i < multiples.length; i++) {
			result += multiples[i];
		}
		if (result == x) return true; // Perfect
		return false; // Not perfect
	}