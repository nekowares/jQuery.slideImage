(function($) {

	$.fn.slideImage = function(config){

		var options = $.extend(
			{
				OVER_ATTR : 'over',
				ROLLOVER_CLASSNAME : 'rollover'
			},config
		);

		var has_over_attr = '['+options.OVER_ATTR+']';
		var has_rollover_classname = '[class~="'+options.ROLLOVER_CLASSNAME+'"]';
		var elements = $(this).filter(has_over_attr +','+ has_rollover_classname);

		$(has_over_attr).hover(
			function(){
				$(this).data('src', $(this).attr('src')).attr('src', $(this).attr(options.OVER_ATTR));
	    		},
			function(){
	    			$(this).attr('src', $(this).data('src'));
	    		}
		);

		$(has_rollover_classname).hover(
			function(){
				$(this).attr('src',$(this).attr('src').replace(/^(.+)(\.[a-z]+)$/, '$1_on$2'));
		    	},
			function(){
		    		$(this).attr('src', $(this).attr('src').replace(/^(.+)_on(\.[a-z]+)$/, '$1$2'));
	    		}
		);

		return elements.each(function(){

			if($(this).is(has_rollover_classname)){
				var pre_img = $(this).attr('src').replace(/^(.+)(\.[a-z]+)$/, '$1_on$2');
				$('<img>').attr('src', pre_img);
			}
			else if($(this).is(has_over_attr)){
				var pre_img = $(this).attr(options.OVER_ATTR);
				$('<img>').attr('src', pre_img);
			}
		});
	};

})(jQuery);

$(function(){
	$("img").slideImage();
});