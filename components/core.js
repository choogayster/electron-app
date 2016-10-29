var app = angular.module('MathControl', ['ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('home', {
		url : '/home',
		views : {
			'content' : {
				templateUrl : 'components/home.html',
				controller : 'homeCtrl',
				controllerAs : 'vm'
			}
		}
	}).state('variant', {
		url : '/variant/:varId',
		views : {
			'content' : {
				templateUrl : 'components/variant.html',
				controller : 'variantCtrl',
				controllerAs : 'vm'
			}
		}
	}).state('result', {
		url : '/result',
		views : {
			'content' : {
				templateUrl : 'components/result.html',
				controller : 'resultCtrl',
				controllerAs : 'vm'
			}
		}
	})
});