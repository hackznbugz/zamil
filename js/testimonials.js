var active = 0;
var length =  $('.testimonials .testimonial').length - 1;


function animate(){
    
    $('.testimonials .testimonial').each(function(){
        if($(this).hasClass('active')){

            $(this).removeClass('active');

            var index = $(this).index();

            $('.testimonials .pagination .round').eq(index).removeClass('active');

            if(index == length){
                index = -1;
                $('.testimonials .testimonial').removeClass('up');
                $('.testimonials .testimonial').removeClass('down');
                $('.testimonials .testimonial').slice(1).addClass('down');
            }else{
                $(this).addClass('up');
            }

            index = index + 1;
            
            $('.testimonials .testimonial').eq(index).addClass('active');
            $('.testimonials .pagination .round').eq(index).addClass('active');

            active = index;

            return false;
            
        }
    })
}


var timeout = setInterval(animate, 5000);

$('.testimonials .pagination .round').each(function(){
    $(this).click(function(){
        var index = $(this).index();

        active = index;

        $('.testimonials .testimonial').removeClass('active');
        $('.testimonials .pagination .round').removeClass('active');
        $('.testimonials .testimonial').removeClass('up');
        $('.testimonials .testimonial').removeClass('down');

        $('.testimonials .testimonial').each(function(){
            if($(this).index() < index){
                $(this).addClass('up');
            }else if($(this).index() > index){
                $(this).addClass('down');
            }
        });

        $('.testimonials .testimonial').eq(index).addClass('active');
        $('.testimonials .pagination .round').eq(index).addClass('active');

        clearInterval(timeout);
        timeout = setInterval(animate, 5000);

    })
})