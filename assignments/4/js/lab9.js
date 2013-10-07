/*
	Comp 2051 JS 
	Assignment 4 | Lab 9
	Arrays
	David Lighty

	Sales Module with a 2 dimensional array

*/

var salesModule = function() {

	this.allSales = [];
	//var saleSlip = [product,value,employee];
	// allSales will hold each saleSlip

	this.inputSale = function(productNum, value, employeeNum) {
		this.allSales.push([productNum, value, employeeNum]);
	}

	this.getEmployeeSales = function(employeeNum) {
		var sum = 0;
		for (var i = 0; i < this.allSales.length; i++) {
			if (this.allSales[i][2] == employeeNum) {
				sum += this.allSales[i][1];
			}
		}
		return sum;
	};

	this.getProductSales = function(productNum) {
		var sum = 0;
		for (var i = 0; i < this.allSales.length; i++) {
			if (this.allSales[i][0] == productNum) {
				sum += this.allSales[i][1];
			}
		}
		return sum;
	};

	this.getEmployeeProductSales = function(p, e) {
		var sum = 0;
		for (var i = 0; i < this.allSales.length; i++) {
			if (this.allSales[i][0] == p && this.allSales[i][2] == e) {
				sum += this.allSales[i][1];
			}
		}
		return sum;
	}

	var setSampleData = function() {
		while (31--) { // 31 Day month loop.
			for (var i = 0; i < 4; i++) {
				var randomNumberOfSales = Math.floor(Math.random() * 5 + 1);
				var randomProduct = getSampleProduct(0);
				while (randomNumberOfSales--) {
					randomProduct = getSampleProduct(randomProduct);
					var randomSaleValue = Math.floor(Math.random() * 25 + 1);
					this.inputSale(randomProduct, randomSaleValue, i);
				}
			}
		}
	}

	// Not unique, but don't return the same one twice in a row.
	var getSampleProduct = function(oldProductNum) {
		var randomProduct = Math.floor(Math.random() * 5 + 1);
		while (oldProductNum == randomProduct) {
			randomProduct = Math.floor(Math.random() * 5 + 1);
		}
		return randomProduct;
	}

	setSampleData();
};



// Layout and Output
// Global
var arrModule; // util.js
var msg; // util.js

// Main Module - this holds the init and page creation logic  ((Controller))
var labModule = function() {
	var htmlModule; // This doesn't need to be a global.

	var d = document; // shortcut variable, I just don't want to write document everywhere.
	var dB = document.body;
	var crapsTable;

	// Centralized logic to create a label and input with specified name & id
	// Probably could refactor this to html.js
	var makeInputAndLabel = function(name, id) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", id));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	};


	// We will set the button onclick to the callbackFunc parameter!
	var addGetInputBtn = function(txt, callbackFunc) {
		msg.set("Adding Button");
		var btn = htmlModule.createElement("button", "getResultBtn");
		// Add click behaviour
		btn.onclick = callbackFunc;
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, txt));
	}

	// Main Form and Input
	var salesForm = function(x) {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "salesForm");
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Show Data", function(x) {
			msg.set("Parse and show.");
			var startFunc = new Date().getTime();
			var salesData = new salesModule();
			var totalSales = salesData.allSales.length;
			htmlModule.createTable("empData");
			
			// Headers
			htmlModule.createRow();
			htmlModule.createCellInCurrentRow("Employee"); // No employee
			for (var p = 0; p < 5; p++) {
				// Query and output this product total sales.
				htmlModule.createCellInCurrentRow("Product " + p);
			}
			htmlModule.createCellInCurrentRow("Totals"); // No employee

			// Output Data by Employee x Product (Y is employee and X is Product)
			// Loop Empolyees, parse and output each product and then a sum total.
			for (var k = 0; k < 4; k++) {
				htmlModule.createRow();
				htmlModule.createCellInCurrentRow("Emp" + k);	// k = employee
				var thisEmployeeTotal = salesData.getEmployeeSales(k);
				for (var p = 0; p < 5; p++) {
					// Query and output this employee product sales.
					htmlModule.createCellInCurrentRow("$" + salesData.getEmployeeProductSales(p, k));
				}
				htmlModule.createCellInCurrentRow("Total: $" + thisEmployeeTotal.toFixed(2));
			}
			// Product Totals
			htmlModule.createRow();
			htmlModule.createCellInCurrentRow(""); // No employee
			for (var p = 0; p < 5; p++) {
				// Query and output this product total sales.
				htmlModule.createCellInCurrentRow(salesData.getProductSales(p));
			}

			htmlModule.createCellInCurrentRow(""); // No employee


			var endFunc = new Date().getTime();
			msg.set("Elapse time :" + endFunc - startFunc);
		});

	}


	// Constructor
	// Creates and initilizes, returns view.

		function main() {
			htmlModule = new htmlUtil(); // View creation / HTML logic
			arrModule = new arrMethods(); // Array Method shortcuts
			msg = htmlModule.msg; // Logging
			msg.set("Starting Module");
			htmlModule.outputToContentDiv("Show Sales Data");
			// Setup Form.
			salesForm();
		}

	return new main();
};