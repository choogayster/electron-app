app.factory('MainFactory', function(){
	var model = {
		isUser : false,
		userLName : '',
		userFName : '',
		group : ''

	};
	return {
		get : function (key) {
			return model[key];
		},
		put : function (key, value) {
			model[key] = value;
		},
		getIsUser : function() {
			return model['isUser'];
		},
		getUserLName : function() {
			return model['userLName'];
		},
		getUserFName : function() {
			return model['userFName'];
		},
		getGroup : function() {
			return model['group'];
		}
	};
});