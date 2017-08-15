// JavaScript Document
/*大总管变量*/
var c=0;

/*获得手机屏幕的高度*/
var winheight=$(window).height();

/*获得总屏数*/
var total=$('#container .box').length;

/*给body添加手指向上滑动事情*/
$("body").get(0).addEventListener("swipeUp",function(){
	c++;
	if(c==total){
		c=total-1;
		}
	/*找到#container里的c号box中的运动元素，让这些运动元素隐藏，并且删除它们class animated属性值*/
	$('#container .box').eq(c).find('.ani').hide().removeClass('animated');
	
	/*设置定时器，一秒钟以后让当前这一屏的运动元素显示，加上class animated属性值 恢复运动*/
	setTimeout(function(){
		$('#container .box').eq(c).find('.ani').show().addClass('animated');
		},1000);
	
	/*计算应该到达的margin-top值*/
	var t=c*-winheight;
	$('#container').css({'margin-top':t+'px'});
	})

/*给body添加手指向下滑动事件*/	
$("body").get(0).addEventListener("swipeDown",function(){
	c--;
	if(c==-1){
		c=0;
		}
	
	$('#container .box').eq(c).find('.ani').hide().removeClass('animated');
	setTimeout(function(){
		$('#container .box').eq(c).find('.ani').show().addClass('animated');
		},1000);
	
	var t=c*-winheight;
	$('#container').css({'margin-top':t+'px'});
	})
	
	
	
$('.fy span.down').click(function(){
		c++;
	if(c==total){
		c=total-1;
		return;
		}
	/*找到#container里的c号box中的运动元素，让这些运动元素隐藏，并且删除它们class animated属性值*/
	$('#container .box').eq(c).find('.ani').hide().removeClass('animated');
	
	/*设置定时器，一秒钟以后让当前这一屏的运动元素显示，加上class animated属性值 恢复运动*/
	setTimeout(function(){
		$('#container .box').eq(c).find('.ani').show().addClass('animated');
		},1000);
	
	/*计算应该到达的margin-top值*/
	var t=c*-winheight;
	$('#container').css({'margin-top':t+'px'});
	})	
	
	
$('.fy span.up').click(function(){
	c--;
	if(c==-1){
		c=0;
		return;
		}
	
	$('#container .box').eq(c).find('.ani').hide().removeClass('animated');
	setTimeout(function(){
		$('#container .box').eq(c).find('.ani').show().addClass('animated');
		},1000);
	
	var t=c*-winheight;
	$('#container').css({'margin-top':t+'px'});
                        })
