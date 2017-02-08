'use strict';

/**
 * @ngdoc overview
 * @name altimusApp
 * @description
 * # altimusApp
 *
 * Main module of the application.
 */
var angApp = angular.module('altimusApp', ['ui.router','ngAnimate']);

angApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
		.state('load', {
			url: '/',
			templateUrl: 'views/load.html',
			controller: 'LoadCtrl',
			controllerAs: 'load'
		})
		.state('home', {
			url: '/accueil',
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'home'
		})
		.state('p1', {
			url: '/agence',
			templateUrl: 'views/p1.html',
			controller: 'P1Ctrl',
			controllerAs: 'p1'
		})
		.state('p1-1', {
			url: '/agence/manifeste',
			templateUrl: 'views/p1-1.html',
			controller: 'P1-1Ctrl',
			controllerAs: 'p1-1'
		})
		.state('p1-2', {
			url: '/agence/valeurs',
			templateUrl: 'views/p1-2.html',
			controller: 'P1-2Ctrl',
			controllerAs: 'p1-2'
		})
		.state('p1-3', {
			url: '/agence/organisation',
			templateUrl: 'views/p1-3.html',
			controller: 'P1-3Ctrl',
			controllerAs: 'p1-3'
		})
		.state('p1-4', {
			url: '/agence/vision',
			templateUrl: 'views/p1-4.html',
			controller: 'P1-4Ctrl',
			controllerAs: 'p1-4'
		})
		.state('p2', {
			url: '/vous',
			templateUrl: 'views/p2.html',
			controller: 'P2Ctrl',
			controllerAs: 'p2'
		})
		.state('p3', {
			url: '/nos-savoir-faire/digital-et-web-developpement',
			templateUrl: 'views/p3.html',
			controller: 'P3Ctrl',
			controllerAs: 'p3'
		})
		.state('p3-1', {
			url: '/nos-savoir-faire/webmarketing',
			templateUrl: 'views/p3-1.html',
            		controller: 'P3Ctrl',
            		controllerAs: 'p3'
		})
		.state('p3-2', {
			url: '/nos-savoir-faire/fundraising',
			templateUrl: 'views/p3-2.html',
            		controller: 'P3Ctrl',
            		controllerAs: 'p3'
		})
		.state('p3-3', {
			url: '/nos-savoir-faire/communication-interne',
			templateUrl: 'views/p3-3.html',
            		controller: 'P3Ctrl',
            		controllerAs: 'p3'
		})
		.state('p4', {
			url: '/nous',
			templateUrl: 'views/p4.html',
			controller: 'P4Ctrl',
			controllerAs: 'p4'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl',
			controllerAs: 'contact'
		})
		.state('game', {
			url: '/plein-phare-sur-2016',
			templateUrl: 'views/game.html',
			controller: 'GameCtrl',
			controllerAs: 'game'
		})
		.state('altimus-administrator', {
			url: '/altimus-administrator',
			templateUrl: 'views/admin.html',
			controller: 'AdminCtrl',
			controllerAs: 'admin'
		});
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
});


angApp.run(function($state,$rootScope){
	$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){
		    if (localStorage.getItem('game') == 'true') {
		    	$rootScope.isGame = true;
		    }
		    if (localStorage.getItem('isLogged') == 'true' ) {
		    	$rootScope.isLogged = true;	
		    }
		}
	)
});
