$(function(){
	var x = 10;
	var y = 20;
	$("#news ul li").mouseover(function(e) {
		$(this).css({
			'text-decoration':'underline',
			"color":"#c1b497"});
		this.myTitle = $(this).text();
		var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);
		$("#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		}).show("fast");
	}).mouseout(function(e) {
		$("#tooltip").remove();
		$(this).css({
			'text-decoration':'none',
			"color":"grey"});
	}).mousemove(function(e) {
		$("#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		});
	});
})