var checkForUser = {
	checkSession: function(){
		if (sessionStorage.length === 0 && sessionStorage.getItem('user_id')=== null) {
			var buttons = new app.LoginButtons();
			buttons.addButtons();
			return false
		}else {
			return true
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


var viewDestoryer = {
	destroyView: function(){
		this.undelegateEvents();

		$(this.el).removeData().unbind();
		this.remove();
		Backbone.View.prototype.remove.call(this);
	}
}

_.extend(app.AppView.prototype, viewDestoryer);
_.extend(app.signIn.prototype, viewDestoryer);