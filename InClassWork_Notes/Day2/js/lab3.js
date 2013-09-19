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
var arrModule;
var msg;

var labModule = function() {
	var htmlModule;

	var d = document;
	var dB = document.body;

	var makeInputAndLabel = function(name, id) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", id));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	};

	// Constructor

	function main() {
		htmlModule = new htmlUtil();
		arrModule = new arrMethods();
		msg = htmlModule.msg;
		msg.set("Starting Module");
		var battle = new battleModule();
		battle.enemy = new player("Troll", playerTypeEnum.TROLL, 50);
		battle.players.push(new player("Human", playerTypeEnum.WARRIOR, 30));
		battle.players.push(new player("Human", playerTypeEnum.MAGE, 25));
		battle.battle();
	}

	return new main();
};


var battleModule = function() {
	var players = [];
	var enemy = null;
	var round = 0;
	var battleRound = function() {
		// Main battle logic
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

	var actionRound = function(){
		// Ask the player for input on the next round of action.
		// If the player has a special item, then they are allowed special actions.
	}

	var toString = function() {
		return "Battle Round: " + this.round + " Troll is at:" + (this.enemy) ? this.enemy.hp : "Dead!";
	};

	var battleModule = function() {
		msg.set("Battle Module Start");
		this.round = round;
		this.enemy = enemy;
		this.players = players;
		this.toString = toString;
		this.battle = battleRound;
	};

	return new battleModule();
};

var player = function(_name, _type, _hp) {
	this.name = _name;
	this.type = _type;
	this.hp = _hp;
	this.items = [];

	this.isDead = function() {
		return (this.hp <= 0);
	};
	this.baseAttackPower = function() {
		return this.type.baseAttack;
	};
	this.extraAttackPower = function() {
		var modifier = 0;
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
	this.toString = function() {
		return (this.name + "["+ this.type.title +"]: " + this.hp + " | " + this.attackPower());
	};

};

var item = function(name, value) {
	this.name = name;
	this.value = value;
};


/// ENUMS
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

var itemEnum = {
	BOOTSOFFLIGHT: new item("Boots of flight", 0),
	DUSTOFFLIGHT: new item("Magic Dust", 0),
	SWORD: new item("Magic Sword", 2)
};