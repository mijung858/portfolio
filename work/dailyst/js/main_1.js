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
        slideWidth: 4000,
        // slideMargin: 10,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
		auto: true,
      });
})