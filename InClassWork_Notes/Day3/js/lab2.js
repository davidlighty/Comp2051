/*
	Comp 2051 JS 
	Day 3 - Lab 2
	RNG for Dice
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
			var die = new dice(6);
			msg.set("New die with " + die.sides + " sides");
			msg.set("Create Table");
			htmlModule.createTable("table");
			for (var i = 0; i < 30; i++) {
				msg.set("Create Row");
				htmlModule.createRow();
				msg.set("Create Cell");
				htmlModule.createCellInCurrentRow("You rolled: ");
				htmlModule.createCellInCurrentRow(die.Roll());
				// Done
			}
		}

	return new main();
};


var dice = function(dSides) {
	this.sides = dSides;
	this.Roll = function() {
		return Math.floor(Math.random() * (this.sides) + 1);
	}
}