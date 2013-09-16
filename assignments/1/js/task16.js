/*
	Comp 2051 JS 
	Task 16
*/

var mainModule = function() {
	var msg;
	var htmlModule;

	var d = document;
	var dB = document.body;

	var userVar;
	var userInputDate;
	var employees = []; //Array of Employees

	// Get User Input
	var getUserInput = function(promptTxt) {
		msg.set("Prompt for: " + promptTxt);
		var temp = prompt(promptTxt, "");
		msg.set("Prompt answer: " + temp);
		return temp;
	}
	var makeInputAndLabel = function(name, defaultVal) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		var inputEle = htmlModule.createElement("input", name);
		if (isNaN(defaultVal)) {
			defaultVal = 0;
		}
		inputEle.value = defaultVal;
		labelEle.appendChild(inputEle);
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	}
	var newNumberForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "numberForm");
		formEle.appendChild(makeInputAndLabel("Number1"));
		formEle.appendChild(makeInputAndLabel("Number2"));
		formEle.appendChild(makeInputAndLabel("Number3"));
		htmlModule.cntDiv.appendChild(formEle);
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Submit";
		var btn = htmlModule.createElement("button", "getNumber");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Adding Employee");
			var _num1 = parseInt(d.getElementById("Number1").value);
			var _num2 = parseInt(d.getElementById("Number2").value);
			var _num3 = parseInt(d.getElementById("Number3").value);
			var cnt = "Entered: " + _num1 + ", " + _num2 + ", " + _num3 + " Their sum: " + (_num1 + _num2 + _num3);
			htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), cnt));
		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			newNumberForm();
			addGetInputBtn();
		}

	return new main();
}