/*
	Comp 2051 JS 
	Task 16
*/

var mainModule = function() {
	var msg;
	var htmlModule;

	var d = document;
	var dB = document.body;

	var outputToContentDiv = function(cnt) {
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), cnt));
	}

	var mathFunction = function(x, y, z) {
		var sum = (x + y + z) + 1;
		if (sum > 10) {
			cnt = "Count (" + sum + ") is greater than 10";
			outputToContentDiv(cnt);
		}
		sum -= --x; // sum-=(x-1); // sum = sum - (x-1);
	}

	var remainderFunction = function(dividend, d) {
		var divided = dividend / d;
		var remainder = dividend % d;
		// remainder = dividend - (divisor * integer portion of float answer)
		var remainder2 = dividend - (d * Math.floor(divided));

		outputToContentDiv("Division:  " + dividend + " / " + d + " = " + divided);
		outputToContentDiv("Remainder:% " + remainder);
		outputToContentDiv(" ");
		msg.set("Divided Math.floor: " + Math.floor(divided));
		outputToContentDiv("Remainder: " + remainder2);
	}


	var sumFunction = function() {
		var sum = 0;
		var x = 1;
		sum = sum + x;
		cnt = "The sum is:" + sum;
		outputToContentDiv(cnt);
	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			mathFunction();
			remainderFunction(213, 7);
			sumFunction();
		}

	return new main();
}