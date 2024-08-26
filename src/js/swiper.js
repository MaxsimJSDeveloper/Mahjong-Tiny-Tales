new Swiper('.swiper-gallery', {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 2,
      simulateTuch: true,
      touchRatio: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      autoHeight: true,
    },
  },
});
