var app = app || {};

app.Todo = Backbone.Model.extend({
	urlRoot: '/todos',

	toggleDone: function(){
		this.save({
			done: !this.get('done') // we are get the done and toggling the true and false
		});
	}
});