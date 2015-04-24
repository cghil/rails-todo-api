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
		var name = $('input#email').val();
		var email = $('input#email').val();
		var password = $('input#password').val();
		var password_confirmation = $('input#password_confirmation').val();
		if (password === password_confirmation){

		}else{
			debugger
		}
		debugger
	}
})