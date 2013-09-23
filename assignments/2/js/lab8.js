/*
	Comp 2051 JS 
	Assignment 2 | Lab 8
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

		// Get input
		// Use dummy data

		// Dummy Data
		var sales = [239.99, 129.75, 99.95, 350.89];
		var commission = commissionModule(sales, 200, 9);
		d.write(commission.toString());

	}

	return new main();
};


// sales == array of sales (float)
// basePay == float/int for pay for the period in question
// commissionRate == percent (as float ~ 2.9% == .029) <== function makes it .029
var commissionModule = function(sales, basePay, commissionRate) {
	// Private
	var commissions = 0;
	var realCommissionRate = commissionRate / 100; // Move it two decimals backwards.

	// Public 
	this.totalSales = 0;
	this.totalCommissions = 0;
	this.averageCommission = this.totalCommissions / sales.length;
	this.totalPay = basePay + this.totalCommissions;

	this.toString = function() {
		return "Total Sales: $" + this.totalSales + ", Earnings: $" + this.totalPay;
	}

	// Loop all sales and calculate commission stats
	var getCommissions = function() {
		for (var i = 0; i < sales.length; i++) {
			this.totalSales += sales[i];
			commissions.push(sales[i] * realCommissionRate);
			this.totalCommissions += commissions[i]; // This just saves a variable, could add confusion.
		}
	}
}