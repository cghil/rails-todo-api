$(document).ready(function(){
	function menuChangeHeight(){
		var height = $(window).height();
		var $menu = $('.side-menu-custom');
		$menu.css("height", height);
	}
	$(window).resize(menuChangeHeight);
	menuChangeHeight();
})