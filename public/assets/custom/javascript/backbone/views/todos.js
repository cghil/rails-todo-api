var app = app || {};

app.TodoView = Backbone.View.extend({

	className: 'single-todo',

	events: {
		'dblclick .edit-description': 'edit',
		'click .edit-item': 'log'
	},

	template: _.template( $('#item-template').html() ),

	render: function(){
		this.$el.html( this.template( this.model.attributes) );
		debugger;
	},

	// if you use an .after() instead of .html el has no children thus, el is unable to connect events
	// using the events hash

	edit: function(){
		console.log('hope this works');
	},

	log: function(){
		console.log('yup this is a click')
	}

});


// var todoView = new TodoView({
	// model: todoItem
// });