$(document).ready(function () {
  $(".bottom-menu__item").click(function (event) {
    event.stopPropagation();

    $(this).find(".nest-menu__list").toggleClass("active");
    $(this).find(".btn--bottom").toggleClass("active");

    $(".bottom-menu__item")
      .not(this)
      .find(".nest-menu__list")
      .removeClass("active")
      .end()
      .find(".btn--bottom")
      .removeClass("active");
  });

  $(".nest-menu__list").click(function (event) {
    event.stopPropagation();
  });
});
