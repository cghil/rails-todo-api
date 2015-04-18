var app = app || {}

app.signIn = Backbone.View.extend({
	el: '.container-signin-signup', // can't use el because it is not on the 
	className: "sigin-form",

	template: _.template($('#signin').html()),

	events: {
		'click button': 'signInUser'
	},

	render: function(){
		this.$el.empty();
		var htmlForSignIn = this.$el.html(this.template());
		return this
	},

	signInUser: function(evt){
		evt.preventDefault();
		var email = $('input#email').val();
		var password = $('input#password').val();
		var signInAjax = $.ajax({
			url: '/account/signin',
			type: 'POST',
			data: {
				email: email,
				password: password
			}
		})
		signInAjax.done(this.createSession)
	},

	createSession: function(reply){
		debugger
		if (isNaN(reply.user_id) === false) {
			sessionStorage.setItem('user_id', reply.user_id)
			sessionStorage.setItem('username', reply.username)
		} else {
			var errors = reply.errors
			debugger
			var compileErrors = _.template('<p class="text-center helveticaneue"><%=error=%></p>');
			$('#form-holder').prepend(compileErrors({error: reply.errors}));
		}
	}


})