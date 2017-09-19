$(function(){
	$("#leftTab ul li").eq(0).addClass('lightHigh');
	$("#leftTab ul li").click(function(event) {
		$(this)
		.addClass('lightHigh')
		.siblings()
		.removeClass('lightHigh');
		var num = $(this).index();
		console.log(num);
		$("#leftTab div textarea")
		.eq(num).css('display', 'inline-block')
		.siblings()
		.css('display', 'none');;
	});
})