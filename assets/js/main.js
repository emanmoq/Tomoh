jQuery(function ($) {

  new WOW().init();
    
        $(".nav-link").click(function(){
          $(".nav-link").removeClass("active");
          $(this).addClass("active");
        });
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
/*           $('.navbar-collapse ul li a').on('click', function () {
  if($(this).attr('href')=="TestiMonials"){
    $('html, body').animate({ scrollTop: $(this.hash).offset().top +50 }, 1000);
    $('.navbar-collapse.collapse.in').removeClass('in');

  }
 
  else{
    $('html, body').animate({ scrollTop: $(this.hash).offset().top-50 }, 1000);
    $('.navbar-collapse.collapse.in').removeClass('in');

  }

  return false;
}); */
           
            $('.up a').on('click', function () {
              $('html, body').animate({ scrollTop: $(this.hash).offset().top  }, 1000);
            });
            $('.heroSlider').owlCarousel({
              autoplay:true,
              loop:true,
              margin:30,
              nav:true,
              dots:true,
              rtl:true,
              items:1,
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
                items:1
              },
              600:{
                items:2
              },
              1000:{
                items:4
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
                items:4
              }
              }
              });
            },3000)
          
   
            $('select').selectric({
              disableOnMobile: false,
              nativeOnMobile: false
            });
            $(".close").click(function(){
              $('.navbar-collapse').collapse("hide")})
});

