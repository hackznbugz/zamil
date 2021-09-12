$(document).ready(function(){
    $('.products .row').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: $('.products .box .arrow.right'),
      prevArrow: $('.products .box .arrow.left'),
      responsive: [
        {
            breakpoint: 750, // mobile breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 550, // mobile breakpoint
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
