/*
	Comp 2051 JS 
	Assignment 4 | Lab 13
	Arrays
	David Lighty

	Tortise and Hare
*/

var hare = function() {
	this.position = 0;
	this.moves = [];
	this.move = function(roll) {
		var value = 0;
		if (roll <= 3) {
			value = 1; // Small Hop
		} else if (roll <= 5) {
			value = -2; // Small Slip
		} else if (roll == 6) {
			value = -12; // Big Slip
		} else if (roll <= 8) {
			value = 8; // Big Hop
		} else {
			value = 0; // Sleeping
		}
		this.moves.push(value);
		return value;
	}
}

var tortise = function() {
	this.position = 0;
	this.moves = [];
	this.move = function(roll) {
		var value = 0;
		if (roll <= 5) {
			value = 3; // Fast Plod
		} else if (roll <= 7) {
			value = -6; // Slip
		} else {
			value = 1; // Slow Plod
		}
		this.moves.push(value);
		return value;
	}
}

var gameModule = function(squares) {
	var d = document;
	var theHare = new hare();
	var theTortise = new tortise();
	this.boardSquares = squares;
	this.allRolls = [];



	this.roll = function() {
		var roll = Math.floor(Math.random() * 10 + 1);
		this.allRolls.push(roll);
		return roll;
	}

	this.drawBoard = function(hPos, tPos) {
		d.write("<hr style='width:70em;margin-left:0;font-size:12px;'/>");
		// Draw a -- for each space.
		for (var i = 0; i < this.boardSquares; i++) {
			//d.write("&nbsp;-&nbsp;");
		}
		d.write("<br/>");
		for (var i = 0; i < this.boardSquares; i++) {
			if (hPos == tPos && hPos == i) {
				d.write("<span style='width:1em;font-size:12px;display:inline-block;'>Ouch</span>");
			} else if (i == hPos) {
				d.write("<span style='width:1em;font-size:12px;display:inline-block;'>H</span>");
			} else if (i == tPos) {
				d.write("<span style='width:1em;font-size:12px;display:inline-block;'>T</span>");
			} else {
				d.write("<span style='width:1em;font-size:12px;display:inline-block;'>&nbsp;</span>");
			}
		}
	}

	// Main Game Loop
	d.write("<h1>Tortise v Hare Race</h1>");
	while (true) {
		var newRoll = this.roll();
		var hareMove = theHare.move(newRoll);
		theHare.position = ((theHare.position == 0 && hareMove <= 0) || theHare.position + hareMove < 0) ? 0 : theHare.position + hareMove;

		var tortiseMove = theTortise.move(newRoll);
		theTortise.position = ((theTortise.position == 0 && tortiseMove <= 0) || theTortise.position + tortiseMove < 0) ? 0 : theTortise.position + tortiseMove;

		// Create View
		this.drawBoard(theHare.position, theTortise.position);

		if (theHare.position >= 70) {
			// Hare wins!
			d.write("<hr/>");
			d.write("Hare won!");
			break;
		} else if (theTortise.position >= 70) {
			// Tortise wins!
			d.write("<hr/>");
			d.write("Tortise won!");
			break;
		}

	}
}