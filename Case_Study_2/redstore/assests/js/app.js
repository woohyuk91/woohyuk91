$(document).ready(function() {
    // Hero slider
    $('#project__slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                items: 1,
                center: true,
                
            },
            600:{
                items: 1,
                center: true,
                
            },
            1024:{
                items: 3,
                center: true,
                
                
            }
        }
    })
});
