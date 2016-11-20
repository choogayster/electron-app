app.controller('variantCtrl', function(QuestionsSrv, MainFactory, $stateParams, $state){
	var ctrl = this;
	ctrl.model = {
		avar : 'getTrue',
		variant : parseInt($stateParams.varId),
	}

	ctrl.back = function () {
		$state.go('home');
	}

	ctrl.selectAnswer = function (q, index) {
		q.input = index;
		console.log(q);
	}

	ctrl.init = function() {
		ctrl.model.questions = QuestionsSrv.getQuestion(ctrl.model.variant).questions;
		console.log(ctrl.model.questions);
	}

	ctrl.result = function() {
		MainFactory.put('questions', ctrl.model.questions);
		$state.go('result');
	}

	ctrl.init();
});