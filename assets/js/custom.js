$(document).ready(function ($) {
    "use strict";

    // category item
    $('.category_item_active').owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                margin: 10,
            },
            576: {
                items: 4
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
            1200: {
                items: 8
            }
        }
    });

    // category item
    $('.carousel_product_active').owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    });









}(jQuery));