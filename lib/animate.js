/* 
Function fires to animate the img when the mouse is clicked  over the element img
 of the class 'carousel-slide'.
The next function fires to animate the images when the mouse hovers over the
thumbnail columns.
 */
$(document).ready(function(){
	/* 
	Function fires to animate the img when the mouse is clicked  over
	the element img of the class 'carousel-slide'.
	To be seen on the "index.html" page.	
   */
	$(".item").bind("click", function(){
		$(this).animate({top: '-5px'}, 'fast');
		$(this).animate({top: '0px'}, 'fast');
		$(this).animate({top: '-2.5px'}, 'fast');
		$(this).animate({top: '0px'}, 'fast');               
	});
	
	/*
	Function creates a bouncing effect of the elements with class
	".col-sm-4" (thumbnails) at the bottom of the index.html page
	when the mouse enters over the item.
	To be seen on the "index.html" page.	repaced with transition hover.
	*/
	// $(".col-sm-4").bind("mouseenter", function(){
	// 	$(this).animate({top: '-2.5px'}, 'fast');
	// 	$(this).animate({top: '0px'}, 'fast');               
	// });
	
	/*
	Function adds a gray border around images with class of
	".col-md-8" when mouse enters over the item.
	Was previously used on gallery.html, but repaced with transition hover.
	*/
	// $(".animate").bind("mouseenter", function(){
	// 	// $(this).css('border', '0.5px solid #C8C8C8');  
	// 	// $(this).css('border-radius', '5px');  
	// 	$(this).animate({top: '-2.5px'}, 'fast');
	// 	$(this).animate({top: '0px'}, 'fast');                     
	// });
	
	/*
	Function adds a gray border around images with class of
	".col-md-8" when mouse leaves the item's area.
	To be seen on the "gallery.html" page.
	*/	
	// $(".animate").bind("mouseleave", function(){
	// 	$(this).css('border', '');              
	// });		
});