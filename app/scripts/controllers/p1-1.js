'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('P1-1Ctrl', function($rootScope) {
	$rootScope.colorBg = '#0D5A7A';
	$rootScope.animate = 'view-animate-left';

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

	$('.menu-agency').CenterHorizontal();

});