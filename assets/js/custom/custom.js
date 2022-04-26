

// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
$(window).on('load', function () {
    $(".left_bar ").fadeOut(500); 
    $(".left_bar img").fadeOut(200);
    $("#main").css({'overflow':'unset'}); 


});
// Code for preloader will be disappeared after all contents being loaded ######################################-------------------------- Ended 





  //Coding for custom search pop up animation ******************************

  $(".search_btn").click(function(){
    $("#main").css({'overflow':'hidden'}); 
    $("#search_modal").animate({'height':'100%'},350);
    $(".search-wrapper").css({'display':'block'});
    $(".search-wrapper img").show(150);

    setTimeout(function(){
      searchToggle();
    },500)
  });

  $(".nav_search_close").click(function(){
    $(".search-wrapper").css({'display':'block'})
    $("#main").css({'overflow':'unset'}); 

      searchToggle();

      setTimeout(function(){
        $(".search-wrapper img").hide(150);
        $(".search-wrapper").hide(500);
      },1000);

      setTimeout(function(){
        $("#search_modal").animate({'height':'0%'},350);

      },1500);

  });


  function searchToggle(obj){
     $container = $(".nav_search").closest('.search-wrapper');
        if(!$container.hasClass('active')){
            $container.addClass('active');
        }
        else if($container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            $container.removeClass('active');
            // clear input
            $container.find('.search-input').val('');
        }
}

  //Coding for custom search pop up animation ended #########################################################
 



  // Hero Slider coding started from here *****************************************************

  $('.hero_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    fade: true,
    autoplaySpeed: 3000,
    speed:2000,
    cssEase: 'ease-in-out'
  });


  $('.comment_slider').slick({
    slidesToShow: 2 ,
    slidesToScroll: 2,
    autoplay: true,
    arrows:false,
    dots: true,
    autoplaySpeed: 3000,
    speed:2000,
    cssEase: 'ease-in-out',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
          dots: true
        }
      }
    
    ]

  });


// Hero Slider coding ended from here ############################################




// Company Slider animation  started from here *****************************************************-----------------------------


$('.company_slider').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  centerMode: true,
  autoplaySpeed: 2000,

  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 2
    }
  }

  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});




// window.addEventListener('resize', function(){
//   wave();
// });


// Wave animator for process section 
$(document).ready(function(){

  wave();
 

  $("#typed").typed({
    strings: ["SAAS.", "HTML.", "CSS."],
    typeSpeed: 200,
    startDelay: 0,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    cursorChar: "|",
    contentType: 'html'
  });

});


  function wave(){

    $window_width = $(window).width();





        // Code for flowing the path started ended ----------------------------  


    // ------------
    for (let index = 0; index < 3; index++) {
      $("#process .first_process_elements .wave_"+index).addClass("rim"+index);
    }
  
    setTimeout(function(){
  
  
      for (let index = 0; index < 3; index++) {
        $("#process .first_process_elements .wave_"+index).removeClass("rim"+index);
        $("#process .second_process_elements .wave_"+index).addClass("rim"+index);
  
      }
    },2000)
  
  
    setTimeout(function(){
  
  
      for (let index = 0; index < 3; index++) {
        $("#process .second_process_elements .wave_"+index).removeClass("rim"+index);
        $("#process .third_process_elements .wave_"+index).addClass("rim"+index);
  
      }

    },4000)


    setTimeout(function(){
  
      for (let index = 0; index < 3; index++) {
        $("#process .third_process_elements .wave_"+index).removeClass("rim"+index);
      }

      wave();

      },6000);





    // Code for flowing the path started ----------------------------
    $(".flow svg path").css({'opacity': .1, 'fill':'#085BD8'});
    
    $(".first_flow path").each(function(index){
      (function(that, i) { 
        var t = setTimeout(function() { 
            $(that).css({ "opacity":1, "fill":"#085BD8"}); 
        }, 100 * i);
    })(this, index);

    },2500);

   
    if($window_width < 768){
      // Mobile
      setTimeout(function(){
        $($(".last_flow path").get().reverse()).each(function(index){
          (function(that, i) { 
            var t = setTimeout(function() { 
                $(that).css({ "opacity":1, "fill":"#085BD8"}); 
            }, 100 * i);
        })(this, index);
  
      });

      },2500);
  
    }else{
      // Desktop
      setTimeout(function(){
        $(".last_flow path").each(function(index){
          (function(that, i) { 
            var t = setTimeout(function() { 
                $(that).css({ "opacity":1, "fill":"#085BD8"}); 
            }, 100 * i);
        })(this, index);
  
      });
  
  
      },2500);

    }




  }






// Counter animation has started 

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
// Counter Animation has ended 


// Mouse paralax


var rect = $('#learn_more, #about_us')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#learn_more, #about_us").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".slide", -100);
    parallaxIt(".learn_more_img", -30);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#learn_more, #about_us')[0].getBoundingClientRect();
})