// 상품정보 탭
$(document).ready(function () {
  $(".product__detail__tab-menu").click(function () {
    var tabTarget = $(this);
    var target = tabTarget.data("tab");

    $(".product__detail__tab-menu").removeClass("is-active");
    $(".product__detail__tab-content").removeClass("is-select");

    $("#" + target).addClass("is-select");
    tabTarget.addClass("is-active");
  });
});

// 상품정보 아코디언
$(document).ready(function () {
  $(".product__notice-item").click(function (event) {
    event.stopPropagation();

    $(this).find(".content").toggleClass("is-active");
    $(this).find(".btn--bottom").toggleClass("active");

    $(".product__notice-item")
      .not(this)
      .find(".content")
      .removeClass("is-active")
      .end()
      .find(".btn--bottom")
      .removeClass("active");
  });

  $(".nest-menu__list").click(function (event) {
    event.stopPropagation();
  });
});
