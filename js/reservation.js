window.addEventListener("load",function(){

    // ************ cards  using: owl-carousel ********** 
    function cards_carousel(){
        "use strict";
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:6,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:4000,
            smartSpeed: 1500,
            autoplayHoverPause:true,
            center: true,
            margin:40,
            dots:false,
            responsive: {
                0: {
                items: 1
                },
                768: { //768~1170
                items: 1.5
                },
                1400: {
                items: 3
                }
            }

        });

        
    };
    cards_carousel();

})