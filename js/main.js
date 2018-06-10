/*=================================
           Preloader
=================================*/
$(window).on('load', function () {
    $('#preloader').delay(300).fadeOut();
    $('#status').delay(500).fadeOut();
})

$(document).ready(function () {
    //initialize swiper when document ready
    /*=================================
               Swipe slider
    =================================*/
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true, // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        }, // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    /*=================================
               Owl carousal
    =================================*/

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })



});
