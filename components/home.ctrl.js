app.controller('homeCtrl', function(QuestionsSrv, MainFactory, $state) {
	var ctrl = this;
	ctrl.model = {
		avar : 'close',
		variants : QuestionsSrv.getQuestions(),
		userDataEntered : false,
		user : {},
		isUser : false
	};
	ctrl.group = '';

	ctrl.submit = function () {
		ctrl.model.userDataEntered = true;
		if (ctrl.model.user.lName || ctrl.model.user.fName || ctrl.model.user.fName) {
			ctrl.setUser();
		}
	}

	ctrl.back = function () {
		ctrl.model.userDataEntered = false;
	}

	ctrl.goVariant = function (variant) {
		MainFactory.put('variantNum', variant);
		$state.go('variant', { varId : variant });
	}

	ctrl.setUser = function () {
		console.log(ctrl.model.user);
		MainFactory.put('isUser', 'true');
		MainFactory.put('userLName', ctrl.model.user.lName);
		MainFactory.put('userFName', ctrl.model.user.fName);
		MainFactory.put('group', ctrl.model.user.group);
	}

	ctrl.backToVar = function () {
		ctrl.setUser();
		$state.go('variant', { varId: MainFactory.get('variantNum') });
	}

	ctrl.init = function () {
		if (MainFactory.get('isUser')) {
			ctrl.model.isUser = true;
			if (MainFactory.get('userLName')) { 
				ctrl.model.user.lName = MainFactory.get('userLName');
			}
			if (MainFactory.get('userFName')) { 
				ctrl.model.user.fName = MainFactory.get('userFName');
			}
			if (MainFactory.get('group')) { 
				ctrl.model.user.group =MainFactory.get('group') ;
			}
		}
		
	}

	ctrl.init();
});