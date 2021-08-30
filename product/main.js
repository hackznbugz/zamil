$(document).ready(function(){
    $('.products .row').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: $('.products .box .arrow.right'),
      prevArrow: $('.products .box .arrow.left'),
    }); 
 });

$('.buttons .request').click(function(){
    $('.popup-wrapper').css({'visibility':'visible'});
    $('.popup').css({'top':'50%'});
})

$('.popup-wrapper').click(function(){
    $('.popup-wrapper').css({'visibility':'hidden'});
    $('.popup').css({'top':'-50%'});
})
