var app = app || {}

app.signIn = Backbone.View.extend({
	className: "sigin-form",

	template: _.template($('#signin').html());,

	events: {

	},

	render: function(){
		this.$el.html(this.template())

	}


})