// $('.enquiry-button').click(function(e){
//     $('div.body').css({'filter':'brightness(50%)'});
//     $('.popup').addClass('focused');

// });

$('div.body').click(function(e){

    if($(e.target).is('.enquiry-button')){
        $('div.body').css({'filter':'brightness(50%)'});
        $('.popup').addClass('focused');
        e.preventDefault();
        return;
    }else{
        $('div.body').css({'filter':'brightness(100%)'});
        $('.popup').removeClass('focused');
    }
    
});