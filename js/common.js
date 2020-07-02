$(function(){
	//$(".left-side,.right-side,form").bind('click',function(){
	//	$(".dropdown-menu").css('display','none');
	//});
	/*  $('.dropdown').bind('click',function(){
		 
	     $(this).find("dropdown-menu").toggle();
		 
     }); */
	// $('.user-menu').bind('click',function(){
		 
	//    $(this).find(".dropdown-menu").toggle();
		 
   //  });
	 // $('.tasks-menu').bind('click',function(){
	//	 
	//    $(this).find(".dropdown-menu").toggle();
    // });  

})
var reset; //全局变量,修改广告主密码layer弹窗索引
//ajax提交信息  默认为post提交
function ajaxSubmit( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					rightAjax(data.url);
					layer.close(reset);
				}else{
					layer.close(reset);
					if(data.url!='/admin/'&&data.url!='/'){
						setTimeout(rightAjax(data.url),1500);
					}else if(data.url=='/'){
						setTimeout("window.location.href='/'",1500);
					}else{
						setTimeout('window.location.href='+data.url+'',1500);
					}
					
				}							
			}
		}	
	})
} 
function ajaxSubmitv( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					//rightAjax(data.url);
					layer.close(reset);
				}else{
				//	layer.close(reset);
				//	if(data.url!='/admin/'&&data.url!='/'){
				//		setTimeout(rightAjax(data.url),1500);
				//	}else if(data.url=='/'){
				//		setTimeout("window.location.href='/'",1500);
				//	}else{
				//		setTimeout('window.location.href='+data.url+'',1500);
				//	}
					
				}							
			}
		}	
	})
} 
function ajaxSubmitnm( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					//rightAjax(data.url);
					window.location.reload();
					layer.close(reset);
				}else{
				//	layer.close(reset);
				//	if(data.url!='/admin/'&&data.url!='/'){
				//		setTimeout(rightAjax(data.url),1500);
				//	}else if(data.url=='/'){
				//		setTimeout("window.location.href='/'",1500);
				//	}else{
				//		setTimeout('window.location.href='+data.url+'',1500);
				//	}
					
				}							
			}
		}	
	})
}

function ajaxJump( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return data;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return data;
			//验证成功
			}else if (data.status === 1) {				
					layer.close(reset);
					return data;
										
			}
		}	
	})
} 

function ajaxSubmitk( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					rightAjax(data.url);
					layer.close(reset);
				}else{
					window.location.href="/";	
				}							
			}
		}	
	})
} 
function ajaxSubmitm( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//禁用
			}else if(data.status === 3) {
				alertLayer(data.info,3);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					rightAjax(data.url);
					layer.close(reset);
				}else{
					window.location.href="/admin";	
				}							
			}
		}	
	})
} 
function ajaxSubmitml( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					rightAjax(data.url);
					layer.close(reset);
				}else{
					window.location.href="/index/Percon";	
				}							
			}
		}	
	})
}
function ajaxSubmits( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		dataType:'json',
		data:data,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					rightAjax(data.url);
					layer.close(reset);
				}else{
					window.location.href="/index/Percon";	
				}							
			}
		}	
	})
} 
//ajax提交信息以及处理文件上传  默认为post提交
function ajaxFileSubmit( data , url ) {
	//函数默认参数赋值es5 严谨写法，主要是为了兼容ie，es6可以直接赋值默认函数
	var method= typeof arguments[2]!== 'undefined' ? arguments[2] : 'post' ;

	if( !url || url =='' ){
		url = window.location.href;
	}
	$.ajax({
		url:url,
		type:method,
		data:data,
		dataType: 'json',
		cache: false,
		processData:false, //处理上传文件后被序列化的问题 illegal invocation
		contentType:false,
		async:false,
		success:function( data ){ 
			//验证不通过
			if (data.status === 0 ) {
				alertLayer(data.info,0);
				return;
			//验证信息错误
			}else if(data.status === 2) {
				alertLayer(data.info,2);
				verify();
				return;
			//验证成功
			}else if (data.status === 1) {
				alertLayer(data.info,1);
				if (data.type == 'alertLayerWindow') {
					//关闭广告主修改密码设置弹出窗口
					rightAjax(data.url);
					layer.close(reset);
				}else{
					if (data.url != '/admin/' && data.url != '/') {					
						setTimeout(rightAjax(data.url),1500);
					}else if(data.url == '/'){
						setTimeout("window.location.href ='/'",1500);
					}else{
						setTimeout('window.location.href = '+data.url+'',1500);
					}
				}							
			}
		}	
	})
} 







//layer提示弹窗，cotnent提示内容，0-注意 1-成功 2-错误
function alertLayer( content ){

	var error= typeof arguments[1]!== 'undefined' ? arguments[1] : 0 ;
	var type= typeof arguments[2]!== 'undefined' ? arguments[2] : 0 ;

	layer.open({
		type:type,
		title:'提示',
		icon:error,
		offset:'auto',
		time:1500,
		content:content,
	})
}



//主页ajax 请求页面 
function rightSideLoad(){
	$(document).on('mousedown','.post-ajaxs',function(e){
		
		$('.post-ajax-parent').html($.trim($(this).parent().prev().text()));
		$('.post-ajax-me').html($(this).text());
		//$(this).addClass('active');
		
		//$(this).addClass('active');
		//$(this).siblings('li').find('a').removeClass('active');
		//$(this).siblings('li').removeClass('active');
		//$('.wrapper').removeClass('active relative');
		//通过ajax 回传页面,放弃了iframe用法
		var url = $(this).attr('vincent-href');
		rightAjax(url);
		//传递信息
		

	});
		$(document).on('click','.post-ajax',function(e){
		//通过ajax 回传页面,放弃了iframe用法
		var url = $(this).attr('vincent-href');
		rightAjax(url);
		//传递信息
		//$('.post-ajax-parent').html($.trim($(this).parent().parent().prev().text()));
		//$('.post-ajax-me').html($(this).text());
		//$(this).addClass('active');
		//$(this).parent().siblings('li').find('a').removeClass('active');
		//$(this).parent().addClass('active');
		//$(this).parent().siblings('li').removeClass('active');
		$('.wrapper').removeClass('active relative');
		// console.log());
		//阻止默认点击事件
		if ( e && e.preventDefault ) {
			e.preventDefault(); 
			return false;
		} else{ 
	        window.event.returnValue=fale;
	        return false;
	    }
		
	});
	$(document).on('click','.post-ajax-self',function(e){
		//通过ajax 回传页面,放弃了iframe用法
		var url = $(this).attr('vincent-href');
		rightAjax(url);
		//传递信息
		$('.post-ajax-me').html($(this).text());
		// console.log());
		//阻止默认点击事件
		if ( e && e.preventDefault ) {
			e.preventDefault(); 
			return false;
		} else{ 
	        window.event.returnValue=fale;
	        return false;
	    }
	});
}
rightSideLoad();

// 向右边内容页传递内容

function rightAjax(url){
	var loading = layer.load(2, {
	  shade: [0.3,'black'] 
	});
	$.ajax({
		url:url,
		type:'get',
		dataType:'json',
		complete:function(){
			layer.close(loading);
		},
		success:function(data){
			if (data.status == 2) {
				alertLayer(data.info,2);
			}else{
				$('#right-side-content').html(data);
			}			
		},
		error:function(data){
			$('#right-side-content').html(data.status+data.statusText);
		}
	})
}


//刷新验证码 ,匿名函数

function verify(){
	$(".captcha").get(0).src="/captcha.html?"+Math.random();	
};

       

