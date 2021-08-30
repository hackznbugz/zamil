var news = [
    {
        title: 'Protesting Pipelines Is Becoming A Growing \'Industry\'',
        date: 'June 14, 2021',
        img: 'news1.png',
    },
    {
        title: 'Lebanon Passes Oil Tax Law Ahead of First Energy Rights Auction',
        date: 'June 22, 2021',
        img: 'news2.png'
    },
    {
        title: 'Global Oil Prices Slip, But Remain Near Recent Highs',
        date: 'July 05, 2021',
        img: 'news3.png'
    },
    {
        title: 'Protesting Pipelines Is Becoming A Growing \'Industry\'',
        date: 'June 14, 2021',
        img: 'news1.png'
    },
    {
        title: 'Lebanon Passes Oil Tax Law Ahead of First Energy Rights Auction',
        date: 'June 22, 2021',
        img: 'news2.png'
    },
    {
        title: 'Global Oil Prices Slip, But Remain Near Recent Highs',
        date: 'July 05, 2021',
        img: 'news3.png'
    }
]

var space = 3;

for(i in news){
    $('.news .news-box .row').append('<div class="content"><div class="image" style="background: url(img/' + news[i].img + ');"></div><p class="caption">' + news[i].title + '</p><span class="date">' + news[i].date + '</span></div>');
}

$(document).ready(function(){
   $('.news-box .row').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     nextArrow: $('.news-box .arrow.right'),
     prevArrow: $('.news-box .arrow.left'),
   }); 
});