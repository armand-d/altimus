'use strict';

/**
 * @ngdoc function
 * @name altimusApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the altimusApp
 */
angApp.controller('P4Ctrl', function($rootScope) {
	$rootScope.colorBg = '#005C7A';
	$rootScope.animate = 'view-animate-top';

	(function($){
		$.fn.Center = function(){
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
		$.fn.CenterVertical = function(){
			this.css({
				'top'		: '50%'
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


	$('#team-title').Center();
	$('.content-team').Center();
	$('.u-1').CenterHorizontal();
	$('.u-2').CenterVertical();
	$('.u-4').CenterHorizontal();
	$('.u-6').CenterVertical();


	$('.u-1').on('click',function(){
		$('.c-1').fadeIn();
		$('.c-2').fadeOut();
		$('.c-3').fadeOut();
		$('.c-4').fadeOut();
		$('.c-5').fadeOut();
		$('.c-6').fadeOut();
		$('.c-7').fadeOut();
		$('#world').hide();
	});
	$('.u-2').on('click',function(){
		$('.c-2').fadeIn();
		$('.c-1').fadeOut();
		$('.c-3').fadeOut();
		$('.c-4').fadeOut();
		$('.c-5').fadeOut();
		$('.c-6').fadeOut();
		$('.c-7').fadeOut();
		$('#world').hide();
	});
	$('.u-3').on('click',function(){
		$('.c-3').fadeIn();
		$('.c-1').fadeOut();
		$('.c-2').fadeOut();
		$('.c-4').fadeOut();
		$('.c-5').fadeOut();
		$('.c-6').fadeOut();
		$('.c-7').fadeOut();
		$('#world').hide();
	});
	$('.u-4').on('click',function(){
		$('.c-4').fadeIn();
		$('.c-1').fadeOut();
		$('.c-2').fadeOut();
		$('.c-3').fadeOut();
		$('.c-5').fadeOut();
		$('.c-6').fadeOut();
		$('.c-7').fadeOut();
		$('#world').hide();
	});
	$('.u-5').on('click',function(){
		$('.c-5').fadeIn();
		$('.c-1').fadeOut();
		$('.c-2').fadeOut();
		$('.c-3').fadeOut();
		$('.c-4').fadeOut();
		$('.c-6').fadeOut();
		$('.c-7').fadeOut();
		$('#world').hide();
	});
	$('.u-6').on('click',function(){
		$('.c-6').fadeIn();
		$('.c-1').fadeOut();
		$('.c-2').fadeOut();
		$('.c-3').fadeOut();
		$('.c-4').fadeOut();
		$('.c-5').fadeOut();
		$('.c-7').fadeOut();
		$('#world').show();
	});
	$('.u-7').on('click',function(){
		$('.c-7').fadeIn();
		$('.c-1').fadeOut();
		$('.c-2').fadeOut();
		$('.c-3').fadeOut();
		$('.c-4').fadeOut();
		$('.c-5').fadeOut();
		$('.c-6').fadeOut();
		$('#world').hide();
	});
	
//****************************
(function() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 350;

  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

  PI_2 = 2 * Math.PI;

  canvas = document.getElementById("world");

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = (function() {
    function Confetti() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    Confetti.prototype.replace = function() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    };

    Confetti.prototype.draw = function() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    };

    return Confetti;

  })();

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

}).call(this);


});