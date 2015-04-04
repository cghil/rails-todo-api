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
		todos.fetch();
		this.$input = this.$('#new-todo');
		this.listenTo(app.Todos, 'add', this.addOne)
		this.listenTo(app.Todos, 'reset', this.addAll);
		this.listenTo(app.Todos, 'all', this.render);
	},

	render: function() {
		var todos = app.Todos
		var completed = todos.completed().length
		if (todos.length === completed && todos.length !== 0) {
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
		var $icon = this.$el.find('#toggle-all');
		var todos = app.Todos.models;
		todos.forEach(saveTodo)
		function saveTodo(todo){
			todo.set({'done': true});
			todo.save();
		}
		this.showAllAreCompleted();
		$(this.el).undelegate('#toggle-all', 'click');
		// $icon.off('click')
		var that = this
		$icon.on('click', function(){
			that.toggleAllToActive()
			$(this).off('click')
			$(this).on('click', that.toggleAllToComplete)

			// delegate an event to the icon for making all Active
		})
	},

	showAllAreActive: function(){
		this.$el.find('#toggle-all').removeClass('fa-bullseye').addClass('fa-circle-o');
	},

	toggleAllToActive: function(){
		var todos = app.Todos.models;
		todos.forEach(saveTodo)
		function saveTodo(todo){
			todo.set({'done': false});
			todo.save();
		}
		this.showAllAreActive();
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