/*
	Comp 2051 JS 
	Day 2 - Lab 3
	Control Statements
	David Lighty

	Virtual Battle
	The winner is determined by
		If player has more points than the troll, player wins.
		If player has equal or less points, but acquires a sword, player wins.
		If player has less points, but acquires flight, player draws.
		Troll wins.

	Troll get 50 points.
	Player points <?>

*/

// Global
var arrModule; 			// util.js
var msg; 				// util.js

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

		// Start battle module
		var battle = new battleModule();
		// Add Enemy
		battle.enemy = new player("Troll", playerTypeEnum.TROLL, 50);
		// Add Players
		// This should be driven by player input (get name, get type)
		battle.players.push(new player("Human", playerTypeEnum.WARRIOR, 30));
		battle.players.push(new player("Human", playerTypeEnum.MAGE, 25));
		// Do 1 round of battle.
		battle.battle();
		msg.set(battle.toString()); // Log
		battle.round++; // increment the round number.
		// Do action round
		battle.actionRound();
	}

	return new main();
};

// Battle Module Class - main module for the "battle"
var battleModule = function() {
	// Properties
	var players = []; // Array of players
	var enemy = null; // Enemy, could also be an array of enemies!
	var round = 0; // Round, mainly for stats.  Each round should be Action/Battle

	// Methods
	var battleRound = function() { // Main battle logic
		msg.set("Starting battle round [" + this.round + "]");
		for (var i = 0; i < this.players.length; i++) {
			// Player attacks first.
			var plyr = this.players[i];
			var troll = this.enemy;
			msg.set("Attacking Troll[" + troll.hp + "] with :" + plyr.attackPower());
			troll.hp -= plyr.attackPower();
			//Troll attacks!
			if (!troll.isDead()) {
				msg.set("Troll[" + troll.hp + "] attacking player[" + plyr.hp + "]");
				plyr.hp -= troll.attackPower();
			}
			msg.set(plyr.toString());
		}
		msg.set(troll.toString());
	};

	var actionRound = function() {
		// Ask the player for input on the next round of action.
		// If the player has a special item, then they are allowed special actions.
		msg.set("Starting action round [" + this.round + "]");
	}

	var toString = function() {
		return "Battle Round: " + this.round + " Troll: " + ((this.enemy.isDead()) ? "Dead!" : this.enemy.hp);
	};

	// Constructor
	var battleModule = function() {
		msg.set("Battle Module Start");
		this.round = round;
		this.enemy = enemy;
		this.players = players;
		this.toString = toString;
		this.battle = battleRound;
		this.actionRound = actionRound;
	};

	return new battleModule();
};

// Player Class
var player = function(_name, _type, _hp) {
	// Properties
	this.name = _name;
	this.type = _type;
	this.hp = _hp;
	this.items = [];

	// Methods
	this.isDead = function() {
		return (this.hp <= 0);
	};
	this.baseAttackPower = function() {

		// The great thing about assigning an enum (object) to type
		// Is that we don't need to nest if/switch statements to create some quick logic
		// this.type.baseAttack will automatically == whatever type we are and it's properties.
		return this.type.baseAttack;
	};
	this.extraAttackPower = function() {
		var modifier = 0;
		// Here we use a helper method from util.js arrayMethods that will return
		// and integer (index) of whatever we are looking for.
		if (arrModule.Contains(this.items, itemEnum.SWORD) > 0) {
			modifier += itemEnum.SWORD.value;
		}
		// In case we need to put other type conditions.
		return modifier;
	};
	this.attackPower = function() {
		// Return a value with a modifier if they have a sword.
		return this.baseAttackPower() + this.extraAttackPower();
	};
	// Common method to return some important properties in an easily readable format (and values)
	this.toString = function() {
		return (this.name + "[" + this.type.title + "]: " + this.hp + " | " + this.attackPower());
	};

	// Log
	msg.set("Creating new player: " + this.toString());
};

// Item Class
var item = function(name, value) {
	this.name = name;
	this.value = value;
};


/// ENUMS
// Enum with object of properties, self assigned
var playerTypeEnum = {
	WARRIOR: {
		title: "Warrior",
		baseAttack: 5
	},
	MAGE: {
		title: "Mage",
		baseAttack: 4
	},
	TROLL: {
		title: "Troll",
		baseAttack: 8
	}
};

// Enum with object of properties, from "base" class/method.
// Usage itemEnum.BOOTSOFFLIGHT.name would return "Boots of flight"
var itemEnum = {
	BOOTSOFFLIGHT: new item("Boots of flight", 0),
	DUSTOFFLIGHT: new item("Magic Dust", 0),
	SWORD: new item("Magic Sword", 2)
};