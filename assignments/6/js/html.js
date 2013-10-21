/* 
	HTML JS Utility Class
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

	var outputToContentDiv = function(cnt) {
		this.cntDiv.appendChild(appendAndCreateTextNode(createElement("p", ""), cnt));
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
	// Output the HTML
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

	// Table Functions

	// create a table
	var createTable = function(tableID) {
		this.tableEle = createElement("table", tableID);
		this.cntDiv.appendChild(this.tableEle);
	}

	// create a TR
	var createRow = function() {
		this.tableRowEle = createElement("tr", "");
		this.tableEle.appendChild(this.tableRowEle);
	}

	// Don't keep current Cell, we write to it automatically
	var createCellInCurrentRow = function(cnt) {
		this.tableRowEle.appendChild(this.appendAndCreateTextNode(createElement("td", ""), cnt));
	}

	// Ajax Calls to Template files.
	// look for ./tmpl folder with header.tmpl.html, footer.tmpl.html files


	//Constructor

		function htmlUtil() {
			this.d = d = document;
			this.dB = dB = d.body;

			/// Public Methods
			this.msg = msg = new statusMsg();
			this.createElement = createElement;
			this.appendAndCreateTextNode = appendAndCreateTextNode;
			this.outputToContentDiv = outputToContentDiv;

			/// Table Functions
			this.tableEle = null; // Most current table
			this.tableRowEle = null; // Most current table
			this.createTable = createTable;
			this.createRow = createRow;
			this.createCellInCurrentRow = createCellInCurrentRow;

			/// Create Intial Layout
			// createLayout();

			/// Assign Divs
			// this.cntDiv = d.getElementById(cntDivID);
			// this.headerDiv = d.getElementById(headerDivID);
			// this.footerDiv = d.getElementById(footerDivID);

		}

	return new htmlUtil();

}