const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    speed: 1000,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        delay: 2000
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      650: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        allowSlideNext: true,
        allowSlidePrev: true,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        allowSlideNext: true,
        allowSlidePrev: true,
      },

        1250: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        allowSlideNext: true,
        allowSlidePrev: true,
      },
    }

});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  speed: 1000,

  pagination: {
    el: '.swiper2 .swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper2 .swiper-button-next',
    prevEl: '.swiper2 .swiper-button-prev',
  },

  breakpoints: {

    1250: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 60,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  }

});