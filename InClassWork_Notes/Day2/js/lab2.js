/*
	Comp 2051 JS 
	Day 2 - Lab 2
	Control Statements
	David Lighty

	Askt he user if they want to add or subtact 2 numbers.
	If they choose add, add.
	If they user chooses subtract, clarify which numbers they want to subtract.

*/

var mainModule = function() {
	var msg, htmlModule;

	var d = document;
	var dB = document.body;

	var makeInputAndLabel = function(name, id) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", id));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	}
	var outputToContentDiv = function(cnt) {
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), cnt));
	}
	var newCalcForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "calcForm");
		formEle.appendChild(makeInputAndLabel("X: ", "x"));
		formEle.appendChild(makeInputAndLabel("Operation: ", "operation"));
		formEle.appendChild(makeInputAndLabel("Y: ", "y"));
		htmlModule.cntDiv.appendChild(formEle);
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Calculate";
		var btn = htmlModule.createElement("button", "getValues");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Get Calc Values");
			var _x = parseInt((d.getElementById("x")) ? d.getElementById("x").value : 0);
			var _y = parseInt((d.getElementById("y")) ? d.getElementById("y").value : 0);
			var _operation = (d.getElementById("operation")) ? d.getElementById("operation").value : operationEnum.Add;
			var calc = new calculator(_x, _y);
			calc.operation = (_operation === "+") ? operationEnum.Add : (_operation === "-") ? operationEnum.Subtract : null;
			if (calc.result() != "No Result") {
				outputToContentDiv("Result: " + calc.num1 + " " + calc.operation + " " + calc.num2 + "=" + calc.result());
			} else {
				outputToContentDiv("Error with operation");
			}
		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));

	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			newCalcForm();
			addGetInputBtn();
		}

	return new main();
}


var calculator = function(x, y) {
	this.num1 = x;
	this.num2 = y;
	this.operation = operationEnum.Add;
	this.result = function() {
		if (this.operation === operationEnum.Add) {
			return x + y;
		} else if (this.operation === operationEnum.Subtract) {
			return x - y;
		} else {
			//Error.
			return "No Result";
		}
	}
}

var operationEnum = {
	Add: "+",
	Subtract: "-"
}