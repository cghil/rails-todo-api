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
	 $('boby').append(this.render())
	},

	renderSignInForm: function(){
		debugger;
	},

	renderSignUpForm: function(){
		debugger;
	}
})