$(function(){
	var $li = $("#changeColor li");
	$li.click(function(event) {
		var thisColor = $(this).css("background-color");
		$("#header").css('background-color', thisColor);
		$("#menu li a").hover(function() {
			$(this).css('color', 'black');
		}, function() {
			$(this).css('color', '#fff');
		});
	});
});
