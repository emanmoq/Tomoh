jQuery(function ($) {

  new WOW().init();
    
        $(window).scroll(function () {
          scrollTop = $(window).scrollTop();
        
           if( scrollTop >$('header').height()){
             $("#counter").css("padding-top","150px");
              $('header').addClass('scrollNav');
        
        
           }
           else{
              $('header').removeClass('scrollNav');    
           }
          });
          function onScroll(event){
			
            var scrollPosition = $(document).scrollTop();
            $('.nav-link a[href^="#"').each(function () {
              console.log($(this).attr('href')); 
              var refElement = $($(this).attr("href"));
            //   console.log($(this).attr("href")); //log
              if (refElement.length&&refElement.position().top <= scrollPosition) {
              $('.nav-link').removeClass("active");
              $(this).parent().addClass("active");
              }
       
              else{
              $(this).removeClass("active"); 
              }
          
            });
            }
            $(document).on("scroll", onScroll);
           
            $('.up a').on('click', function () {
              $('html, body').animate({ scrollTop: $(this.hash).offset().top  }, 1000);
            });
            $('.blogCarusel').owlCarousel({
              autoplay:true,
              loop:true,
              margin:10,
        
           rtl:true,
              navText :['<i class="lni-chevron-right"></i>','<i class="lni-chevron-left"></i>'],
              responsive:{
                0:{
                  items:1,
                  margin:5,
  
                },
                600:{
                  items:2,
                  margin:5,
                },
                1000:{
                  items:4,
                  margin:5,
                },
                1300:{
                  items:4,
                  
                }
                }
            });
            $('.heroSlider').owlCarousel({
              autoplay:true,
              loop:true,
              margin:10,
              nav:true,
              dots:true,
              items:1,
           rtl:true,
              navText :['<i class="lni-chevron-right"></i>','<i class="lni-chevron-left"></i>'],
            });
            setTimeout(function(){   
              $('.partnerSlider').owlCarousel({
                autoplay:true,
                loop:true,
                margin:70,
                dots:true,
                rtl:true,

            
              responsive:{
              0:{
                items:1,
                margin:5,

              },
              600:{
                items:2,
                margin:5,
              },
              1000:{
                items:2,
                margin:5,
              },
              1300:{
                items:4,
                
              }
              }
              });
              $('.gallerySlider').owlCarousel({
                autoplay:true,
                loop:true,
                margin:17,
                nav:true,
                rtl:true,
                navText :['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],
              responsive:{
              0:{
                items:1
              },
              600:{
                items:2
              },
              1000:{
                items:2
              },
              1300:{
                items:4
              }
              }
              });
              
            },1000);
            $('.ourTeamCar').owlCarousel({
              autoplay:true,
              loop:true,
              margin:17,
              rtl:true,
            
            responsive:{
            0:{
              items:1,
              nav:false
            },
            600:{
              items:2,
              nav:false

            },
            1000:{
              nav:true,
              items:2
            }
            ,
            1300:{
              nav:true,
              items:4
            }
            
            }

            });
            $('.newsCar').owlCarousel({
              autoplay:true,
              loop:true,
             rtl:true,
             margin:15,
            responsive:{
            0:{
              items:1
            },
            600:{
              items:2
            },
            1000:{
              items:2,
              nav:true,
            },
            1300:{
              items:4,
              nav:true,
            }
            }

            });
           
            $(".close").click(function(){
              $('.navbar-collapse').collapse("hide");
              $(".overlay").css("display","none");
            }  
              );
              $(".overlay").click(function(){
               $('.navbar-collapse').collapse("hide");
               $(".overlay").css("display","none");
              });

              $(".navbar-toggler").click(function(){
                  $(".overlay").css("display","block");
              });
              $("a.image_thumb").fancybox({
                'transitionIn'	:	'elastic',
                'transitionOut'	:	'elastic',
                'speedIn'		:	600, 
                'speedOut'		:	200, 
                'overlayShow'	:	false
              });
              $(".up").on("click",function(){$("html, body").animate({scrollTop:0},"slow");return false;});
              $(".loginLang .searchFamily i").click(function(){
                $(this).css("color", "#515151");
                $(".loginLang .form-group .form-control").css({"width": "100%" ,  "border": "solid 1px #ebebeb;","padding": "10px"}); 
              });

              
       

  

    
});

