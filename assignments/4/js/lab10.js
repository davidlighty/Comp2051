/*
	Comp 2051 JS 
	Assignment 4 | Lab 10,11,12
	Arrays
	David Lighty

	Sieve of Eratosthenes
*/

// Find all primes from 0 - to limit with multiple sieve
var sieveModule = function(findPrimesLimit) {
	var numberArray = [];
	while (findPrimesLimit--) {
		numberArray.push(1);
	}
	numberArray[0] = numberArray[1] = 0;
	var lastPrimeFound = 0;

	for (var k = 0; k < numberArray.length; k++) {
		if (numberArray[k] == 1) {
			lastPrimeFound = k;
			// this will be 2 on the first run, then 3, then 7...etc.
			// All others are marked zero below as multiples of the other primes.

			// Don't test anything below our current prime.
			for (var i = lastPrimeFound+1; i < numberArray.length; i++) {
				if (numberArray[i] == 1 && (i % lastPrimeFound == 0)) {
					numberArray[i] = 0; // not prime.
				}
			}
		}
	}

	return numberArray;
}



// Layout and Output
// Global
var arrModule; // util.js
var msg; // util.js

// Main Module - this holds the init and page creation logic  ((Controller))
var labModule = function() {
	var htmlModule; // This doesn't need to be a global.

	var d = document; // shortcut variable, I just don't want to write document everywhere.
	var dB = document.body;

	// Constructor
	// Creates and initilizes, returns view.

	function main() {
		htmlModule = new htmlUtil(); // View creation / HTML logic
		arrModule = new arrMethods(); // Array Method shortcuts
		msg = htmlModule.msg; // Logging
		msg.set("Starting Module");
		htmlModule.outputToContentDiv("Primes by Sieve of Erathosthenes.");
		// Setup Form.
		var numArray = sieveModule(1000);
		for (var i = 0; i < numArray.length; i++) {
			if (numArray[i] == 1) {
				htmlModule.outputToContentDiv("Prime: " + i);
			}
		}

	}

	return new main();
};