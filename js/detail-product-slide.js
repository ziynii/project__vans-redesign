var thumbSlide = new Swiper(".thumb__list-slide", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var mainSlide = new Swiper(".thumb__main-slide", {
  spaceBetween: 8,
  thumbs: {
    swiper: thumbSlide,
  },
});

var suggestSlide = new Swiper(".suggest-slide", {
  navigation: {
    nextEl: ".suggest .btn--chevron-right",
    prevEl: ".suggest .btn--chevron-left",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

var recentSlide = new Swiper(".recent-slide", {
  navigation: {
    nextEl: ".recent .btn--chevron-right",
    prevEl: ".recent .btn--chevron-left",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
