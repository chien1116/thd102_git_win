window.addEventListener("load",function(){
    //  login&signup Page=======================
    // form_background出現,#logInPage優先
    function logInPage_show(){
        $(".form_background").css("display","flex");          
        $('#logInPage').show();
        $('#signUpPage').hide();
    }
    // form_background出現,#SignUpPage優先
    function SignUpPage_show(){
        $(".form_background").css("display","flex");
        $('#logInPage').hide();
        $('#signUpPage').show();
    }

    //點擊其他區域可以再度隱藏
    function logIn_background_hide (){
        $(".form_background").click(function(e){
            if(!e.target.closest(".form")){
                $(".form_background").css("display","none");
            }
        });
    }
    //切換login & signUp
    function login_toggle(){
        $("#logInPage .accountToggle").click(function(){
            $("#logInPage").slideToggle(500,function(){
                $("#signUpPage").slideToggle(500);
            });
        });

        $("#signUpPage .accountToggle").click(function(){
            $("#signUpPage").slideToggle(500,function(){
                $("#logInPage").slideToggle(500);
            });
        }) ;  
    }

    //btn事件觸發執行功能
    $(".logIn").click(function(){
        logInPage_show();
        logIn_background_hide ();
        login_toggle();
    });
    
    $(".signUp").click(function(){
        SignUpPage_show();
        logIn_background_hide ();
        login_toggle();
    });

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
      
    // RWD 1080======================================
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        if (viewportWidth <= 1200 ) {
            //header bar 目錄 click觸發============================
            function show_catalog(e){
                let catalog_el=document.querySelector(".catalog");
                catalog_el.classList.toggle("show");
            }

            document.addEventListener("click",function(e){
                let bar_el = document.querySelector(".fa-solid.fa-bars");
                if(e.target === bar_el){
                    show_catalog(e);
                }
            })

           
          //footer 目錄===============================
            //moseover 
            document.addEventListener("mouseover",function(e){
            
                let title_sm_els=document.querySelector(".sourseInfo").querySelectorAll(".title_sm");

                title_sm_els.forEach(function(title_sm_el){

                    if(e.target===title_sm_el){

                        let link_list_el = e.target.nextElementSibling;
                        let link_list_els=link_list_el.closest(".sourseInfo").querySelectorAll(".link_list");
                        
                        //其他要隱藏(全部都移除.show)
                        link_list_els.forEach(function(link_list){
                            link_list.classList.remove("show");
                        })
                        
                        

                        //其他的顏色不顯白
                        title_sm_els.forEach(function(item) {
                            if (item.classList.contains("show")) {
                            Object.assign(item.style, {
                                color: "#fff"
                            });
                            } else {
                            Object.assign(item.style, {
                                color: "#aaa"
                            });
                            }
                        });
                
                        

                        //點擊到的當下元素的兄弟層 
                        link_list_el.classList.toggle("show");
                        if(link_list_el.classList.contains("show")){
                            Object.assign(e.target.style, {
                                color: "#fff"
                            })
                        }
                        
                    }
                })
                
            })


            // footer 滑鼠離開事件
            function footer_list_hide(){
                let sourseLink_els =  document.querySelectorAll(".sourseLink");
                 
                sourseLink_els.forEach(function(sourseLink_el){
                    sourseLink_el.addEventListener("mouseleave",function(){
                         // 去除 .show
                        let link_list_els=document.querySelectorAll(".link_list");
                        let title_sm_els= sourseLink_el.querySelectorAll(".title_sm");
                        
                        link_list_els.forEach(function(link_list_el){
                            link_list_el.classList.remove("show");
                        });
                        // 顏色全部灰色
                        title_sm_els.forEach(function(title_sm_el){
                            title_sm_el.style.color="#aaa";
                        });
                       
                    })
                })
     
            }
            footer_list_hide()
            
        

            

        }


});



