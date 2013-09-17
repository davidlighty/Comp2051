/*
	Comp 2051 JS 
	Task 21
	David Lighty
*/

var mainModule = function() {
	var msg;
	var htmlModule;

	var d = document;
	var dB = document.body;

	var employee;

	var makeInputAndLabel = function(name, id) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", id));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	}
	var newEmployeeForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "employeeForm");
		formEle.appendChild(makeInputAndLabel("Name: ","Name"));
		formEle.appendChild(makeInputAndLabel("Pay Rate: ","PayRate"));
		formEle.appendChild(makeInputAndLabel("Hours Worked? ","HoursWorked"));
		htmlModule.cntDiv.appendChild(formEle);
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Add Employee";
		var btn = htmlModule.createElement("button", "getEmployeeBtn");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Adding Employee");
			var _name = d.getElementById("Name").value;
			var _payRate = d.getElementById("PayRate").value;
			var _hoursWorked = d.getElementById("HoursWorked").value;
			showEmployeeData(new Employee(_name, _payRate, _hoursWorked));
		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}

	var showEmployeeData = function(emp) {
		if (d.getElementById("allEmployees") != null) {
			htmlModule.cntDiv.removeChild(d.getElementById("allEmployees"));
		}
		var employeeTable = htmlModule.createElement("div", "employeeData");
		var cnt = emp.name + " worked: " + emp.hoursWorked + "hours for $" + emp.grossPay;
		employeeTable.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p"), cnt));
		htmlModule.cntDiv.appendChild(employeeTable);
	}

	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			newEmployeeForm();
			addGetInputBtn();
		}

	return new main();
}

var Employee = function(name, rate, hours) {
	//
	this.name = name;
	this.payRate = rate;
	this.hoursWorked = hours;
	this.hoursOver = 0;
	if(this.hoursWorked>40){
		this.hoursOver=this.hoursWorked-40;
		this.hoursWorked=40;
	}
	//
	this.grossPay = (this.payRate * this.hoursWorked) + (this.payRate * this.hoursOver * 1.5);
}