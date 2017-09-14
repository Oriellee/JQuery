$(function(){
	$("#menu li").hover(function() {
		$(this).find('.nav').show();
	}, function() {
		$(this).find('.nav').hide();
	});
})