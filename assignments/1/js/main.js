/*
	Comp 2051 JS 
	Tasks 1-4
	David Lighty
*/

var mainModule = function() {
	var msg;
	var htmlModule;

	var d = document;
	var dB = document.body;

	var userVar;
	var userInputDate;

	// Get User Input
	var getUserInput = function(promptTxt) {
		msg.set("Prompt for: " + promptTxt);
		var temp = prompt(promptTxt, "");
		msg.set("Prompt answer: " + temp);
		return temp;
	}

	var runTask1 = function() {
		msg.set("Run Task1");
		var str = task1();
		msg.set(str);
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", htmlModule.cntDiv.ID), str));
	}
	var runTask2 = function() {
		msg.set("Run Task2");
		var str = task2();
		msg.set(str);
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", htmlModule.cntDiv.ID), str));
	}
	var runTask3 = function() {
		msg.set("Run Task3");
		var str = task3();
		msg.set(str);
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", htmlModule.cntDiv.ID), str));
	}
	var runTask4 = function(){
		msg.set("Run Task4");
		var inpt = getUserInput("Pet Name: ");
		msg.set("Pet Name:" + inpt);
		var str="Your dog, Spike, is brown. " + inpt + " is also brown.";
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", htmlModule.cntDiv.ID), str));	
	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");

			// Task1
			runTask1();
			// Task2
			runTask2();
			// Task3
			runTask3();
			// Task4
			runTask4();
					}

	return new main();
}

var task1 = function() {
	return "Spike is a great dog!";
}

var task2 = function() {
	var age = 1;
	var years = 2;
	var newAge = age + years;
	return newAge;
}

var task3 = function() {
	return "In 4 years Spike will be 6 years old.";
}