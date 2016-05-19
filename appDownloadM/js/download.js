;(function(){
	//页面主体加载完成执行
	document.addEventListener('DOMContentLoaded',function(){
		//获取头部下载按钮
		var oDownLoadHeaderBtn = document.querySelector('.header_app_download');
		//获取底部下载按钮
		var oDownLoadFooterBtn = document.querySelector('.footer_app_download');
		//获取android显示的遮罩
		var oDownMask = document.querySelector('.download_Mask');
		//获取关闭遮罩层按钮
		var oDownCloseMask = document.querySelector('.download_close');
		//检测安卓显示遮罩层
		function showMask(){
			if(navigator.userAgent.toLowerCase().search('android') != -1){
				oDownMask.style.display = 'block';
				//遮罩层显示阻止滑动屏幕是内容跟随
				oDownMask.addEventListener('touchstart',function(ev){
					ev.preventDefault();
					return false;
				},false);
			}
		}
		//关闭遮罩层
		function MaskClose(){
			oDownMask.style.display = 'none';
		}
		//头部按钮点击事件
		oDownLoadHeaderBtn.addEventListener('touchstart',showMask,false);
		//尾部按钮点击事件
		oDownLoadFooterBtn.addEventListener('touchstart',showMask,false);
		//关闭遮罩层按钮点击事件
		oDownCloseMask.addEventListener('touchstart',MaskClose,false);
		if(browser.versions.weixin){
			$(".download-app").bind("click", function(){
				$(".wx-share").show();
				$(".Iknow").bind('click', function(){
					$(".wx-share").hide();
				});
			});
		}
		if(browser.versions.android){
			$(".download-app").hide();
		}
	},false);
})();




