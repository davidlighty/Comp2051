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

		// 
		var interestCalc = new savingsAccountInterestCalculator();
		var result = interestCalc.runCalculator(10, 1000.00, 5);
		if (result) {
			//Print results
			d.write("<table>");
			for (var i = 0; i < interestCalc.allAnnualInterests.length; i++) {
				d.write("<tr><td>");
				d.write("Year: " + (i + 1));
				d.write("</td><td>");
				d.write("Interest: $" + interestCalc.allAnnualInterests[i].toFixed(2));
				d.write("</td><td>");
				d.write("Yearend Amount: $" + interestCalc.allAnnualAmounts[i].toFixed(2));
				d.write("</td><td>");
				//d.write("Form. Amount: $" + interestCalc.allFormulaAmounts[i].toFixed(2));
				d.write("</td></tr>");
			}
			d.write("</table>");
		} else {
			d.write("error: " + interestCalc.errorMsg);
		}
	}

	return new main();
};



var savingsAccountInterestCalculator = function() {
	// properties
	this.years = 0;
	this.principal = 0;
	this.currentRate = 0;
	this.errorMsg = "";
	this.allAnnualInterests = [];
	this.allAnnualAmounts = [];
	this.allFormulaAmounts = [];

	this.runCalculator = function(_years, _principal, _rate) {
		this.years = _years;
		this.principal = _principal;
		this.currentRate = _rate;
		if (this.years <= 0) {
			this.errorMsg = "Invalid year(s)";
			return null; // fail
		}
		var currentAmt = this.principal;

		for (var i = 1; i <= this.years; i++) {
			var currentInterest = annualInterest(currentAmt, this.currentRate);
			this.allAnnualInterests.push(currentInterest);
			currentAmt += currentInterest;
			this.allAnnualAmounts.push(currentAmt);
			var docFormula = documentedInterestFormula(this.principal, i, this.currentRate);
			this.allFormulaAmounts.push(docFormula);
			msg.set("Amt: " + currentAmt + " docAmt:" + docFormula);
		}
		return true;
	}

	// private methods

	// Interest for the year on a given amount, 
	var annualInterest = function(amt, ratePercent) {
		return amt * (ratePercent / 100);
	}

	// Assuming _rte is 5%, not 0.05
	var documentedInterestFormula = function(_prin, _years, _rte) {
		return (Math.pow(1 + (_rte / 100), _years) * _prin);

	}


}