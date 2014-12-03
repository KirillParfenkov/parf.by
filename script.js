$( function (argument) {

	var isActiveManu = $(window).height() <= window.pageYOffset;
	var $menuContent = $('.menu-strip .content');
	var $menu = $('.menu-strip');

	$(window).scroll( function( event ) {
		
		if ( ($(window).height() <= window.pageYOffset) && !isActiveManu ) {
			isActiveManu = true;
			console.log('$(window).height(): ' + $(window).height());
			console.log('window.pageYOffset: ' + window.pageYOffset);
			console.log('show');
			$menuContent.show();
			$menu.css({
				position : 'fixed',
				top : 0
			});

		} else if ( ($(window).height() > window.pageYOffset) && isActiveManu )  {
			isActiveManu = false;
			console.log('hide');
			$menuContent.hide();
			$menu.css({
				position : 'absolute',
				top : 0
			});
		}
	});
});