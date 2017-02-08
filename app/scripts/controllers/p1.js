'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('P1Ctrl', function($rootScope,$scope) {
	$rootScope.colorBg = '#0D5A7A';
	$rootScope.animate = 'view-animate-scale';

	var p1 = this;

	/*$scope.showContent1 = function(){
		$('.elem-1 img').css({
			'transform' : 'scale(1.5)'
		});
		$('.elem-2 img').css({
			'transform' : 'scale(1)'
		});
		$('.elem-3 img').css({
			'transform' : 'scale(1)'
		});
		$('.elem-1').css({
			'left' : '5%',
			'top'  : '20%'
		});
		$('.elem-2').css({
			'left' : '95%',
			'top'  : '60%'
		});
		$('.elem-3').css({
			'left' : '95%',
			'top'  : '20%'
		});
		$('.content-1').delay(1000).fadeIn();
		$('.content-2').fadeOut();
		$('.content-3').fadeOut();
	}
	$scope.showContent2 = function(){
		$('.elem-1 img').css({
			'transform' : 'scale(1)'
		});
		$('.elem-2 img').css({
			'transform' : 'scale(1.5)'
		});
		$('.elem-3 img').css({
			'transform' : 'scale(1)'
		});
		$('.elem-2').css({
			'left' : '5%',
			'top'  : '20%'
		});
		$('.elem-1').css({
			'left' : '95%',
			'top'  : '20%'
		});
		$('.elem-3').css({
			'left' : '95%',
			'top'  : '60%'
		});
		$('.content-1').fadeOut();
		$('.content-2').delay(1000).fadeIn();
		$('.content-3').fadeOut();
	}
	$scope.showContent3 = function(){
		$('.elem-1 img').css({
			'transform' : 'scale(1)'
		});
		$('.elem-2 img').css({
			'transform' : 'scale(1)'
		});
		$('.elem-3 img').css({
			'transform' : 'scale(1.5)'
		});
		$('.elem-2').css({
			'left' : '95%',
			'top'  : '20%'
		});
		$('.elem-1').css({
			'left' : '95%',
			'top'  : '60%'
		});
		$('.elem-3').css({
			'left' : '5%',
			'top'  : '20%'
		});
		$('.content-1').fadeOut();
		$('.content-2').fadeOut();
		$('.content-3').delay(1000).fadeIn();
	}*/

	//*************************************************//

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

	$('.content-p1').Center60();
	$('.agence').Center();
	$('.logo').Center();
	$('.u-1').CenterHorizontal();
	$('.u-2').CenterVertical();
	$('.u-4').CenterHorizontal();
	$('.u-6').CenterVertical();

});