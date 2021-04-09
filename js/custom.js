$(function () {
  // Add Class For Navbar
  $(window).scroll(function () {
    var alamin = $(this).scrollTop();
    if (alamin) {
      $('.main_menu').addClass('add_main_menu');
    } else {
      $('.main_menu').removeClass('add_main_menu');
    }
    if (alamin) {
      $('.navbar-brand').addClass('logo_add');
    } else {
      $('.navbar-brand').removeClass('logo_add');
    }
    if (alamin) {
      $('.navbar-nav').addClass('menu_add');
    } else {
      $('.navbar-nav').removeClass('menu_add');
    }
    if (alamin) {
      $('.nav-link').addClass('add_menu_hight');
    } else {
      $('.nav-link').removeClass('add_menu_hight');
    }
  });
  // Bennar Part
  $('.bennar_slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<i class="fas fa-arrow-alt-right slidPrv4"></i>',
    nextArrow: '<i class="fas fa-arrow-alt-right slidNext4"></i>',
  });
  // portfolio slider
  $('.portfolio_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Venubox=======
$(document).ready(function(){
  $('.venobox').venobox(); 
});

  // Service Part=====
  $('.slider_service').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: '<i class="fa fa fa-chevron-up slidPrv4"></i>',
    nextArrow: '<i class="fa fa-chevron-down slidNext4"></i>',
    vertical: true,
    verticalSwiping: true,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


  //    Testimonials Part
  $('.testi_img_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: '<i class="fa fa fa-chevron-up slidPrv5"></i>',
    nextArrow: '<i class="fa fa-chevron-down slidNext5"></i>',
    vertical: true,
    verticalSwiping: true,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.testi_deteils_slider',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    horizontal: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
          ]
  });
  $('.testi_deteils_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      fade: true,
      asNavFor: '.testi_img_slider',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  vertical: false,
                  slidesToShow: 1
              }
      }
  ]

    });
  // CounterUp Part
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // Smoth Scrolling
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // Brand_slider
  $('.brand_slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true
  });

})
// document.documentElement.style.setProperty('--animate-duration', '10s');
AOS.init({
  useClassNames: true,
  initClassName: false,
  // animatedClassName: 'animated',
});