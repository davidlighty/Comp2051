/*
	Comp 2051 JS 
	Day 2 - Lab 1
	Control Statements
	David Lighty

*/

var mainModule = function() {
	var msg, htmlModule;

	var d = document;
	var dB = document.body;

	var numOfExamQuestions = 21;
	var worth = 5;
	var bouns = 2;

	var exam = new Exam();

	var makeInputAndLabel = function(name, id) {
		var labelEle = htmlModule.appendAndCreateTextNode(htmlModule.createElement("label", ""), name);
		labelEle.appendChild(htmlModule.createElement("input", id));
		labelEle.appendChild(htmlModule.createElement("br", ""));
		return labelEle;
	}
	var newExamForm = function() {
		msg.set("Add Form");
		var formEle = htmlModule.createElement("form", "examForm");
		formEle.appendChild(makeInputAndLabel("Current Grade: ", "cGrade"));
		for (var i = 0; i < numOfExamQuestions; i++) {
			formEle.appendChild(makeInputAndLabel("Q" + i + " score: ", "q" + i));
		}
		formEle.appendChild(makeInputAndLabel("BonusQ: ", "qBonus"));
		htmlModule.cntDiv.appendChild(formEle);
	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Submit Grades";
		var btn = htmlModule.createElement("button", "getGradesBtn");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Adding Exam Questions");
			var currentGrade = parseFloat((d.getElementById("cGrade")) ? d.getElementById("cGrade").value : 0);
			var bonusQ = parseInt((d.getElementById("qBonus")) ? d.getElementById("qBonus").value : 0);
			if(bonusQ>0){
				exam.questions.push(new ExamQuestion(bonusQ,worth+bonus));
			}
			for (var i = 0; i < numOfExamQuestions; i++) {
				var score = parseInt((d.getElementById("q" + i)) ? d.getElementById("q" + i).value : 0);
				var newExamQ = new ExamQuestion(score, worth);
				exam.questions.push(newExamQ);
				msg.set(newExamQ.toString());
			}
			showEmployeeData(new Employee(_name, _payRate, _hoursWorked));
		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			newExamForm();
			addGetInputBtn();
		}

	return new main();
}

/*

	Exam Question
	Take X number of questions
	Get score
	Assign grades/worth
	Assign bonus

*/

var Exam = function() {
	this.questions = []; //All ExamQuestions
	this.toString = function() {
		return "Exam with " + this.questions.length + " questions";
	}
	this.grade=function(){
		var g=0;
		for(var i=0;i<this.questions.length;i++){
			g+=this.questions[i].grade;
		}
	}
}

var ExamQuestion = function(score, worth) {
	this.score = score;
	this.worth = worth;
	this.grade = score / worth;
	this.isCorrect = false;
	this.toString = function() {
		return "Exam score : " + score;
	}
}