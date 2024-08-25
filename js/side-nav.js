$(document).ready(function () {
  $(".btn--menu").click(function () {
    $(".side-nav").addClass("is-active");
    $(".overlay").addClass("is-active");
    $(".side-nav__wrap").addClass("is-active");
  });

  $(".btn--close").click(function () {
    $(".side-nav").removeClass("is-active");
    $(".overlay").removeClass("is-active");
    $(".side-nav__wrap").removeClass("is-active");
  });
});
