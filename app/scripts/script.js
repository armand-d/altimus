$().ready(function(){

	(function($){
		$.fn.CenterHorizontal = function(){
			this.css({
				'left'		: '50%',
			});
			this.css({
				'margin-left'	: -this.width()/2 + 'px',
			});
		};
		$.each(['show', 'hide'], function (i, ev) {
			var el = $.fn[ev];
			$.fn[ev] = function () {
				this.trigger(ev);
				return el.apply(this, arguments);
			};
		});
	})(jQuery);

	var documentHeigth = $(window).height();
	$('.view-animate-container').height(documentHeigth);

	$('.menu-icon').CenterHorizontal();
	$('.nav').fadeIn();

	if ($(window).width() <= 770) {
		window.location.assign('http://mobile.altimus360.com/');
	};
	
});
