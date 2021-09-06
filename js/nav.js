var opened = '';
var navOpened = false;

$('.links.mobile .dropdown i').click(function(){
    $('.links.mobile .dropdown i').css({'transform':'rotate(0deg)'});
    $('.links.mobile .dropdown .dropdown-content').css({'display':'none'});

    if($(this).closest('.dropdown').index() != opened){
        $(this).css({'transform':'rotate(180deg)'});
        $(this).closest('a').next().css({'display':'block'});
        opened = $(this).closest('.dropdown').index();
    }else{
        opened = '';
    }

    return false;
})

$('nav .hamburger').click(function(){
    if(navOpened){
        $(this).removeClass('active');
        $('.links.mobile').css({'transform':'translateX(100%)'});
        navOpened = false;
    }else{
        $(this).addClass('active');
        $('.links.mobile').css({'transform':'translateX(0)'});
        navOpened = true;
    }
    return false;
})