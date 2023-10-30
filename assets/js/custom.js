$(document).ready(function ($) {
    // "use strict";
    

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


    // Zomming Image For Single Product
    var zooming_image_content = document.getElementById("zooming_image_content");
    var zooming_image = document.getElementById("zooming_image");

    zooming_image_content.addEventListener("mousemove", function (event) {
        clientX = event.clientX - zooming_image_content.offsetLeft
        clientY = event.clientY - zooming_image_content.offsetTop

        var mWidth = zooming_image_content.offsetWidth
        var mHeight = zooming_image_content.offsetHeight
        clientX = clientX / mWidth * 100
        clientY = clientY / mHeight * 100

        //zooming_image.style.transform = 'translate(-50%,-50%) scale(2)'
        zooming_image.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2)'
    })

    zooming_image_content.addEventListener("mouseleave", function () {
        zooming_image.style.transform = 'translate(-50%,-50%) scale(1)'
    })





}(jQuery));