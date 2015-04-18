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