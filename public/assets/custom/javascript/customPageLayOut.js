$(document).ready(function(){
	function inputBoxWitchChange(){
		var width = $('.layer-paper').width();
		var $inputBoxDiv = $('#input-box-new-todo');
		var $inputBox = $('#new-todo');
		$inputBoxDiv.css("width", width);
		$inputBox.css("width", width-63)
	}
	$(window).resize(inputBoxWitchChange);
	inputBoxWitchChange();
});