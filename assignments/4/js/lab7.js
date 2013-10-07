/*
	Comp 2051 JS 
	Assignment 4 | Lab 7
	Arrays
	David Lighty

	Craps
	http://www.wikihow.com/Play-Craps

*/

// Create a die
var die = function(sides) {
	this.sides = sides;
	this.roll = function() {
		return Math.floor(Math.random() * this.sides + 1);
	}
}

// Create a new crapsModule
// placePassBet(s), roll, then scoreTheRoll
var crapsModule = function(argument) {
	this.placePassBet = function(playerName, money) {
		this.passBarBets.push({
			player: playerName,
			bet: money
		});
	}

	this.roll = function() {
		// Handle the roll
		var theRoll = (theDice[0].roll() + theDice[1].roll());
		this.playerRolls.push(theRoll);
		return theRoll;
	}

	this.scoreTheRoll = function(currentRoll) {
		if (this.isComeOutRoll) {
			if (currentRoll == 2 || currentRoll == 3 || currentRoll == 12) {
				// Everyone loses, start over.
				this.collectMoneyAndClearBets(this);
				return rollEnum.LOSE;
			} else if (currentRoll == 7 || currentRoll == 11) {
				// Win
				this.payBets(1, this); // 1 to 1 payouts
				this.passBarBets = [];
				return rollEnum.WIN;
			} else {
				// Point
				this.currentPoint = currentRoll;
				this.isComeOutRoll = false;
				return rollEnum.ROLL;
			}
		} else {
			if (currentRoll == this.currentPoint) {
				// win
				this.isComeOutRoll = true;
				this.payBets(1, this); // same player, new round.
				this.passBarBets = [];
				return rollEnum.WIN;
			} else if (currentRoll == 7) {
				// lose
				this.collectMoneyAndClearBets(this);
				this.isComeOutRoll = true;
				theDice = this.newDice(); // New player/round.
				return rollEnum.LOSE;
			} else {
				// Nothing happens.
				return rollEnum.ROLL;
			}
		}

	}

	this.collectMoneyAndClearBets = function() {
		var sum = 0;
		for (var i = 0; i < this.passBarBets.length; i++) {
			sum += this.passBarBets[i].bet;
		}
		this.lostMoney = this.houseMoney += sum;
		this.passBarBets = [];
	}

	this.payBets = function(betPercent) {
		var totalWon = 0;
		for (var i = 0; i < this.passBarBets.length; i++) {
			this.passBarBets[i].bet += this.passBarBets[i].bet;
			this.currentPayouts.push(this.passBarBets[i]);
			totalWon += this.passBarBets[i].bet;
		}
	}

	this.newDice = function() {
		return [new die(6), new die(6)];
	}



	// Init
	var theDice;
	this.currentPoint = 0; // current point, zero = no point.
	this.isComeOutRoll = true; // before the first point.

	// Hold the current bets
	this.passBarBets = [];
	this.houseMoney = 0;
	this.lostMoney = 0;
	this.currentPayouts = [];

	// Hold a history of rolls for a round
	this.playerRolls = [];
	theDice = this.newDice();
}

var rollEnum = {
	WIN: {},
	LOSE: {},
	ROLL: {}
};

// Layout and Output
// Global
var arrModule; // util.js
var msg; // util.js

// Main Module - this holds the init and page creation logic  ((Controller))
var labModule = function() {
	var htmlModule; // This doesn't need to be a global.

	var d = document; // shortcut variable, I just don't want to write document everywhere.
	var dB = document.body;
	var crapsTable;

	// Centralized logic to create a label and input with specified name & id
	// Probably could refactor this to html.js
	var makeInputAndLabel = function(name, id) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", id));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	};

	var crapsForm = function(x) {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "crapsForm");
		formEle.appendChild(makeInputAndLabel("Place Pass Bar Bet: ", "bet"));
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Roll", function(x) {
			msg.set("Eval and get roll and winnings.");
			var startFunc = new Date().getTime();

			var playerBet = d.getElementById("bet").value;
			crapsTable.placePassBet("Shooter", parseInt(playerBet));
			var more = true;
			while (more) {
				var playerRoll = crapsTable.roll();
				msg.set("Rolled:" + playerRoll);
				var didIWin = crapsTable.scoreTheRoll(playerRoll);
				msg.set(didIWin);
				if (didIWin == rollEnum.WIN) {
					htmlModule.outputToContentDiv("Winner! $" + crapsTable.currentPayouts[0].bet);
					more = false;
				} else if (didIWin == rollEnum.LOSE) {
					htmlModule.outputToContentDiv("Lost! House now has: $" + crapsTable.houseMoney);
					more = false;
				}
			}

			htmlModule.outputToContentDiv("You took " + crapsTable.playerRolls.length + " rolls.");
			crapsTable.playerRolls = [];

			var endFunc = new Date().getTime();
			msg.set("Elapse time :" + endFunc - startFunc);
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
			htmlModule.outputToContentDiv("Craps, Pass bets only.");
			// Setup Form.
			crapsTable = new crapsModule();
			// Run 1k rounds
			var rounds = 1000;
			var wins = 0;
			var lose = 0;
			var rollsPerRound = [];
			var allRollsSum = 0;
			var sampleBet = 5;
			var sampleAccount = 1000;
			while (rounds--) {
				//htmlModule.outputToContentDiv("Betting: "+sampleBet);
				crapsTable.placePassBet("Shooter", sampleBet);
				var more = true;
				while (more) {
					var playerRoll = crapsTable.roll();
					msg.set("Rolled:" + playerRoll);
					var didIWin = crapsTable.scoreTheRoll(playerRoll);
					msg.set(didIWin);
					if (didIWin == rollEnum.WIN) {
						htmlModule.outputToContentDiv("Winner! $" + crapsTable.currentPayouts[0].bet);
						sampleAccount += crapsTable.currentPayouts[0].bet;
						more = false;
						wins++;
						sampleBet++;
						msg.set("Increase bet $1");
					} else if (didIWin == rollEnum.LOSE) {
						htmlModule.outputToContentDiv("Lost! House now has: $" + crapsTable.houseMoney);
						sampleAccount -= sampleBet;
						more = false;
						lose++;
						sampleBet = 5;
						msg.set("Reset bet");
					}
				}
				rollsPerRound.push(crapsTable.playerRolls.length);
				allRollsSum += crapsTable.playerRolls.length;
				crapsTable.playerRolls = [];
				crapsTable.currentPayouts=[];
			}
			htmlModule.outputToContentDiv("Avg rolls per round: " + (allRollsSum / 1000));
			htmlModule.outputToContentDiv("You won: " + ((wins / 1000).toFixed(2) * 100) + "%");
			htmlModule.outputToContentDiv("If you started with $1000, you now have: $" + sampleAccount);
			crapsForm();
		}

	return new main();
};