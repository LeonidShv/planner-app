const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: getSlidesPerView(),
    spaceBetween: 24
  });

  function getSlidesPerView() {
    if (window.screen.width < 1000) {
        return 2;
    }

    if (window.screen.width < 1300) {
        return 3;
    }

    return 4;
  }