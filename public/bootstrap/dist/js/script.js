new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: false,
    controlArrows: false,
    slidesNavigation: true,
    scrollingSpeed: 1000,
    anchors: ['section_1', 'section_2', 'section_3', 'section_4']
})

$(window).scroll(function(){
    $('nav').toggleClass('scroll', $(this).scrollTop() > 10);
});

$(document).ready(function(){
    $('.slides').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        dotsClass: 'slick-dots',
        fade: true,
        speed: 2000,
    });
});