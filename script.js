$( function (argument) {

	var isActiveManu = $(window).height() > window.pageYOffset;
	var $menuContent = $('.menu-strip .content');
	var $menu = $('.menu-strip');


	$(window).scroll( function( event ) {
		console.log( '$(window).height():' + $(window).height() );
		console.log( 'window.pageYOffset:' + window.pageYOffset );
		console.log( 'isActiveManu' + isActiveManu );
		if ( ($(window).height() <= window.pageYOffset) && !isActiveManu ) {
			isActiveManu = true;
			$menuContent.show();
			$menu.css({
				position : 'fixed',
				top : 0
			});

		} else if ( ($(window).height() > window.pageYOffset) && isActiveManu )  {
			isActiveManu = false;
			$menuContent.hide();
			$menu.css({
				position : 'absolute',
				top : 0
			});
		}
	});
});
