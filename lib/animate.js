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
		$(this).animate({top: '-30px'}, 'fast');
		$(this).animate({top: '0px'}, 'fast');
		$(this).animate({top: '-10px'}, 'fast');
		$(this).animate({top: '0px'}, 'fast');               
	});
	
	/*
	Function creates a bouncing effect of the elements with class
	".col-sm-4" (thumbnails) at the bottom of the index.html page
	when the mouse enters over the item.
	To be seen on the "index.html" page.	
	*/
	$(".col-sm-4").bind("mouseenter", function(){
		$(this).animate({top: '-20px'}, 'fast');
		$(this).animate({top: '0px'}, 'fast');
		$(this).animate({top: '-10px'}, 'fast');
		$(this).animate({top: '0px'}, 'fast');               
	});
	
	/*
	Function adds a gray border around images with class of
	".img-responsive" when mouse enters over the item.
	To be seen on the "gallery.html" page.	
	*/
	$(".img-responsive").bind("mouseenter", function(){
		$(this).css('border', '5px solid gray');              
	});
	
	/*
	Function adds a gray border around images with class of
	".img-responsive" when mouse leaves the item's area.
	To be seen on the "gallery.html" page.
	*/	
	$(".img-responsive").bind("mouseleave", function(){
		$(this).css('border', '');              
	});		
});