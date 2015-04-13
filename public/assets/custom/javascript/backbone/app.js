var app = app || {};
$(function(){
	if (sessionStorage.length === 0 && sessionStorage.getItem('user_id') === null){
		debugger
		$('div#maingrid').hide();
		// render the signin and signup views
	}
	app.View = new app.AppView();
})