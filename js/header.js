let lastScrollTop = 0;
const scrollSensitivity = 60;
const headerHeight = $(".header").outerHeight();

$(window).scroll(function () {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= scrollSensitivity) return;

  if (st > headerHeight) {
    $(".top-menu").addClass("hide");
    if (st > lastScrollTop) {
      $(".header").removeClass("show").addClass("hide");
    } else {
      $(".header").removeClass("hide").addClass("show");
    }
  } else {
    $(".header").removeClass("hide show");
    $(".top-menu").removeClass("hide");
  }
  lastScrollTop = st;
});
