$(document).on('click', '.menu.mobile .dropdown:not(clicked)', function() { 

    $('.menu.mobile .dropdown-nav').css({'height':'0', 'opacity':0, 'transform':'translateY(-4rem)'});
    $('.menu.mobile .dropdown svg').css({'transition':'0.3s', 'transform':'rotate(0deg)'});

    $(this).addClass('clicked');
    $(this).find('.dropdown-nav').css({'height':'auto', 'opacity':1, 'transform':'translateY(0)'});
    $(this).find('svg').css({'transition':'0.3s', 'transform':'rotate(180deg)'});
});

$(document).on('click', '.menu.mobile .dropdown.clicked', function() { 
    $(this).removeClass('clicked');
    $(this).find('.dropdown-nav').css({'height':'0', 'opacity':0, 'transform':'translateY(-4rem)'});
    $(this).find('svg').css({'transition':'0.3s', 'transform':'rotate(0deg)'});
}); 

$(document).on('click', '.navbar .hamburger:not(active)', function() { 
    $(this).addClass('active');
    $('.menu.mobile').css({'display':'block', 'transform': 'translateX(0%)'});
}); 

$(document).on('click', '.navbar .hamburger.active', function() { 
    $(this).removeClass('active');
    $('.menu.mobile').css({'display':'none', 'transform': 'translateX(100%)'});
}); 

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var valueSection = document.querySelector('section.values');
var topSpace = valueSection.offsetTop;
console.log(topSpace)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset >= topSpace - 500) {
      console.log('true')
    $('.values .box').addClass('focused');
  }
}