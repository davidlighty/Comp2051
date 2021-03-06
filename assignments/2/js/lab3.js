/*
	Comp 2051 JS 
	Assignment 2 | Lab 1
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

		// Initilize variables
		var scores = [],
			more = true;

		// Get Quiz input
		while (more) {
			var score = prompt("Pass or Fail? (1 or 2)", 0);
			if (isNaN(score) || score != 1 || score != 2) {
				//fail
			} else {
				scores.push(score);
				if (!confirm("Another")) {
					more = false;
				}
			}
		}

		// Output classAverage
		var quiz = new quizModule(scores);
		d.write("Results: "+ quiz.passedStudents +" passed and "+ quiz.failedStudents +" failed.");
		if(quiz.passedStudents >= 8){
			d.write(quiz.passedResult)
		}

	}

	return new main();
};

/*
	Determine class average based upon a set of scores
*/
var quizModule = function(_scores) {
	var scores = _scores;
	var examCount = _scores.length;
	
	this.passedStudents = function() {
		var passed = 0;
		for (var i = 0; i < scores; i++) {
			if (scores[i] == 1) {
				passed++;
			}
		}
		return passed;
	}
	this.passedResult = function() {
		return "Raise tuition";
	}
	this.failedStudents = function() {
		return this.examCount - this.passedStudents();
	}
}