'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('LoadCtrl', function($rootScope,$state) {
	$rootScope.colorBg = '#FFF';
	$rootScope.animate = 'view-animate-left';


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

	$('.icon').Center();
	$('.i-1').delay(1000).fadeIn('slow');
	$('.i-2').delay(1500).fadeIn('slow');
	$('.i-3').delay(2000).fadeIn('slow');
	$('.i-4').delay(2500).fadeIn('slow');
	
	setTimeout(function(){
		if ($(window).width() <= 770) {
		    $state.go('mobile');
		} else {
			$state.go('home');
		}
	}, 3500);

});