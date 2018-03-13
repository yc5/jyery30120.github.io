document.getElementsByTagName("h1")[0].style.fontSize = "80px";

$(function(){
	$("#switch").toggle(function(){
		$("#demo").fadeOut("fast",function(){
			$(this).fadeIn("fast").addClass("showblock");
		});
	},function(){
		$("#demo").fadeOut("fast",function(){
			$(this).fadeIn("fast").removeClass("showblock");
		});
	});
});