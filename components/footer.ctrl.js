app.controller('footerCtrl', function(MainFactory){
	var ctrl = this;
	ctrl.model = {
		isUser : MainFactory.getIsUser,
		lName : MainFactory.getUserLName,
		fName : MainFactory.getUserFName,
		group : MainFactory.getGroup
	}
});