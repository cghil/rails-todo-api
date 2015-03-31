$(document).ready(function(){
	function inputBoxWithChange(){
		var width = $('.layer-paper').width();
		var $inputBoxDiv = $('#input-box-new-todo');
		var $inputBox = $('#new-todo');
		$inputBoxDiv.css("width", width);
		$inputBox.css("width", width-63)
	}
	$(window).resize(inputBoxWithChange);
	inputBoxWithChange();


	function toggleSideMenu(){
		var $menuToggleButton = $('#toggle-menu-button')
		var $body = $('#body');
		var $menu = $('#menu');
		var $mainGrid = $('#maingrid');
		$menuToggleButton.on('click', hideSideMenu)
		
		function revealSideMenu(){
			$menuToggleButton.unbind('click');
			$menu.show();
			$mainGrid.addClass('pure-g');
			$menu.addClass('pure-u-1-8');
			$body.addClass('pure-u-7-8');
			$menuToggleButton.on('click', hideSideMenu);
		}

		function hideSideMenu(){
			$body.removeClass('pure-u-7-8');
			$menu.removeClass('pure-u-1-8');
			$mainGrid.removeClass('pure-g');
			$menu.hide();
			$menuToggleButton.unbind('click');
			$menuToggleButton.on('click', revealSideMenu);
		}
	}

	toggleSideMenu();
});