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


	function logOut(){
		sessionStorage.clear();
		app.View.destroyView();
		$('#insert-app-below').after("<div class='pure-u-3-5' id='todoapp'><div class='text-center'><h1 class='header'>todo, please.</h1></div><div class='yellow-notebook-page'><div id='input-box-new-todo'><div class='inline-element margin-left-20 margin-right-20 transparent-1-4'><a href='/#'><i id='toggle-all' class='fa fa-circle-o fa-lg'></i></a></div><input id='new-todo' class='inline-element' placeholder='What needs to be done?' autofocus></div><div id='todo-list-items'></div><div class='todo-footer'></div><div class='layer-paper'><br></div></div><br><div class='text-center toggle-menu-button'><button class='pure-button primary-button' id='toggle-menu-button'>Toggle Menu</button></div></div>")
		checkForUser.checkSession();
	}

	$('a#logout').on('click', logOut)
});