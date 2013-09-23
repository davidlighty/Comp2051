/*
	Comp 2051 JS 
	Assignment 2 | Lab 2
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
			more = true,
			students = 0;

		// Get Quiz input
		while (more) {
			students++;
			var score = parseFloat(prompt("Score", 0));
			if (isNaN(score)) {
				//fail 
			} else {
				(score >= 0 || score <= 100) ? scores.push(score) : null;
			}
			if (!confirm("Another")) {
				more = false;
			}
		}

		// Output classAverage
		var quiz = new quizModule(scores, students);
		d.write(quiz.classAverage());
	}

	return new main();
};

/*
	Determine class average based upon a set of scores
*/
var quizModule = function(_scores, _studentCount) {
	var scores = _scores;
	var studentCount = _studentCount;
	this.classAverage = function() {
		var sum = 0;
		for (var i = 0; i < scores.length; i++) {
			sum += parseInt(scores);
		}
		return sum / studentCount;
	}
}
