'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('AdminCtrl', function($rootScope,$http,$scope,$state) {
	$rootScope.colorBg = '#FFF';
	$rootScope.animate = '';

	var admin = this;

	$scope.loginAdmin = function(){
		if (admin.password == 'AP22@75002')
		{
			localStorage.setItem('isLogged', true);
			$rootScope.isLogged = true;
		} else {
			alert('You lose..!')
		}
	}

	$scope.addClient = function(){
		
	    var data = {
	        name: admin.name,
	        img : [admin.img1,admin.img2,admin.img3,admin.img4,admin.img5],
			logo : admin.logo,
			subtitle : admin.subtitle,
			shortDesc : admin.shortDesc,
			longDesc : admin.longDesc,
			video : admin.video,
			site : admin.site
	    };

		$http.post('/api/clients', data)
	        .success(function() {
	        	$('input[type="text"]').val('');
	        	$('textarea').val('');
	            $scope.showClients();
	        })
	        .error(function() {
	        });
	}

	$scope.removeAll = function (){
		var sure = window.confirm("Are you sure ?");
		if (sure == true) {
			$('#all-clients').fadeOut();
			$http.post('/api/clients/remove');
		};
	}

	$scope.removeAllRegistered = function (){
		var sure = window.confirm("Are you sure ?");
		if (sure == true) {
			$http.post('/api/game/remove');
		};
	}

	$scope.showClients = function() {
		$http.get('/api/clients')
	        .success(function(data) {
	            admin.clients = data;
	        })
	        .error(function(err) {
	        });
    }

    $scope.showClient = function(name) {
    	$http.get('/api/client?name='+name)
	        .success(function(data) {
	            admin.name = data.name;
	            admin.subtitle = data.subtitle;
	            admin.logo = data.logo;
	            admin.shortDesc = data.shortDesc;
	            admin.longDesc = data.longDesc;
	            admin.imgs = data.img;
	            admin.video = data.video;
	            admin.site = data.site;
	            $('#iframe').attr('src','https://player.vimeo.com/video/'+data.video)
    			$('#myModal').modal('show');
	        })
	        .error(function(err) {
	        });
    }

    $scope.clientDelete = function(name) {
    	var sure = window.confirm("Are you sure ?");
		if (sure == true) {
			$http.post('/api/client/delete?name='+name);
			$('#myModal').modal('hide');
			$('input[type="text"]').val('');
	        $('textarea').val('');
			$scope.showClients();
		};
    }

    $scope.clientModify = function(name) {
    	var data = {
			img : [admin.imgs[0],admin.imgs[1],admin.imgs[2],admin.imgs[3],admin.imgs[4]],
			subtitle : admin.subtitle,
			logo : admin.logo,
			shortDesc : admin.shortDesc,
			longDesc : admin.longDesc,
			video : admin.video,
			site : admin.site
	    };

		$http.post('/api/client/modify?name='+name, data)
	        .success(function() {
	            $scope.showClients();
	            alert('Edit with success !');
	            $('#myModal').modal('hide');
				$('input[type="text"]').val('');
		        $('textarea').val('');
	        })
	        .error(function() {
	        });
    }

    $('.carousel-control').on('click',function(e){
    	e.preventDefault();
    });


    // game 

    $http.get('/api/game')
	        .success(function(data) {
	            admin.users = data;
	        })
	        .error(function(err) {
	        });
});