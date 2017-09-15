$(function(){
	var $li = $("#changeColor li");
	$li.click(function(event) {
		var thisColor = $(this).css("background-color");
		$("#header").css('background-color', thisColor);
		$("#footer").css('background-color', thisColor);

		if(thisColor == "rgb(0, 0, 0)"){
			$("#menu li a").css('color', "#fff");
			$("#footer a").css('color', "#fff");
			$("#menu li a").hover(function() {
				$(this).css('color', '#c1b497');
			}, function() {
				$(this).css('color', '#fff');
			});
			$("#footer a").hover(function() {
				$(this).css('color', '#c1b497');
			}, function() {
				$(this).css('color', '#fff');
			});
		}else if(thisColor == "rgb(193, 180, 151)"){
			$("#menu li a").css('color', "#fff");
			$("#footer a").css('color', "#fff");
			$("#menu li a").hover(function() {
				$(this).css('color', 'black');
			}, function() {
				$(this).css('color', '#fff');
			});
			$("#footer a").hover(function() {
				$(this).css('color', 'black');
			}, function() {
				$(this).css('color', '#fff');
			});
		}
	});
});
