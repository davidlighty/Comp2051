/*
	Comp 2051 JS 
	Task 11
	David Lighty
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
	var makeInputAndLabel = function(name,defaultVal) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		var inputEle =htmlModule.createElement("input", name);
		if(isNaN(defaultVal)){defaultVal=0;}
		inputEle.value=defaultVal;
		labelEle.appendChild(inputEle);
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	}
	var newEmployeeForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "numberForm");
		formEle.appendChild(makeInputAndLabel("Number"));
		htmlModule.cntDiv.appendChild(formEle);
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Submit";
		var btn = htmlModule.createElement("button", "getNumber");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Adding Employee");
			var _num = d.getElementById("Number").value;
			var cnt = "Entered: " + _num;
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p",""), cnt));
		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			newEmployeeForm();
			addGetInputBtn();
		}

	return new main();
}
