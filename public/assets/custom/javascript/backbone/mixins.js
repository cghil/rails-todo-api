var checkForUser = {
	checkSession: function(){
		if (sessionStorage.length === 0 && sessionStorage.getItem('user_id')=== null) {
			$('div#maingrid').hide();
			debugger;
		}else {
			return sessionStorage.getItem('user_id')
		}
	}
}