var app = app || {};

app.LoginButtons = Backbone.View.extend({
	className: "container-signin-signup",
	template: _.template($('#loginbuttons').html()),

	render: function(){
		this.$el.html(this.template());
		return this
	},

	events: {
		'click #signup-button': 'renderSignUpForm',
		'click #signin-button': 'renderSignInForm'
	},

	addButtons: function(){
		$('div#maingrid').hide();
		this.render();
		$('body').append(this.$el);
	},

	renderSignInForm: function(){
		var signInToAccount = new app.signIn();
		signInToAccount.render();
	},

	renderSignUpForm: function(){
		var signUpForNewAccount = new app.signUp();
		signUpForNewAccount.render();
	}
})