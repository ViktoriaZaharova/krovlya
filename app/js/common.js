$(function () {

  var swiper = new Swiper('.home_carousel', {
    loop: true,
    autoplay: {
      delay: 5000
    },
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination'
    },
    speed: 500,
    effect: 'fade'
  });


  var swiper = new Swiper('.popular_carousel', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      1080: {
        slidesPerView: 4,
        spaceBetween: 55
      },
      998: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      720: {
        slidesPerView: 2
      },
      544: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  var swiper = new Swiper('.cart_slider', {
    loop: true,
    // effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  var swiper = new Swiper('.slider_recomended', {
    loop: true,
    direction: 'vertical',
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      1050: {
        direction: 'horizontal',
        slidesPerView: 3
      },
      850: {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 20
      },
      400: {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  $('.fancybox-img').fancybox();


  $('.filter_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    // $('.filter_title').not(this).removeClass('in').next().slideUp();
  });

  $('.slider-range').slider({
    range: false,
    min: 3000,
    max: 5000,
    value: 5000,
    classes: {
      "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
      //Поле минимального значения
      $(".dec1").val(ui.value);
      //Поле максимального значения
      // $(".dec2").val(ui.values[1]);
    }
  });
  //Записываем значения ползунков в момент загрузки страницы
  //То есть значения по умолчанию
  $(".dec1").val($(".slider-range").slider("value"));
  $(".dec2").val($(".slider-range").slider("value"));

  $('.slider-thickness').slider({
    range: false,
    min: 1.1,
    max: 10,
    value: 10,
    step: 0.1,
    classes: {
      "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
      //Поле минимального значения
      $(".dec3").val(ui.value);
      //Поле максимального значения
      // $(".dec2").val(ui.values[1]);
    }
  });
  //Записываем значения ползунков в момент загрузки страницы
  //То есть значения по умолчанию
  $(".dec3").val($(".slider-thickness").slider("value"));
  $(".dec4").val($(".slider-thickness").slider("value"));


   // табы
  $(".wr-tabs").on("click", ".tab", function(){

    var tabs = $(".wr-tabs .tab"),
      cont = $(".wr-tabs .tab-cont");

    // Удаляем классы active
    tabs.removeClass("active");
    cont.removeClass("active");
    // Добавляем классы active
    $(this).addClass("active");
    cont.eq($(this).index()).addClass("active");

    return false;
  });


  $(function () {
    var pull = $('#mobile_mnu');
    menu = $('.menu');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });

  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $('.bottom_line').addClass('fixed');
    } else {
      $('.bottom_line').removeClass('fixed');
    }
  });

});

