/*
	Comp 2051 JS 
	Assignment 4 | Lab 1
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

	var graderForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "graderForm");
		formEle.appendChild(makeInputAndLabel("Average Grade: ", "num1"));
		htmlModule.cntDiv.appendChild(formEle);

		// Push our callback function as an argument to the button method!!
		addGetInputBtn("Reverse", function() {
			msg.set("Eval and get the grade");
			var _num1 = d.getElementById("num1").value;
			var startFunc = Date().getTime();
			var result = grader(_num1);
			var endFunc = Date().getTime();
			msg.set("Elapse time :" + endFunc - startFunc);
			htmlModule.outputToContentDiv(result);
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
			htmlModule.outputToContentDiv("Grading");
			// Setup Form.
			graderForm();
		}

	return new main();
};


// All Array tasks inside one object
// Assignment 4 Task1 
var arrayModule = function() {
	// Return from the array position index.
	this.partA = function(index) {
		var array = [1, 2, 3, 4, 5, 6, 7];
		if (index > array.length) {
			return null; // Fail.
		}

		return array[index];
	};

	// Init and return an array
	this.partB = function() {
		return [1, 2, 3, 4, 5, 6, 7, 8];
	};

	// Return sum of array elements
	this.partC = function() {
		var array = [];
		for (var i = 0; i <= 100; i++) {
			array.push(i);
		}
		// Sum array
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	};

	// Replace index of array1 with array2
	this.partD = function(array1, array2, indexToReplace) {
		if (indexToReplace > array1.length) {
			return null; // Fail.
		}
		array1[indexToReplace] = array2;
		return array1;
	};

	// find the highest and lowest item in array
	this.partE = function(array) {
		var bottom = array[0],
			top = array[0];
		for (var i = 0; i < array.length; i++) {
			bottom = (bottom < array[i]) ? bottom : array[i];
			top = (top > array[i]) ? top : array[i];
		}
		return {
			top: top,
			bottom: bottom
		};
	};

	// Create a 2x3 multi array
	this.partF = function() {
		return [[1, 1, 1], [1, 1, 1]];
	}

	// Create an array
	this.partG = function() {
		return this.partF();
	}

	// Return the length (columns) of an array
	this.partI = function(multiArray) {
		return array.length; // 2 columns
	}

	// Return the ROW count of the inner arrays.length
	this.partH = function(multiArray) {
		// Should validate that all inner arrays are the same length!
		// Validate that all inner elements are arrays!
		return multiArray[0].length; // 3
	}

	// Return CELL count
	this.partJ = function(multiArray) {
		return multiArray.length * multiArray[0].length;
	}

	// Return all CELLS in column
	this.partKANDpartL = function(multiArray, column) {
		//return multiArray[column];
		// The task says "write"
		var str = "Column:" + column + "<br/>";
		for (var i = 0; i < multiArray[column].length; i++) {
			str += "Index: " + multiArray[column][i] + "<br/>";
		}
		return str;
	}

	// Set position value of multiArray
	this.partM = function(multiArray, column, row, cnt) {
		multiArray[column][row] = cnt;
		return multiArray;
	}

	// Init array cells to zero
	this.partN = function(multiArray) {
		multiArray[0][0] = 0;
		multiArray[0][1] = 0;
		// Repeat for all columns rows....
		// or
		for (var i = 0; i < multiArray.length; i++) {
			for (var k = 0; multiArray[i].length; k++) {
				multiArray = this.partM(multiArray, i, k, 0);
			}
		}

		return multiArray;
	}

	// get the lowest num in array
	this.partP = function(multiArray) {
		var low = multiArray[0][0];
		for (var i = 0; i < multiArray.length; i++) {
			for (var k = 0; multiArray[i].length; k++) {
				low = (multiArray[i][k] < low) ? multiArray[i][k] : low;
			}
		}

		return low;
	}

	// show ROW elements
	this.partQ = function(multiArray, row) {
		var str = "Row:" + row + "<br/>";
		for (var i = 0; i < multiArray.length; i++) {
			str += "Index: " + multiArray[i][row] + "<br/>";
		}
		return str;
	}

	// Sum Column Values
	this.partR = function(multiArray, column) {
		var sum = 0;
		for (var i = 0; i < multiArray[column].length; i++) {
			sum += multiArray[column][i];
		}

		return sum;
	}

	// Create a table of the array
	// We use our htmlModule to directly output to our document content div.
	this.partS = function(multiArray) {
		htmlModule.createTable();
		for (var i = 0; i < multiArray.length; i++) {
			htmlModule.createRow();
			for (var k = 0; k < multiArray[i].lengthli++) {
				htmlModule.createCellInCurrentRow(multiArray[i][k]);
			}
		}

	}


}