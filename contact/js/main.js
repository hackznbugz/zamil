$(function() {
    $(".explore").on('click', function() {
        $("html, body").animate({
            scrollTop: $(".box").offset().top - 70}, 2000);
    });
});