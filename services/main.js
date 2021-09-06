isPlaying = false;

function PlayOrPause(){
    if(!isPlaying){
        $('#video')[0].play();
        $('.video').addClass('playing');
        $('.video .overlay img').attr("src","../img/pause-button.png");
        $('.video .overlay p').html("Click here to pause video");
        isPlaying = true;
    }else{
        $('#video')[0].pause();
        $('.video').removeClass('playing');
        $('.video .overlay img').attr("src","../img/play-button.png");
        $('.video .overlay p').html("Click here to play video");
        isPlaying = false;
    }
}

$(function() {
    $(".explore").on('click', function() {
        $("html, body").animate({
            scrollTop: $(".what").offset().top - 70}, 2000);
    });
});