Day 2 Labs
=============

Various programs to demonstrate control statements.

Lab 3 - Battle 
--------------
Took this in class lab further than the expected example.
The inclass example was to show basic input and if statements based upon that input with nested if statements.

Modified to add modules, enums, objects, and closures.

* battleModule:
	* Base overall module for the battle itself.
	* players array of player class
	* enemy of player class
	* round : count of the current round
	* battleRound : conduct attacks on players v enemy
	* actionRound : conduct/input from player(s) on what action to take.
* player:
	* Class object to setup properties and methods
	* toString for showing basic current stats
	* items	: array of itemEnum
	* baseAttackPower : returns underlying enum objects value
		* this could easily be turned into db type call for values.
	* extraAttackPower : returns attack modifier based upon current inventory of items.
* playerTypeEnum
	* Custom objects with two properties for title/baseAttack
* itemEnum
	* item objects with name/value
	* shows that the object can pull in an object via function vs. playerTypeEnum (basically the same thing!)

There is no real output yet or player input.  We use some dummy data to show that our logic is working.
There are no real nested if statements anymore as they have all been refactored out to different module properties.