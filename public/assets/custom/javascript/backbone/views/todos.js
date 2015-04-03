var app = app || {};

app.TodoView = Backbone.View.extend({

	className: 'single-todo-item',

	template: _.template( $('#item-template').html() ),

	initialize: function(){

	},

	events: {
		'mouseover .single-todo-item': 'showDeleteButton',
		'click .toggle-done': 'changeToCompleted'
	},

	render: function(){
		this.$el.html( this.template( this.model.attributes) );
		if (this.model.get('done')){
			this.makeCompleted()
		}
		// notice how we are return this, we are returning the instance of our class
		return this
	},

	showDeleteButton: function(){
		debugger;
		$containerDescription = this.$el.find('.description-container')
		$("<button class='button-xsmall pure-button button-error'><i class='fa fa-trash-o'></i> Delete</button>").appendTo($containerDescription)
	},

	makeCompleted: function(){
		var $toggleToCheck = this.$el.find('.toggle-done');
		var $description = this.$el.find('.current-item-description');
		$description.addClass('completed');
		var templateCheckMark = _.template("<a class='margin-left-20 margin-right-20' href='/#'><i class='fa fa-check-square transparent-1-4'><i/></a>");
		$toggleToCheck.html(templateCheckMark);
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