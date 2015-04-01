var app = app || {};

// The Application
// Our overall **AppView** is the top-level piece of UI

app.AppView = Backbone.View.extend({

	initialize: function(){
		this.listenTo(app.Todos, 'add', this.addOne)
	},


	// add a single todo item to the list by creating a view
	// appending its element to the div todo-list-items
	addOne: function(todo){
		var  todoView = new app.TodoView({ model : todo });
		$('#todo-list-items').append( todoView.render().el )
	},

	allAll: function(){
		debugger;
		this.$('#todo-list-items').html('');
		app.Todos.fetch()
		app.Todos.each(this.addOne, this);
	}
})