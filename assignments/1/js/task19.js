/*
	Comp 2051 JS 
	David Lighty
	Task 19
*/

var mainModule = function() {
	var msg;
	var htmlModule;

	var d = document;
	var dB = document.body;

	var outputToContentDiv = function(cnt) {
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), cnt));
	}

	// Get User Input
	var makeInputAndLabel = function(name, id, defaultVal) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		var inputEle = htmlModule.createElement("input", id);
		if (isNaN(defaultVal)) {
			defaultVal = 0;
		}
		inputEle.value = defaultVal;
		labelEle.appendChild(inputEle);
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	}
	var accountInfoForm = function(tanks) {
		msg.set("Account Balance Form");
		var formEle = htmlModule.createElement("form", "accountForm");
		formEle.appendChild(makeInputAndLabel("Account #", "accountNum"));
		formEle.appendChild(makeInputAndLabel("Previous Balance", "prevBalance"));
		formEle.appendChild(makeInputAndLabel("Total Charges", "charges"));
		formEle.appendChild(makeInputAndLabel("Total Payments", "payments"));
		formEle.appendChild(makeInputAndLabel("Credit Limit", "creditLimit"));
		htmlModule.cntDiv.appendChild(formEle);
	}

	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Submit";
		var btn = htmlModule.createElement("button", "");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Adding Account");
			var _accountN = d.getElementById("accountNum").value;
			var _lBal = d.getElementById("prevBalance").value;
			var _tChrg = d.getElementById("charges").value;
			var _tPaym = d.getElementById("payments").value;
			var _cLmt = d.getElementById("creditLimit").value;
			var currentAccount = new BankAccount(_accountN, _lBal, _tChrg, _tPaym, _cLmt);
			msg.set(currentAccount.toString());
			if (currentAccount.creditLeft > 0) {
				// More to spend!
				outputToContentDiv("$"+currentAccount.creditLeft + " Credit is left.");
			} else if (currentAccount.creditLeft < 0) {
				// Fees!
				outputToContentDiv("-$"+currentAccount.creditLeft + " Credit is overlimit.");
			} else {
				// Zero balance.
				outputToContentDiv("$"+currentAccount.creditLeft + " No credit left.");
			}
		}


		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			accountInfoForm();
			addGetInputBtn();
		}

	return new main();
}

// Bank Accout Class
var BankAccount = function(accountN, lBal, tChrg, tPaym, cLmt) {
	this.accountNum = accountN;
	this.lastBalance = lBal;
	this.totalCharges = tChrg;
	this.totalPayments = tPaym;
	this.creditLimit = cLmt;
	this.creditLeft = this.creditLimit - (this.lastBalance + this.totalPayments - this.totalCharges);
	this.toString = function() {
		return "Account:[" + this.accountNum + "] Last Balance:[" + this.lastBalance + "] Total Charges:[" + this.totalCharges + "] Total Payments:[" + this.totalPayments + "] Credit Limit:[" + this.creditLimit;
	}
}