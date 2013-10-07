/*
	Comp 2051 JS 
	Assignment 4 | Lab 6
	Arrays
	David Lighty

	Dice!

*/

var diceProgram = function(numOfDice, dieSides, numRolls) {
	this.dice = [];
	this.highestValue = numOfDice * dieSides;
	this.rolls = [];
	this.evals = [];
	// create and roll the dice.
	while (numOfDice--) {
		this.dice.push(new die(dieSides));
	}

	while (numRolls--) {
		var sum = 0;
		for (var d = 0; d < this.dice.length; d++) {
			sum += this.dice[d].roll();
		}
		this.rolls.push(sum);
	}

	// Loop our possible values and find all occurances in the total rolls.
	this.evaluatedValues = function() {
		var count = 0;
		for (var i = 0; i < this.highestValue; i++) {
			for (var r = 0; r < this.rolls.length; r++) {
				count += (this.rolls[r] == i) ? 1 : 0;
			}
		}
		this.evals.push(new evalObject(i, count, ((count / this.highestValue) * 100).toFixed(2)));
	}


}

var evalObject = function(value, numOfRolls, percentage) {
	return {
		value: value,
		totalRolls: numOfRolls,
		percent: percentage
	};
}

// Create a die
var die = function(sides) {
	this.sides = sides;
	this.roll = function() {
		this.rolls.push(Math.floor(Math.random() * this.sides + 1));
		return this.rolls(rolls.length);
	}
}