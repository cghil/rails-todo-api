var app = app || {};

// The Application
// Our overall **AppView** is the top-level piece of UI

app.AppView = Backbone.View.extend({

	el: '#todoapp',

	events: {
		'keypress #new-todo': 'createOnEnter',
		'click #toggle-all': 'toggleAllToComplete'
	},

	initialize: function(){
		var todos = app.Todos
		this.$input = this.$('#new-todo');
		this.listenTo(app.Todos, 'add', this.addOne)
		this.listenTo(app.Todos, 'reset', this.addAll);
		todos.fetch();
	},

	render: function() {
		var todos = app.Todos
		var completed = todos.completed().length
		if (todos.length === completed) {
			this.showAllAreCompleted();
		}
// need to finish render function
	},

	newAttributes: function(){
		return {
			description: this.$input.val().trim(),
			done: false
		};
	},

	showAllAreCompleted: function(){
		this.$el.find('#toggle-all').removeClass('fa-circle-o').addClass('fa-bullseye');
	},

	toggleAllToComplete: function(){
		var todos = app.Todos.models;
		todos.forEach(saveTodo)
		function saveTodo(todo){
			todo.set({'done': true});
			todo.save();
		}
		this.showAllAreCompleted();
	},

	showSomeAreActive: function(){
		this.$el.find('#toggle-all').removeClass('fa-bullseye').addClass('fa-circle-o');
	},

	toggleSomeToActive: function(){
		var todos = app.Todos.models;
		todos.forEach(saveTodo)
		function saveTodo(todo){
			todo.set({'done': false});
			todo.save();
		}
		this.showSomeAreActive();
	},

	// add a single todo item to the list by creating a view
	// appending its element to the div todo-list-items
	addOne: function(todo){
		var  todoView = new app.TodoView({ model : todo });
		$('#todo-list-items').append( todoView.render().el );
		if (todoView.model.get('done')) {
			todoView.makeCompleted()
		}
	},

	addAll: function(){
		this.$('#todo-list-items').html('');
		app.Todos.fetch()
		app.Todos.each(this.addOne, this);
	},

	// clickedThisFuckingThing: function(){
	// 	console.log('yes i clicked this ')
	// }

	createOnEnter: function(event){
		console.log('working')
		if (event.which !==13 || !this.$input.val().trim() ) {
			return;
		}
		app.Todos.create( this.newAttributes() );
		this.$input.val('');
	}
})