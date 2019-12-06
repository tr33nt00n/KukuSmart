$(window).scroll(function(){
    $('nav').toggleClass('scroll', $(this).scrollTop() > 10);
});

$(document).ready(function () {  
    $('.slides').slick({
        autoplay: true, 
        autoplaySpeed: 3000, 
        arrows: false, 
        dots: false, 
        dotsClass: 'slick-dots', 
        fade: true,
        speed: 2000
    });
});