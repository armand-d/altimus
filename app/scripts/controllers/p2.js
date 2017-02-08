'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('P2Ctrl', function($rootScope,$http,$scope) {
	$rootScope.colorBg = '#2DB7BC';
	$rootScope.animate = 'view-animate-top';

	var p2 = this;

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

	$scope.showClients = function() {
		$http.get('/api/clients')
	        .success(function(data) {
	            p2.clients = data;
	        })
	        .error(function(err) {
	        });
    }

    $scope.showPic = function(pic){
    	$('#pic-active').attr('src','images/clients/'+pic)
    }

    $scope.showClient = function(name) {
	$http.get('/api/client?name='+name)
        .success(function(data) {
        	$('.close').trigger('click');

            p2.name = data.name;
            p2.subtitle = data.subtitle;
            p2.logo = data.logo;
            p2.shortDesc = data.shortDesc;
            p2.longDesc = data.longDesc;
            p2.imgs = data.img;
            p2.video = data.video;
            p2.site = data.site;
            $('#iframe-front').attr('src','https://player.vimeo.com/video/'+data.video+'?badge=0&title=0&byline=0&portrait=0')
            if ($(document).width() > 1000)  {
            // actions
            	$('#pic-active').attr('src','images/'+data.img[0]);
            	$('.head').css({
            		'left' : '10%',
            		'margin-left' : '0px',
            		'top': '-4%'
            	});
            	$('.head h3').css({
            		'left' : '-30%',
            		'top'  : '12%',
            		'position' : 'absolute'
            	});
            	$('.head h2').css({
            		'border-left' : '2px solid rgba(255,255,255,0.6)',
            		'padding-left'  : '8%'
            	});
            	$('.clients-front').css({
            		'top' : '105%',
            		'width' : '75%',
            		'left' : '13.5%'
            	});
            	$('.content-infos').css({
            		'top' : '10%'
            	});
            	$('.client').css({
            		'margin-right': '1%',
				    'width': '6%'
            	});
            	$('.close').fadeIn(1000);
            	$('.client-name').hide();
            	$('.img-center').Center();

		var widthwindow = $(window).width();
		//var widthclient = (widthwindow * 80) / 100;
		var widthiframe = (widthwindow * 50) / 100;
		var heightiframe = widthiframe / (16 / 9);
		$('#iframe-front').attr('width',widthiframe);
		$('#iframe-front').attr('height',heightiframe);
		console.log(widthclient);
		console.log(widthiframe);
		console.log(heightiframe);

            };
        })
        .error(function(err) {
        });
    }

    $('.close').on('click',function(){
    	$('.head').CenterHorizontal();
    	$('.clients-front').css({
    		'top' : '',
    		'width' : '',
    		'left' : ''
    	});
    	$('.head h3').css({
    		'left' : '',
    		'top'  : '',
    		'position' : ''
    	});
    	$('.head h2').css({
    		'border-left' : '',
    		'padding-left'  : ''
    	});
    	$('.content-infos').css({
    		'top' : ''
    	});
    	$('.client').css({
    		'margin-right': '',
		    'width': ''
    	});
    	$('.close').fadeOut(1000);
    	$('.client-name').show();
    });

    $('.head').CenterHorizontal();
    $('.img-center').Center();
    $('.carousel-control').on('click',function(e){
    	e.preventDefault();
    });

    $('#pic-active').on('click', function(){
        $('#no-click').show();
        $('#no-click').html('<img src="'+$(this).attr('src')+'"">');
        $('#no-click').find('img').hide();
        $('#no-click').find('img').fadeIn();
        $('#no-click').find('img').Center();
    });

    $('#no-click').on('click', function(){
        $('#no-click').hide();
     });
});
