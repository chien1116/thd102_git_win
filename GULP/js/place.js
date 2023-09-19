window.addEventListener("load",function(){
    //header頁面樣式更換
    let nowpage = document.getElementById("place");
    nowpage.classList.add("nowPage");

    // ************ cards  using: owl-carousel ********** 
    function cards_carousel(){
        "use strict";
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:5,
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
                  items: 2.5
                },
                1400: {
                  items: 3
                }
              }
    
        });

          
    };
    cards_carousel();

    // //卡片導向其他分頁
    // function cards_link(){
    //     $(".card").click(function(e){
    //         //不同卡片導向其他分頁
    //         let nowCard = e.target.closest(".card");
            
    //         if(nowCard.classList.contains("card1")){
    //             window.location.href = "./page_About/about.html";
    //         }else if(nowCard.classList.contains("card2")){
    //             window.location.href = "./page_Blog/blog.html";
    //         }else if(nowCard.classList.contains("card3")){
    //             window.location.href = "./page_FAQ/FAQ.html";
    //         }else if(nowCard.classList.contains("card4")){
    //             window.location.href = "./page_Join/join.html";
    //         }else if(nowCard.classList.contains("card5")){
    //             window.location.href = "./page_Place/place.html";
    //         }else if(nowCard.classList.contains("card6")){
    //             window.location.href = "./page_reservation/reservation.html";
    //         }
    //     })
    // };
    // cards_link();
      
    


});



