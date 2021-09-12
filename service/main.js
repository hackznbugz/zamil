$(document).ready(function(){
    $('.services .row').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: $('.services .box .arrow.right'),
      prevArrow: $('.services .box .arrow.left'),
      responsive: [
        {
            breakpoint: 650, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
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
