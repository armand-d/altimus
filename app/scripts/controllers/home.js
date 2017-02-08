'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the altimusApp
 */
angApp.controller('HomeCtrl', function($rootScope,$scope) {
	$rootScope.colorBg = '#333';
	$rootScope.animate = 'view-animate-fade';

	var home = this;

	(function($){
		$.fn.Center60 = function(){
			this.css({
				'position' 	: 'absolute',
				'left'		: '50%',
				'top'		: '60%'
			});
			this.css({
				'margin-left'	: -this.width()/2 + 'px',
				'margin-top'	: -this.height()/2 + 'px'
			});
		};	
	})(jQuery);

	(function($){
		$.fn.Center = function(){
			this.css({
				'position' 	: 'absolute',
				'left'		: '50%',
				'top'		: '50%'
			});
			this.css({
				'margin-left'	: -this.width()/2 + 'px',
				'margin-top'	: -this.height()/2 + 'px'
			});
		};	
	})(jQuery);

	(function($){
		$.fn.CenterVertical = function(){
			this.css({
				'top'		: '47%'
			});
			this.css({
				'margin-top'	: -this.height()/2 + 'px'
			});
		};	
	})(jQuery);

	(function($){
		$.fn.CenterHorizontal = function(){
			this.css({
				'left'		: '50%',
			});
			this.css({
				'margin-left'	: -this.width()/2 + 'px',
			});
		};	
	})(jQuery);

	$('.content-home').Center60();
	$('.logo').Center();
	$('.u-1').CenterHorizontal();
	$('.u-2').CenterVertical();
	$('.u-4').CenterHorizontal();
	$('.u-6').CenterVertical();


});
