// Misc JS Utilities


/*
	Simple status message box overlay
*/
var statusMsg = function() {

	var tar; // Target Div
	var title; // Title
	var msgTar; //Target for Messages
	var maxCount = 50; // This + 1 = 10 max messages.

	var d = document;
	var dB = document.body;

	function set(msg) {
		var p = d.createElement("p");
		p.appendChild(d.createTextNode(msg));
		var c = msgTar.childNodes.length || 0;
		if (c > maxCount) {
			msgTar.removeChild(msgTar.lastChild);
			msgTar.insertBefore(p, msgTar.childNodes[0]);
		} else if (c > 0) {
			msgTar.insertBefore(p, msgTar.childNodes[0]);
		} else {
			msgTar.appendChild(p);
		}
	}

	function empty(c) {
		for (var i = 0; i < c; i++) {
			msgTar.removeChild(msgTar.childNodes[i]);
		}
	}

	function statusMsg() {
		this.set = set;
		this.empty = empty;

		tar = d.createElement("div");
		tar.setAttribute("class", "statusMsg");

		var title = d.createElement("h1");
		title.setAttribute("class", "title");
		tar.appendChild(title.appendChild(d.createTextNode("Status Messages")));

		msgTar = d.createElement("div");
		tar.appendChild(msgTar);


		dB.appendChild(tar);
	}

	return new statusMsg();
}

/*
	Create some methods for array handling.
*/
var arrMethods = function() {

	function Contains(arr, x) {
		//returns index location
		for (var i = 0; i <= arr.length; i++) {
			if (arr[i] == x) {
				return i;
			}
		}
	}

	function arrMethods() {
		this.Contains = Contains;

	}

	return new arrMethods();
}

//--== Clears all child elements of the supplied element.
var clearElement = function(p) {
	while (p.childNodes.length >= 1) {
		p.removeChild(p.firstChild);
	}
}

//--== Append a unique stamp to a URL GET Ruquest
var uniqueRequest = function(req) {
	return "?" + req + "&nc=" + new Date().getTime();
}

var ajaxUtil = function() {

	// Get something and return it.
	var ajax = function(requestFile) {
		// msg.set("Send Ajax GET.");
		var requestLoc = encodeURI(requestFile);
		msg.set("URL: " + requestLoc);
		r.open("GET", requestLoc, true);
		r.onreadystatechange = function() {
			if (r.readyState == 4) {
				if (statusCodeTest(r.status)) {
					if (statusCodeTest(r.status)) {
						// msg.set("Got Ajax Response");
					}
				}
			}
		}
		r.send(null);
	}

	var statusCodeTest = function(code) {
		if (code == 200) {
			msg.set(code + " : Success");
			return true;
		}
		// test for other errors!
		if (code >= 400 && code < 500) {
			msg.set("Error : " + code);
		}
	}

	var ajaxUtil = function() {
		this.GET = ajax;
	}

	return new ajaxUtil();
}