var index = 1
$('.gallery .img').each(function(){
    $(this).css({'background':'url(gallery/image' + index + '.png)'});
    index ++;
});

$('.gallery .img').css({'background-size':'cover', 'background-position':'center'})