/*
	Comp 2051 JS 
*/

var noHTML = function() {
	var msg;

	var d = document;
	var dB = document.body;

	var cntDivID; // main content div/section
	var headerDivID;
	var footerDivID;

	var userVar;
	var userInputDate;

	// Globals

	var createElement = function(ele, id) {
		var temp = d.createElement(ele);
		temp.id = id;
		return temp;
	}
	var appendAndCreateTextNode = function(ele, cnt) {
		var tempCnt = d.createTextNode(cnt);
		ele.appendChild(tempCnt);
		return ele;
	}


	// Create HTML items
	var createHeader = function() {
		msg.set("Create Header");
		headerDivID = "nohtml-header";
		var headerElement = createElement("header", headerDivID);
		dB.appendChild(headerElement);
	}
	var createSection = function() {
		msg.set("Create Main Section");
		cntDivID = "nohtml-section";
		var mainSectionElement = createElement("section", cntDivID);
		var wrap = createElement("div", "wrap");
		wrap.setAttribute("class", "pageWrap");
		wrap.appendChild(mainSectionElement);
		dB.appendChild(wrap);
	}
	var createFooter = function() {
		msg.set("Create Footer");
		footerDivID = "nohtml-footer";
		var footerElement = createElement("footer", footerDivID);
		dB.appendChild(footerElement);
	}

	// Get User Input
	var getUserInput = function(promptTxt) {
		msg.set("Prompt for: " + promptTxt);
		var temp = prompt(promptTxt, "");
		msg.set("Prompt answer: " + temp);
		return temp;
	}

	// Process User
	var greetUserWithName = function() {
		msg.set("greetUesrWithName");
		userInputDate = Date.now();
		var cnt = getDayGreeting(new Date().getHours()) + userVar; //+ " entered at: " + userInputDate;
		alert(cnt);
		var temp = createElement("p", "pUsername");
		temp = appendAndCreateTextNode(temp, cnt);
		var cntEle = d.getElementById(cntDivID);
		cntEle.appendChild(temp);
	}

	// Get Proper Greeting based on the hour of day
	var getDayGreeting = function(hour) {
		msg.set("getDayGreeting");
		var greeting;
		if (isNaN(hour)) greeting = "No hour given!";
		if (hour < 12) {
			greeting = "Good Morning";
		} else if (hour >= 12) {
			// afternoon
			if (hour - 12 < 6) greeting = "Good Afteroon";
			// evening
			if (hour - 12 >= 6) greeting = "Good Evening";
		}
		return greeting + ", "; // add space
	}

	// Process Sum
	var sumUserNumbers = function(n1, n2) {
		msg.set("sumUserNumbers");
		userInputDate = Date.now();
		if (isNaN(n1)) n1 = 1;
		if (isNaN(n2)) n2 = 1;
		var sum = n1 + n2;
		var cnt = "Sum of " + n1 + " and " + n2 + " = " + sum; //+ " entered at: " + userInputDate;;
		alert(cnt);
		var temp = createElement("p", "pSumInfo");
		temp = appendAndCreateTextNode(temp, cnt);
		var cntEle = d.getElementById(cntDivID);
		cntEle.appendChild(temp);
	}

	var createNoHtml = function() {
		// Base HTML
		createHeader();
		createSection();
		createFooter();

		// User Input
		userVar = getUserInput("Name: ");

		// Validate
		if (userVar === null || userVar === "") {
			userVar = "No Name Given";
		}
		greetUserWithName();
		sumUserNumbers(parseInt(getUserInput("Num1:")), parseInt(getUserInput("Num2:")));
	}

	// Constructor

		function noHtml() {
			msg = new statusMsg();
			msg.set("Starting NoHtml Module");
			this.createNoHtml = createNoHtml;
		}

	return new noHtml();
}