var app = app || {};

var TodoList = Backbone.Collection.extend({
	
	model: app.Todo,

	url: '/todos'
});

app.Todos = new TodoList();