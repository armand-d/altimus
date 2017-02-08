'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('GameCtrl', function($rootScope,$scope,$http) {
	$rootScope.colorBg = '#333';
	$rootScope.animate = 'view-animate-left';

	var game = this;

	(function($){
		$.fn.Center = function(){
			this.css({
				'position' 	: 'fixed',
				'left'		: '50%',
				'top'		: '50%'
			});
			this.css({
				'margin-left'	: -this.width()/2 + 'px',
				'margin-top'	: -this.height()/2 + 'px'
			});
		};	
	})(jQuery);

	$scope.inscGame = function(){
		var data = {
	        firstName: game.firstName,
	        lastName: game.lastName,
	        society : game.society,
			fonction : game.fonction,
			phone : game.phone,
			mobile : game.mobile,
			email : game.email,
			question : game.question
	    };

		$http.post('/api/game', data)
	        .success(function() {
	        	$('.game-form form').fadeOut();
	        	$('.game-success').removeClass('hide');
				$('.game-success').Center();
	        	localStorage.setItem('game',true);
	        })
	        .error(function() {
	        });
	}
});