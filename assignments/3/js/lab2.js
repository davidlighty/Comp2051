/*
	Comp 2051 JS 
	Assignment 3 | Lab 2
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

		var more = true;
		// Base Fee $2, Base Hour 3h, AdditionFee 0.50, PerTimeSlice for fee $0.50
		var parkingFees = new parkingGarage(2.00, 3, 0.50, 0.5, 10.00);
		while (more) {
			var parkedHours = parseFloat(prompt("How many hours?", 0)); // Allow 3.5 hours!
			parkedHours = (parkedHours > 24) ? 24 : parkedHours.toFixed(2); // Don't go over 24! if not trim to 2 places.
			msg.set("Input: " + parkedHours);
			d.write("Parking Fee: " + parkingGarage.getFee(parkedHours));
			if (!confirm("Another?")) {
				more = false;
			}
		}

	}

	return new main();
};

///
// Calc parking fees
///
var parkingGarage = function(baseCharge, baseHours, addFee, addFeeTimeSlice, maxFee) {
	this.baseFee = baseCharge; // Base Fee 
	this.baseHours = baseHours; // Base Hours Block
	this.addFee = addFee; // Additional Fee per addHours Block
	this.addFeeTimeSlice = addFeeTimeSlice; // Additional Hours Block 0.5 hours
	this.maxFee = maxFee;
	this.allFees = []; // Array of all fees created

	// Returns actual fee
	this.getFee = function(hoursParked) {
		var fee = this.baseFee;
		if (hoursParked > this.baseHours) {
			//We need to charge more.
			fee = ((hoursParked - this.baseHours) / this.addFeeTimeSlice) * this.addFee;
		}

		// Determine if the fee is above our max fee we can charge.
		fee = (fee > this.maxFee) ? this.maxFee : fee;
		this.allFees.push({
			"hours": hoursParked,
			"fee": fee
		}); // Save it.
		return fee; // Return it.
	}

}