/*
	Comp 2051 JS 
	Assignment 4 | Lab 2
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

	var empForm = function(x) {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "empForm");
		for (var i = 0; i < x; i++) {
			formEle.appendChild(makeInputAndLabel("Employee[" + i + "] Sales: ", "num" + i));
		}
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Get Salary Breakdown", function(x) {
			msg.set("Eval and get the salary breakdown");
			var startFunc = Date().getTime();
			var employees = [];
			for (var i = 0; i < x; i++) {
				employees.push(salaryValue(d.getElementById("num" + i).value));
			}

			// Print out the breakdown
			htmlModule.outputToContentDiv(" $200:"+salaryInRange(employees,300));
			htmlModule.outputToContentDiv(" $300:"+salaryInRange(employees,400));
			htmlModule.outputToContentDiv(" $400:"+salaryInRange(employees,500));
			htmlModule.outputToContentDiv(" $500:"+salaryInRange(employees,600));
			htmlModule.outputToContentDiv(" $600:"+salaryInRange(employees,700));
			htmlModule.outputToContentDiv(" $700:"+salaryInRange(employees,800));
			htmlModule.outputToContentDiv(" $800:"+salaryInRange(employees,900));
			htmlModule.outputToContentDiv(" $900:"+salaryInRange(employees,1000));
			htmlModule.outputToContentDiv(" $1000+:"+salaryInRange(employees,"1000+"));

			var endFunc = Date().getTime();
			msg.set("Elapse time :" + endFunc - startFunc);
			htmlModule.outputToContentDiv(result);
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
			htmlModule.outputToContentDiv("Grading");
			// Setup Form.
			empForm();
		}

	return new main();
};


var salaryValue = function(salary) {
	var basePay = 200;
	var percent = 9;
	return basePay + (salary * (percent / 100));
}

// Range is +-100, where range is the upper limit.
var salaryInRange = function(empArray, range) {
	var count = 0;
	for (var i = 0; i < empArray.length; i++) {
		if(range=="1000+" && empArray[i]>1000){
			count++; // Bad shortcut.
		}else if (empArray[i] >= (range - 100) && empArray[i] < range) {
			count++;
		}
	}
	return count;
}