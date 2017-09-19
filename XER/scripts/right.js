$(function(){
	$("#colorChange li").click(function(event) {
		var text = "颜色: ";
		$("#color").text(" ");
		$("#color").text(text+$(this).attr('title'));
	});
	$("#sizeChange li").click(function(event) {
		var sizeText = "尺寸： ";
		$("#size").text(sizeText+$(this).text());
	});
	$("#up").click(function(event) {
		var dialog = "感谢您的购买！\n您购买的是\n"
						+"产品："+$("#right h5").text()
						+"\n"+$("#right p").eq(4).text()
						+"\n"+$("#right p").eq(3).text()
						+"\n"+$("#right p").eq(5).text()
						+$("#right select").eq(0).val()
						+"\n"+$("#right p").eq(6).text()+"。"
		alert(dialog);
	});
})