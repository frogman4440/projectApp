/*풀페이지 */
$(function(){

    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation:true,
		navigationPosition:'left',
		navigationTooltips:['메인','나라','패키지/자유','도시','추천','footer'],
       sectionsColor :["#ccc"]
	   
	});
     
 });

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

function move1(){
window.scrollTo(0,0);//500픽셀 좌표로 이동
}
function move2(){
window.scrollTo(0,1180);//500픽셀 좌표로 이동
}
function move3(){
window.scrollTo(0,2156);//500픽셀 좌표로 이동
}
function move4(){
window.scrollTo(0,3132);//500픽셀 좌표로 이동
}
function move5(){
window.scrollTo(0,4108);//500픽셀 좌표로 이동
}

/*네비이동*/ 
$(".nav_btn").on("click", function(evt){
	evt.preventDefault(); //a태그의 이벤트 기능을 꺼버림
	// $.scrollTo(this.hash,400); //(위치,시간ms)
	// $(".tab_menu li a").removeClass("active");
	/*
	$(this).parent().siblings("li").children().removeClass("active");
	parent - 바로위 조상
	parents - 위 모든 조상 요소
	*/
	// $(this).addClass("active");
	});

/*네비게이션*/ 
$(".common_nav1_2").click(function(){
	$(".nav_word").animate({
		opacity:'0%'
	},0);
	$(".nav_decs1").animate({
		opacity:'100%'
	},300);
	$(".nav_btn").animate({opacity:'50%'},0);
	$(this).animate({opacity:'100%'},300);
});

$(".common_nav2_2").click(function(){
	$(".nav_word").animate({
		opacity:'0%'
	},0);
	$(".nav_decs2").animate({
		opacity:'100%'
	},300);
	$(".nav_btn").animate({opacity:'50%'},0);
	$(this).animate({opacity:'100%'},300);
});

$(".common_nav3_2").click(function(){
	$(".nav_word").animate({
		opacity:'0%'
	},0);
	$(".nav_decs3").animate({
		opacity:'100%'
	},300);
	$(".nav_btn").animate({opacity:'50%'},0);
	$(this).animate({opacity:'100%'},300);
});

$(".common_nav4_2").click(function(){
	$(".nav_word").animate({
		opacity:'0%'
	},0);
	$(".nav_decs4").animate({
		opacity:'100%'
	},300);
	$(".nav_btn").animate({opacity:'50%'},0);
	$(this).animate({opacity:'100%'},300);
});

$(".common_nav5_2").click(function(){
	$(".nav_word").animate({
		opacity:'0%'
	},0);
	$(".nav_decs5").animate({
		opacity:'100%'
	},300);
	$(".nav_btn").animate({opacity:'50%'},0);
	$(this).animate({opacity:'100%'},300);
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