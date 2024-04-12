const newsSlide = tns({
  container: ".news__slide",
  items: 1,
  gutter: 8,
  nav: false,
  controlsContainer: ".news__slide-controls",
  prevButton: ".news__slide-controls .btn--chevron-left",
  nextButton: ".news__slide-controls .btn--chevron-right",
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    1200: {
      items: 1.2,
      gutter: 80,
    },
  },
});
