/*
	Comp 2051 JS 
	Task 20
	David Lighty
*/

var mainModule = function() {
	var msg;
	var htmlModule;

	var d = document;
	var dB = document.body;

	var saleItems = [];
	var sumSales = 0;
	var basePay = 0;
	var commissionRate = 0;


	var outputToContentDiv = function(cnt) {
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), cnt));
	}

	var getSaleItem = function() {
		return prompt("Sale Item Amount? ", 0);
	}

	var getBasePay = function() {
		return prompt("Base Pay? ", 0);
	}

	var getComissionRate = function() {
		return prompt("Comission %", 0);
	}

	var getSaleItems = function() {
		var stp = 0;
		while (!stp) {
			var item = parseFloat(getSaleItem());
			sumSales += item;
			saleItems.push(item);
			if (!window.confirm("Another Item?")) {
				stp = 1;
			}
		}
	}

	var parseAndDisplayOutput = function() {
		msg.set("Parse Output");
		var totalPayment = (sumSales * commissionRate) + basePay;
		outputToContentDiv("Total Sales: " + (saleItems.length) + " : $" + sumSales + " Total Payment: $" + totalPayment);
		}

		// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			getSaleItems();
			basePay=parseInt(getBasePay());
			commissionRate=parseFloat(getComissionRate());
			parseAndDisplayOutput();

		}

		return new main();
	}