/*
	Comp 2051 JS 
	Task 18
	David Lighty
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
	var makeInputAndLabel = function(id, name, defaultVal) {
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
	var newNumberForm = function(tanks) {
		msg.set("Milage Form");

		if (tanks > 0) {
			var tanksEle = htmlModule.createElement("form", "tanksForm");
			for (var i = 0; i < tanks; i++) {
				msg.set("Add Tank " + i);
				tanksEle.appendChild(makeInputAndLabel("Gallons" + i,"Gallons:",0));
				tanksEle.appendChild(makeInputAndLabel("Miles" + i,"Miles:"));
			}
			htmlModule.cntDiv.appendChild(tanksEle);
			addGetInputBtn();
		} else {
			var formEle = htmlModule.createElement("form", "numberForm");
			formEle.appendChild(makeInputAndLabel("Tanks","Tanks"));
			htmlModule.cntDiv.appendChild(formEle);
		}

	}
	var addGetInputBtn = function() {
		msg.set("Adding Button");
		var str = "Submit";
		var btn = htmlModule.createElement("button", "List tanks");
		// Add click behaviour
		btn.onclick = function() {
			msg.set("Adding Tanks");
			var input = d.getElementById("Tanks");
			if (input) {
				var _tanks = parseInt(input.value);
				msg.set("Tanks " + _tanks);
				if (_tanks > 0) {
					clearElement(htmlModule.cntDiv);
					newNumberForm(_tanks);
				}
			} else {
				// Parse tanks input
				var stp = 0,
					milages = [],i=0;
				while (!stp) {
					msg.set("Tank");
					var tank = d.getElementById("Gallons" + i);
					var miles = d.getElementById("Miles" + i);
					if (!tank) {
						stp = true;
						continue;
					} else {
						var milage = parseInt(miles.value) /parseInt(tank.value);
						milages.push(milage);
						i++;
					}
				}
				clearElement(htmlModule.cntDiv);
				var milageAverage=0;
				for(var i=0;i<milages.length;i++){
					outputToContentDiv("Milage for Tank ["+ i +"] :"+milages[i]);
					milageAverage+=milages[i];
				}
				outputToContentDiv("Total Average Milage: "+(milageAverage/milages.length));

			}

		}
		htmlModule.cntDiv.appendChild(htmlModule.appendAndCreateTextNode(btn, str));
	}


	// Constructor

		function main() {
			htmlModule = new htmlUtil();
			msg = htmlModule.msg;
			msg.set("Starting Module");
			newNumberForm();
			addGetInputBtn();
		}

	return new main();
}