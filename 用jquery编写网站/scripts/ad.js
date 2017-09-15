$(function(){
	imgMove();
	$("#showUp #upOll ul li").mouseout(function(event) {
		imgMove($(this).index()+1);
	});
})
function imgMove(value){
	var num = $("#upOll ul li").length;
	if (value!==null) {
		var indexNum = value;
	}
	else{
		indexNum = 0;
	}
	var timer = setInterval(function(){
		if(indexNum<4){
			indexNum++;
		}
		else{
			indexNum=1;
		}
		$("#showUp #upOll>div #bg-"+indexNum)
			.stop(true,true)
			.fadeIn(400)
			.siblings()
			.fadeOut(400);
		$("#showUp #upOll ul li")
		.eq(indexNum-1)
		.addClass('light')
		.siblings()
		.removeClass('light');
	},3000);
	$("#showUp #upOll ul li").mouseover(function(event) {
		clearInterval(timer);
		$(this)
		.addClass('light')
		.siblings()
		.removeClass('light');
		$("#showUp #upOll>div #bg-"+($(this)
			.index()+1))
			.stop(true,true)
			.fadeIn(400)
			.siblings()
			.fadeOut(400);
	});
}

