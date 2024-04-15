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
