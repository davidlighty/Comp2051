/*
	Comp 2051 JS 
	Task 6
*/

var mainModule = function() {
	var msg;
	var htmlModule;

	var d = document;
	var dB = document.body;

	var userVar;
	var userInputDate;
	var employees = []; //Array of Employees

	// Get User Input
	var getUserInput = function(promptTxt) {
		msg.set("Prompt for: " + promptTxt);
		var temp = prompt(promptTxt, "");
		msg.set("Prompt answer: " + temp);
		return temp;
	}
	var makeInputAndLabel = function(name) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", name));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	}
	var newEmployeeForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "employeeForm");
		formEle.appendChild(makeInputAndLabel("Name"));
		formEle.appendChild(makeInputAndLabel("PayRate"));
		formEle.appendChild(makeInputAndLabel("HoursWorked"));
		formEle.appendChild(makeInputAndLabel("OvertimeRate"));
		formEle.appendChild(makeInputAndLabel("Deductions"));
		formEle.appendChild(makeInputAndLabel("TaxRate"));
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
			var _payRate =  d.getElementById("PayRate").value;
			var _hoursWorked =  d.getElementById("HoursWorked").value;
			var _overtimeRate =  d.getElementById("OvertimeRate").value;
			var _deductions =  d.getElementById("Deductions").value;
			var _taxrate =  d.getElementById("TaxRate").value;
			employees.push(new Employee(_name, _payRate, _hoursWorked, _overtimeRate, _deductions, _taxrate));
			showEmployeeData();
		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}

	var showEmployeeData = function() {
		if (d.getElementById("allEmployees") != null) {
			htmlModule.cntDiv.removeChild(d.getElementById("allEmployees"));
		}
		var employeeTable = htmlModule.createElement("div", "allEmployees");
		if (employees.length > 0) {
			//Loop employee array and output
			for (var i = 0; i <= employees.length - 1; i++) {
				var emp = employees[i]; //type of Employee
				var cnt = emp.name + " worked: " + emp.hoursWorked + " Gross Pay: " + emp.grossPay + " | Net Pay: " + emp.netPay;
				employeeTable.appendChild(htmlModule.appendAndCreateTextNode(htmlModule.createElement("p"), cnt));
			}
		}
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

var Employee = function(name, rate, hours, overtimerate, deductions, taxrate) {
	//
	this.name = name;
	this.payRate = rate;
	this.hoursWorked = hours;
	this.overtimeRate = overtimerate;
	this.deductions = deductions;
	this.taxRate = taxrate;
	//
	this.grossPay = this.payRate * this.hoursWorked;
	this.netPay = (this.grossPay - this.deductions) - (this.grossPay * this.taxRate);
}