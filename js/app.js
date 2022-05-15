$(function () {

    $(window).on('scroll', function () {
 
       var scrollSize = $(window).scrollTop()
 
       if (scrollSize > 500) {
          $('#backToTop').css({
             bottom: '40px',
             opacity:1
          });
       } else {
          $('#backToTop').css({
             bottom: '500px',
             opacity:0
          });
       }
    })
 
    $('#backToTop').on('click', function () {
       $('html, body').animate({
          scrollTop:0,
       },1000)
    })
 
 $(window).on('scroll' , function(){
   var scrollSize = $(window).scrollTop()

   if(scrollSize > 65){
      $('#header').addClass('active')
   }
   else {
      $('#header').removeClass('active') 
   }
 })

 $(window).on('load' , function() {
    $('.preloader').fadeOut(800);
 })

$(function(){
   $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
      nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
      autoplaySpeed:500,
      dots:false,
      centerMode:true,
      centerPadding:"0",
   });         
})

$('.counter').counterUp({
   delay: 10,
   time: 1000
});

 })