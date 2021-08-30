var images = [
    'gallery/image1.png',
    'gallery/image2.png',
    'gallery/image3.png',
    'gallery/image4.png',
    'gallery/image5.png',
    'gallery/image6.png',
]

var index = 1
$('.gallery .img').each(function(){
    $(this).css({'background':'url(' + images[index-1] + ')'});
    index ++;
});

$('.gallery .img').css({'background-size':'cover', 'background-position':'center'})

$('.gallery .img').click(function(){
    var bg = $(this).css('background').replace(/^url\(['"](.+)['"]\)/, '$1');
    $('.gallery-carousel').css({'display':'block'});
    $('.gallery-carousel .image').css({'background':bg});
    index = $(this).index() + 1;
})

$('.gallery-carousel .arrow.right').click(function(){
    index = index + 1;
    if(index > images.length){
        index = 1;
    }
    $('.gallery-carousel .image').css({'background':'url(' + images[index-1] + ')'});
})

$('.gallery-carousel .arrow.left').click(function(){
    index = index - 1;
    if(index == 0){
        index = images.length;
    }
    $('.gallery-carousel .image').css({'background':'url(' + images[index-1] + ')'});
})

$('.gallery-carousel .top i').click(function(){
    $('.gallery-carousel').css({'display':'none'});
})