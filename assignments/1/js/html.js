/* 
	HTML JS Utility Class
	David Lighty
*/

var htmlUtil = function() {
	var d;
	var dB;

	var msg;

	var cntDivID; // main content div/section
	var headerDivID;
	var footerDivID;

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
	var createLayout = function() {
		//HEADER
		createHeader();
		//SECTION
		createSection();
		//FOOTER
		createFooter();
	}

	//Constructor

		function htmlUtil() {
			this.d = d = document;
			this.dB = dB = d.body;

			//Public Methods
			this.msg = msg = new statusMsg();
			this.createElement = createElement;
			this.appendAndCreateTextNode = appendAndCreateTextNode;

			createLayout();

			this.cntDiv = d.getElementById(cntDivID);
			this.headerDiv = d.getElementById(headerDivID);
			this.footerDiv = d.getElementById(footerDivID);
		}

	return new htmlUtil();

}