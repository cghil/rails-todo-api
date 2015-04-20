$(document).ready(function(){
	function inputBoxWithChange(){
		inputResizer();
	}
	$(window).resize(inputBoxWithChange);
	inputBoxWithChange();

	function toggleSideMenu(){
		var $menuToggleButton = $('#toggle-menu-button')
		var $body = $('#body');
		var $menu = $('#menu');
		var $mainGrid = $('#maingrid');
		var $inputBoxDiv = $('#input-box-new-todo');
		var $inputBox = $('#new-todo');
		$menuToggleButton.on('click', hideSideMenu);
		
		function revealSideMenu(){
			$menuToggleButton.unbind('click');
			$menu.show();
			$mainGrid.addClass('pure-g');
			$menu.addClass('pure-u-1-8');
			$body.addClass('pure-u-7-8');
			var width = $('.layer-paper').width();
			$inputBoxDiv.css("width", width);
			$inputBox.css("width", width-63);
			$menuToggleButton.on('click', hideSideMenu);
		}

		function hideSideMenu(){
			$body.removeClass('pure-u-7-8');
			$menu.removeClass('pure-u-1-8');
			$mainGrid.removeClass('pure-g');
			$menu.hide();
			var postNoteWidth = $('.yellow-notebook-page').width();
			$inputBoxDiv.width(postNoteWidth);
			$menuToggleButton.unbind('click');
			$menuToggleButton.on('click', revealSideMenu);
		}
	}
	toggleSideMenu();
});

var counter = 0