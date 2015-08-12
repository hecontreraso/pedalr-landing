$('#modal-login').modal(options)


// media query event handler. It's used to rearrange items in why pedalr section 
if (matchMedia) {
	var swapped = false;
	var mq = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}
// media query change
function WidthChange(mq) {
	if (mq.matches) {
		console.log("entra");
		swapped = true;
		var textBlock = $('.text-block-second');
		var imageBlock = $('.image-block-second');
		$(imageBlock).before(textBlock.clone());
		$(textBlock).replaceWith(imageBlock);			
		$('.image-block-second').css({"min-height":"310px", "top":"0"});
	}
	else if(swapped){
		console.log("sale");
		swapped = false;
		var textBlock = $('.text-block-second');
		var imageBlock = $('.image-block-second');
		$(imageBlock).before(textBlock.clone());
		$(textBlock).replaceWith(imageBlock);			
	}
}