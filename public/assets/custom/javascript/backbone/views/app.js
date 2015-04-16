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
		// this.listenTo(app.Todos, '')
	},

	render: function() {
		// var numberCompleted = app.Todos.completed().length
		// numberCompleted = { completed: numberCompleted, poop: "Poop Yo!" }

		// if (app.Todos.length) {
		// 	this.$('.todo-footer').html(this.footerTemplate(numberCompleted))
		// }

		this.checkIfAllTodosAreCompleted();
		return this
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
		var todos = app.Todos.models
		if (this.checkIfAllTodosAreCompleted() === true) {
			todos.forEach(function (todo){
				todo.set({'done': false})
				todo.save();
				// it is making another model here I believe within the database... I need to fix this
				// rails does not recognize that backbone model for new todos is the same. Instead it thinks it is a new one everytime
				// something is saved
			})
			this.showAllAreActive();
		}else {
			todos.forEach(function (todo){
				todo.set({'done': true});
				todo.save()
			})
			this.showAllAreCompleted();
		}
	},

	checkIfAllTodosAreCompleted: function() {
		var todos = app.Todos
		var completed = todos.completed().length
		if (todos.length === completed && todos.length !== 0) {
			this.showAllAreCompleted();
			return true;
		} else {
			this.showAllAreActive();
			return false;
		}
	},

	showAllAreActive: function(){
		this.$el.find('#toggle-all').removeClass('fa-bullseye').addClass('fa-circle-o');
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

	createOnEnter: function(event){
		if (event.which === 13) {
			var newTodo = app.Todos.create( this.newAttributes() );
			console.log('created')	
		} else {
			return;
		}
		this.$input.val('');
	}
})