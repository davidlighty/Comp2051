/*
	Comp 2051 JS 
	Day 3 - Lab 1
	Control Statements
	David Lighty

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

	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");

			var x1 = parseInt(prompt("Num1: ", 1));
			var x2 = parseInt(prompt("Num2: ", squareThis(x1))); // Let me help you pick the higher limit...suggestion.
			msg.set("Create Table");
			htmlModule.createTable("table");
			for (var i = x1; i <= x2; i++) {
				msg.set("Create Row");
				htmlModule.createRow();
				var mySquare = squareThis(i);
				msg.set("Create Cell");
				htmlModule.createCellInCurrentRow("Square of: " + i);
				htmlModule.createCellInCurrentRow(mySquare);
				// Done
			}

		}

	return new main();
};

var squareThis = function(x) {
	return Math.pow(x, 2);
};