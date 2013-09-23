/*
	Comp 2051 JS 
	Assignment 2 | Lab 12
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

		var more = true;
		while (more) {
			var encryptThis = prompt("Value to encrypt/decrypt?", 1234);
			var result = encryptNumber(encryptThis, true);
			d.write(result);
			if (!isNaN(result)) {
				// Valid respone, then show the deCrypt also.
				d.write(encryptNumber(result, false));
			}
			if (!confirm("Another?")) {
				more = false;
			}
		}

	}

	return new main();
};


// Encryption for a given digit
var encryptNumber = function(number, toEncrypt) {
	// Salt Values d+sumBy % modBy
	var modBy = 10;
	var sumBy = 7;

	/// Private Methods

	// Encrypt 
	// digit+7 % 10
	var encryptDigit = function(digit) {
		return (digit + 7) % 10; // Returns the remainder!!!
	}

	// Decrypt
	// remainder-7 % 10 == digit
	var deCryptDigit = function(remainder) {
		return (remainder - sumBy) % modBy;
	}

	// Take the number, rearrange/assamble
	var reArrangeOrAssemble = function(result) {
		var newResult;
		var firstChar = result.charAt(1);
		var secondChar = result.charAt(2);
		var thirdChar = result.charAt(3);
		var fourthChar = result.charAt(4);
		// Use strings to stop math!!
		return thirdChar + "" + fourthChar + "" + firstChar + "" + secondChar;
	}

	number = number + ""; // Make sure it's a string.
	this.isValid = (number.length == 4);
	if (this.isValid) {
		var newResult;
		for (var i = 0; i < number.length; i++) {
			var digit = number.charAt(i); // Current Char
			if (toEncrypt) {
				digit = encryptDigit(digit);
			} else {
				digit = deCryptDigit(digit);
			}
			newResult += "" + digit;
		}

		return reArrangeOrAssemble(newResult);
	} else {
		return "Not a valid value to encrypt";
		// Test for !isValid && -1 => show Error.
	}


}