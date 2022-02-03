/*gnb*/
$(document).ready(function(){
	$(".menu>li").hover(function(){
		$(this).children(".submenu").stop().slideDown(500);
	},function(){
		$(this).children(".submenu").stop().slideUp(500);
	});
});
$("#menu_btn").click(function(){
	$(".menu").fadeToggle(500);
	$(this).toggleClass("menuAni");
});

/*비주얼배너*/
$(document).ready(function(){	
});
function nextFun(){
		// 다음 버튼 눌렀을때!
		$(".slideWrap").append($(".slideWrap li").first().clone());
		
		/* 선택요소.append("타겟");
			-> 타겟을 선택요소의 가장 마지막 인덱스에 위치한곳에 붙여넣기.
		*/
		/* ----->$(".slideWrap li").first().clone()
		 ※  가장 첫번째에 있는 li를 복제.
		 $(".slideWrap li")
		 .slideWrap 안에있는 모든 li 중에
		 $(".slideWrap li").first()
		 li중에 가장 첫번째에 오는걸 선택
		 $(".slideWrap li").first().clone();
		 .clone() : 앞의 선택요소 복제 
		*/
		$(".slideWrap li").first().remove();
}
var timer = setInterval(function(){nextFun()},1000);
$("#slide").hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(function(){nextFun()},1000);
});
function prevFun(){
	$(".slideWrap").prepend($(".slideWrap li").last().clone());
	$(".slideWrap li").last().remove();
}