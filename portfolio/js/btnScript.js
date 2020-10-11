$(function(){
	$("#img-1").click(function(){
		
	});
	$("#img-2").click(function(){
		
	});
	$("#img-3").click(function(){
		
	});
	$("#img-4").click(function(){
		
	});
	$("#img-5").click(function(){
		
	});
});

$(function(){
	$(document).ready(function(){
		if($("slick-current").attr("data-slick-index")==-1)
			$("#info").text("2018년 1학기 전공 파이썬 텀프로젝트 (미완)");
		else if($("slick-current").attr("data-slick-index")==0)
			$("#info").text("2018년 2학기 교양 커뮤니티 웹 개발");
		else if($("slick-current").attr("data-slick-index")==1)
			$("#info").text("2018년 2학기 전공 컴퓨터 영어 웹 개발");
		else if($("slick-current").attr("data-slick-index")==2)
			$("#info").text("개인 홈페이지 poinguinie (미완)");
		else if($("slick-current").attr("data-slick-index")==3)
			$("#info").text("개인 홈페이지 (2) new poinguinie (미완)");
	});
	
});
