$(function(){
	$("#showDown #downText ul li").mouseover(function(event) {
		$(this).css({
			"background-color":"black"
		});
		$("#downList ul").eq($(this)
			.index())
			.stop(true,true)
			.show(800)
			.siblings()
			.stop(true,true)
			.hide(800);
		console.log($(this).index());
	}).mouseout(function(event) {
		$(this).css({
			"background-color":"#c1b497"
		});
	});;
})