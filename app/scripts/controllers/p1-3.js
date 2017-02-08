'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('P1-3Ctrl', function($rootScope) {
	$rootScope.colorBg = '#889411';
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