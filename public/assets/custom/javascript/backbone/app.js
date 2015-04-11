var app = app || {};
$(function(){
	if (sessionStorage.length === 0){
		debugger
	}
	app.View = new app.AppView();
})