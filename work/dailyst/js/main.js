$(function(){
  $('.slider ul li:gt(0)').hide();

	setInterval(function(){
		$('.slider li:first-child').fadeOut()
		.next('li').fadeIn()
		.end().appendTo('.slider ul')

	
	},3000)

	  $( '.bxslider' ).bxSlider({
        infinite: true,
        cssEase: 'easeOutCubic',
 
        slideMargin: 30,
        slideWidth: 310,
        adaptiveHeight: true,
        minSlides: 3,
        maxSlides: 6,
		auto: true,
        controls: false,
        pager :false,
        moveSlides:1
      });
})