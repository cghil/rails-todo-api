var checkForUser = {
	checkSession: function(){
		if (sessionStorage.length === 0 && sessionStorage.getItem('user_id')=== null) {
			var buttons = new app.LoginButtons();
			buttons.addButtons();
		}else {
			return sessionStorage.getItem('user_id')
		}
	}
}

var inputResizer = function(){
	var width = $('.layer-paper').width();
	var $inputBoxDiv = $('#input-box-new-todo');
	var $inputBox = $('#new-todo');
	$inputBoxDiv.css("width", width);
	$inputBox.css("width", width-63);
}