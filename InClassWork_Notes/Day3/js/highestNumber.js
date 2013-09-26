//Examples of functions to find the highest number
// David Lighty A00843511
// Comp 2051

var highNumber1 = function(x1, x2, x3) {
	// method 1 the LONG way.
	var highest = (x1 > x2 && x1 > x3) ? x1 : (x2 > x1 && x2 > x3) ? x2 : x3));
var highest = (((x1 > (x2 > x3) ? x2 : x3)) ? x1, (x2 > x3) ? x2 : x3);
};

var highNumber2 = function(arrNumbers) {
	// method 2 takes an variable set of numbers and get the highest.
	var highest = arrNumbers[0]; // Always assume first postition is highest ;)
	for (var i = 0; i < arrNumbers.length, i++) {
		highest = (highest > arrNumbers[i]) ? highest : arrNumbers[i]; // Bubble out the highest.
		// OR
		highest = Math.max(highest, arrNumbers[i]);
	}
};

var highNumber3 = function(x1, x2, x3) {
	//Use Math.max
	var highest = Math.max(x1, Math.max(x2, x3));
};