'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the altimusApp
 */
angApp.controller('ContactCtrl', function($rootScope,$http) {
	var contact = this;
	$rootScope.colorBg = '#333';
	$rootScope.animate = 'view-animate-top';
	contact.success = null;

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

	contact.sendMail = _ => {
		
		var req = {
		 method: 'GET',
		 url: 'http://mobile.altimus360.com/sendMail.php',
		 headers: {
		   'Content-Type': undefined
		 },
		 params: { 
		 		name: contact.name,
				email: contact.email,
				subject: contact.subject,
				message: contact.message
			}
		}

		$http(req).then(function(res){
			contact.name = "";
			contact.email = "";
			contact.subject = "";
			contact.message = "";
			contact.success = "Votre message a bien était envoyé !"
		}, function(){
			contact.success = null;
			alert('Erreur')
		});


	}

});