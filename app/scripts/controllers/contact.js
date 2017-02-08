'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the altimusApp
 */
angApp.controller('ContactCtrl', function($rootScope) {
	$rootScope.colorBg = '#333';
	$rootScope.animate = 'view-animate-top';

	$('.open').hide()

	$('.closeUp').on('click',function(){
		$('.open').show();
		$(this).hide();
		$('.contact').css({
			'left' : '97%',
			'right': '0%'
		});
		$('.opacity').css({
			'left' : '100%',
			'right': '0%'
		});
	});

	$('.open').on('click',function(){
		$('.closeUp').show();
		$(this).hide();
		$('.contact').css({
			'left' : '',
			'right': ''
		});
		$('.opacity').css({
			'left' : '',
			'right': ''
		});
	});

});