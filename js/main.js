$(document).ready(function () {
  $('.clientbox').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slideToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(document).ready(function () {
  $('.blog_cont').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
     
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

   
     
      {
        breakpoint: 640,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.header').addClass('fixedpos');
    }

    else {
      $('.header').removeClass('fixedpos');
    }

  })
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.header-mob').addClass('fixedpos');
    }

    else {
      $('.header-mob').removeClass('fixedpos');
    }

  })
});

$(document).ready(function(){
  $('.bar').click(function(){
    $('.mob-menu').toggleClass('mob-menu-down');
  })
})

$(document).ready(function () {
  $('.scroll_to_top').hide();

  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.scroll_to_top').show(500);
    }

    else {
      $('.scroll_to_top').hide(500);
    }

  });


});

$('.count').counterUp({
  delay: 10,
  time: 1000
});