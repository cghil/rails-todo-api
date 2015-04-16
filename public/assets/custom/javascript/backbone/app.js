var app = app || {};
$(function(){
	checkForUser.checkSession();
	app.View = new app.AppView();
})