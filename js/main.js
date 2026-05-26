// SLIDER LOGIC

  // Thumbnail Swiper
  const thumbsSwiper = new Swiper('.swiper-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    // freeMode: true,
    // watchSlidesProgress: true,
    breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
  });

  // Main Swiper
  const mainSwiper = new Swiper('.main-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
