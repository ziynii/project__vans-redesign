// 메인배너 탭
$(document).ready(function () {
  $(".main-banner__color-item").click(function () {
    var tabTarget = $(this);
    var target = tabTarget.data("color");

    $(".main-banner__color-item").removeClass("is-active");
    $(".main-banner__image-content").removeClass("is-active");

    $("#" + target).addClass("is-active");
    tabTarget.addClass("is-active");
  });
});
