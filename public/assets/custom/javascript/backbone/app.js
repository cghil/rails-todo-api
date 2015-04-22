var app = app || {};
$(function(){
	if (checkForUser.checkSession()) {
		app.View = new app.AppView();
	}
})