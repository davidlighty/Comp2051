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
			var strToTest = prompt("Palindrome Tester:", "ABCBA");
			var result = palindromeModule(strToTest);
			if (!result) {
				alert("Not a palindrome or invalid entry. 5 or more odd characters.");
			} else {
				d.write(strToTest + " is a palindrome!");
			}

			if (!confirm("Another?")) {
				more = false;
			}
		}

	}

	return new main();
};


/// Test a given string if it is a palindrome ABCBA
var palindromeModule = function(strToTest) {
	strToTest += ""; // make sure it's a string
	if ((strToTest.length % 2) == 0) {
		return false; // No even numbers
	}
	// walk inwards from both ends if any don't equate, fail.
	// take half and remove 1
	for (var i = 0; i < (strToTest.length - 1 / 2); i++) {
		var str1 = strToTest.charAt(i); // From the starting half
		var str2 = strToTest.charAt(strToTest.length - i); // From the ending half
		msg.set("str1: " + str1 + "str2: " + str2);
		if (str1 != str2) {
			return false; //fail.
		}
	}

}