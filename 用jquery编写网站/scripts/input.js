$(function(){
	$("#search input").hover(function() {
		$(this).stop(true,true)
		.animate({width:"200"}, 200);
	},function(){
		$(this).stop(true,true)
		.animate({width:"150"}, 200);
	});
	$("#search input").focus(function(event) {
		if($(this).val() == this.defaultValue){
			$(this).val("");
		}
	}).blur(function(event) {
		if ($(this).val() == "") {
			$(this).val(this.defaultValue);
		}
	}).keyup(function(e) {
		if(e.which == 13){
			alert("回车提交表单！");
		}
	});
})