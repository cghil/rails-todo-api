var app = app || {};

app.TodoView = Backbone.View.extend({

	className: 'single-todo-item',

	template: _.template( $('#item-template').html() ),

	initialize: function(){

	},

	events: {
		'click .toggle-done': 'changeToCompleted',
		'dblclick .edit-description': 'edit',
		'mouseover .todo-item': 'popDeleteButton'
	},

	render: function(){
		this.$el.html( this.template( this.model.attributes) );
		if (this.model.get('done')){
			this.makeCompleted()
		}
		// notice how we are return this, we are returning the instance of our class
		return this
	},

	popDeleteButton: function(){
		this.$el.find('.description-container')
		debugger;
	},

	makeCompleted: function(){
		var $toggleToCheck = this.$el.find('.toggle-done');
		var $description = this.$el.find('.current-item-description');
		$description.addClass('completed')
		var templateCheckMark = _.template("<a href='#'><i class='fa fa-check-circle-o margin-left-20 margin-right-20 transparent-1-4'><i/></a>");
		$toggleToCheck.html(templateCheckMark)
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
	}

});


// var todoView = new TodoView({
	// model: todoItem
// });