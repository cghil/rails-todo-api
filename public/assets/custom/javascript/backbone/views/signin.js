var app = app || {}

app.signIn = Backbone.View.extend({
	el: '.container-signin-signup', // can't use el because it is not on the 
	className: "sigin-form",

	template: _.template($('#signin').html()),

	events: {
		'click #sigin-submit-button': 'signInUser'
	},

	render: function(){
		this.$el.empty();
		var htmlForSignIn = this.$el.html(this.template());
	}

	signInUser: function(evt){
		evt.preventDefault();
		var email = $('input#email').val();
		var password = $('input#password').val();
		$.ajax({

		})
	}


})