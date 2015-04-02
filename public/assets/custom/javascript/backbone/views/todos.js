var app = app || {};

app.TodoView = Backbone.View.extend({

	// className: 'single-todo',

	events: {
		'dblclick .edit-description': 'edit'
	},

	template: _.template( $('#item-template').html() ),

	initialize: function(){

	},

	events: {
		'click .toggle-done': 'changeToCompleted'
	},

	render: function(){
		this.$el.html( this.template( this.model.attributes) );
		if (this.model.get('done')){
			var templateCheckMark = _.template("<i class='fa fa-check-circle-o margin-left-20 margin-right-20'><i/>");
			var $toggleToCheck = this.$el.find('.toggle-done')
			$toggleToCheck.html(templateCheckMark)
		}
		// notice how we are return this, we are returning the instance of our class
		return this
	},

	changeToCompleted: function(){
		var state = this.model.get('done')
		this.model.set({'done': !state})
		this.model.save()
		this.render()
	},

	// if you use an .after() instead of .html el has no children thus, el is unable to connect events
	// using the events hash

	edit: function(){
		console.log('hope this works');
	},

	log: function(){
		console.log('yup this is a click')
	},

	createOnEnter: function(){

	}

});


// var todoView = new TodoView({
	// model: todoItem
// });