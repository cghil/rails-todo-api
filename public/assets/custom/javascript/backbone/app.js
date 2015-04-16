var app = app || {};
$(function(){
	// if (sessionStorage.length === 0 && sessionStorage.getItem('user_id') === null){
	// 	$('div#maingrid').hide();
	// 	app.Buttons = new app.LoginButtons();
	// 	app.Buttons.addButtons();
	// 	// render the signin and signup views
	// }
	app.View = new app.AppView();
})