$(document).ready(function () {
  console.log("reday");
  $(".btn--menu").click(function () {
    console.log("hi");
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
