var app = app || {};

var TodoView = Backbone.View.extend({

	el: '.empty',

	template: _.template( $('#item-template').html() ),

	render: function(){
		this.$el.after( this.template( this.model.attributes) );
		debugger;
	}

});


// var todoView = new TodoView({
	// model: todoItem
// });