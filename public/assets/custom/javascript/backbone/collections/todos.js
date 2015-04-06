var app = app || {};

var TodoList = Backbone.Collection.extend({
	
	model: app.Todo,

	url: '/todos',

	completed: function(){
		return this.where({done: true});
	},

	active: function(){
		return this.where({done: false});
	},

	comparator: function(todo){
		return todo.get('id');
	}
});

app.Todos = new TodoList();