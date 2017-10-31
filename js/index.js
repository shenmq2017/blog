$(function(){
	var sidebar=$('#sidebar');
	var mask=$('.mask');
	var sidebar_trigger=$('#sidebar_trigger');
	var comeBack=$('#comeBack');
	function showSidebar(){
		mask.fadeIn();
		sidebar.css('right',0);
	}
	function hideSidebar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	sidebar_trigger.on('click',showSidebar);
	mask.on('click',hideSidebar);
	comeBack.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	});
	$(window).on('scroll',function(){
		if ($(window).scrollTop() > $(window).height()) {
			comeBack.fadeIn();
		}else{
			comeBack.fadeOut();
		}
	})
	$(window).trigger('scroll');
})