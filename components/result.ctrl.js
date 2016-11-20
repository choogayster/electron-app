app.controller('resultCtrl', function(MainFactory){
	var ctrl = this;
	ctrl.model = {
		questions : [],
		generalResult : 0
	}

	ctrl.init = function () {
		ctrl.model.questions = MainFactory.get('questions');
		for (var i = 0; i < ctrl.model.questions.length; i++) {
			var applicant = ctrl.model.questions[i].trueAnswer == ctrl.model.questions[i].input;
			ctrl.model.generalResult = ctrl.model.generalResult + applicant;
		}
	}

	ctrl.init();
});