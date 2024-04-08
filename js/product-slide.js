const newProductsSlide = tns({
  container: ".new-arrival__slide",
  items: 1,
  gutter: 8,
  edgePadding: 0,
  nav: false,
  controlsContainer: "#new-arrival__slide-controls",
  prevButton: "#new-arrival__slide-controls .btn--prev",
  nextButton: "#new-arrival__slide-controls .btn--next",
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
});

const bestProductsSlide = tns({
  container: ".best-seller__slide",
  items: 1,
  gutter: 8,
  edgePadding: 0,
  nav: false,
  controlsContainer: "#best-seller__slide-controls",
  prevButton: "#best-seller__slide-controls .btn--prev",
  nextButton: "#best-seller__slide-controls .btn--next",
  mouseDrag: true,
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
});
