$(function(){
	$("#leftImg ul li").click(function(event) {
		var num = $(this).index()+1;
		console.log(num);
		$("#leftImg>img").attr('src', "images/"+num+".jpg");
	});
})