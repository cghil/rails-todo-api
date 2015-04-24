var app = app || {}

app.signUp = Backbone.View.extend({
	el: '.container-signin-signup',

	template: _.template($('#signup').html()),

	events: {
		'click button': 'signUpUser'
	},

	render: function(){
		this.$el.empty;
		var htmlForSignUp = this.$el.html(this.template());
		return this
	},

	signUpUser: function(evt){
		evt.preventDefault();
		var name = $('input#name').val();
		var email = $('input#email').val();
		var password = $('input#password').val();
		var password_confirmation = $('input#password_confirmation').val();
		if (password === password_confirmation){
			var createUserInServer = $.ajax({
				url: '/account',
				type: 'POST',
				data: {
					username: name,
					email: email,
					password: password
				}
			});
			createUserInServer.done(this.setUpNewUser);
		}else{
			$('.errors-signin').remove()
			var compileErrors = _.template('<p class="errors-signin text-center helveticaneue red-text">Password does not match!</p>');
			$('#form-holder').prepend(compileErrors());
		}
	},

	setUpNewUser: function(reply){

		if (reply.errors !== undefined) {
			$('.errors-signin').remove();
			var compileErrors = _.template('<p class="errors-signin text-center helveticaneue red-text"><%=text%></p>');
			var errors = reply.errors;
			errors.forEach(function(error){
				$('#form-holder').prepend(compileErrors({text: error}));
			});
		}
		if (reply.user_id !== undefined) {
			sessionStorage.setItem('user_id', reply.user_id);
			sessionStorage.setItem('username', reply.username);
			$('div.container-signin-signup').remove();
			$('#maingrid').show();
			app.View = new app.AppView();
			inputResizer();
			var userId = app.Todos.at(0).get('user_id');
			if (userId != sessionStorage.getItem('user_id') && userId !== undefined){
				$('.todo-item').remove()
			}
			inputResizer();
		}

	}
})