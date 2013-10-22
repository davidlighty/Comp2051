/*
	Comp 2051 JS 
	Assignment 6 | Lab 1
	AJAX Feedback Form
	David Lighty

*/

// Global
var arrModule; // util.js
var msg; // util.js


// Main Module - this holds the init logic  ((Controller))
var labModule = function() {
	var htmlModule; // This doesn't need to be a global.
	var ajaxModule;

	var d = document; // shortcut variable, I just don't want to write document everywhere.
	var dB = document.body;

	var feedbackMessages; //Array of messages.
	var allowedEmails = [];

	// output validation feedback
	var printFeedback = function(msgArray) {
		var feedbackSection = d.getElementById('feedbackSection');
		clearElement(feedbackSection);
		for (var i = 0; i < msgArray.length; i++) {
			feedbackSection.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p", ""), msgArray[i]));
		}
	}

	var validateForm = function(theForm) {
		feedbackMessages = [];
		var isValid = true;
		if (theForm.elements.length <= 0) {
			// Error
			isValid = false;
		}
		for (var i = 0; i < theForm.elements.length; i++) {
			var oField = theForm.elements[i];
			var sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : oField.nodeName.toUpperCase();
			msg.set('Form Element: ' + oField.id + " " + sFieldType + " " + theForm.elements[i].value);
			if (sFieldType === "TEXT" || sFieldType === "TEXTAREA") {
				if (oField.value.length <= 0) {
					// Empty
					feedbackMessages.push("Cannot be empty: " + oField.id);
					isValid = false;
				} else if (sFieldType === "TEXT" && oField.id == "email") {
					// Is this a valid email addy?
					if (validateEmail(oField.value)) {
						// Is this an allowed email addy?
						if (allowedEmails.length > 0) {
							if (arrModule.Contains(allowedEmails, oField.value) >= 0) {
								feedbackMessages.push(oField.value + ' is not allowed.');
								isValid = false;
							} else {
								feedbackMessages.push("This email is allowed.");
							}
						}
					} else {
						isValid = false;
						feedbackMessages.push("Invalid email format.");
					}
				}
			}
		}

		return isValid;
	}

	// regex borrowed form SO

		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}

		// Ajax call to get list of allowed email addresses.
		// In a real server enviornment, I'd pass the email TO the server.
		// But for the assignment, we are going to pull down an XML file, parse it, and check.
	var getAllowedEmailAddresses = function(xmlData) {
		msg.set("Got XML");
		var allowedNode = xmlData.getElementsByTagName('allowedEmails');
		var emailNodes = allowedNode[0].getElementsByTagName('email');
		msg.set("Allowed Count: " + emailNodes.length);
		for (var i = 0; i < emailNodes.length; i++) {
			var emailVal = emailNodes[i].childNodes[0].nodeValue;
			msg.set('Allowed:' + emailVal)
			allowedEmails.push(emailVal);
		}
	}

	// Constructor
	// Creates and initilizes, returns view.

		function main() {
			htmlModule = new htmlUtil(); // View creation / HTML logic
			arrModule = new arrMethods(); // Array Method shortcuts
			ajaxModule = new ajaxUtil(); // ajax calls in util.js
			msg = htmlModule.msg; // Logging
			msg.set("Starting Module");

			var formID = 'feedbackForm';
			var formSubmit = 'submitBtn';

			feedbackMessages = [];
			ajaxModule.GET('./allowedEmails.xml', getAllowedEmailAddresses, true);

			var submitBtn = d.getElementById(formSubmit);
			submitBtn.onclick = function(e) {
				e.preventDefault();
				var isValid = validateForm(d.forms[formID]);
				if (isValid) {
					feedbackMessages.push("Thank you for your feedback.");
				}
				if (feedbackMessages.length > 0) {
					printFeedback(feedbackMessages);
				}
			}
		}

	return new main();
};
