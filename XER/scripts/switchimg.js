$(function(){
	$("#leftImg ul li").click(function(event) {
		var num = $(this).index()+1;
		$("#leftImg>span>img")
		.eq(num-1)
		.css('display', 'inline-block')
		.siblings()
		.css('display', 'none');
		$("#leftImg img.zoomImg")
		.attr('src', "file:///E:/Github/JQuery/XER/images/"+num+".jpg");
		$("#before img")
		.attr('src', "file:///E:/Github/JQuery/XER/images/"+num+".jpg");
	});
})