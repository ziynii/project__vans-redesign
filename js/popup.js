var toggleMainPopup = function() {
  
    /* 스토리지 제어 함수 정의 */
    var handleStorage = {
      setStorage: function (name, exp) {
        var date = new Date();
        date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  
        localStorage.setItem(name, date)
      },
      getStorage: function (name) {
        var now = new Date();
        now = now.setTime(now.getTime());
        return parseInt(localStorage.getItem(name)) > now
      }
    };
    
    
    if (handleStorage.getStorage("today")) {
      $(".popup").removeClass("on");
    } else {
      $(".popup").addClass("on");
    }
  
    $(".popup").on("click", ".btn--close--today", function () {
      handleStorage.setStorage("today", 1);
      $(this).parents(".popup.on").removeClass("on");
    });
  
    $(".popup").on("click", ".btn--close--once", function () {
      $(this).parents(".popup.on").removeClass("on");
    });
  }
  
  $(function() {
    toggleMainPopup();
  });