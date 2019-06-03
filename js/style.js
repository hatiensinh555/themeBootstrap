$(document).ready(function () {
  // $(window).resize(function () {
  //   var w = $(window).width();
  //   if (w > 768) {
  //     $('navbar-nav').css("display", "inline-flex");
  //   }
  // });

  $('#pull').click(function () {
    $('nav .category').slideToggle();
    // if ($('nav .navbar-collapse .navbar-nav li').hasClass('MClick')) {
    // $('nav .navbar-collapse .navbar-nav li').removeClass('MClick');
    // $('nav .navbar-collapse .navbar-nav').slideUp();
    // $('nav .navbar-header').css("display", "block");
    // $('nav .searchForm').css("display", "block");

    // $('#pull').css("top", "-0.7em");
    // }
    // else {
    // $('#pull').css("top", "0.3em");
    // $('nav .navbar-collapse .navbar-nav li').addClass('MClick').css("padding-top", "0");
    // $('nav .navbar-collapse .navbar-nav li a').css("padding-top", "0");
    // $('nav .navbar-collapse .navbar-nav').toggle(300);
    // $('nav .navbar-header').css("display", "none");
    // $('nav .searchForm').css("display", "none");
    // $('nav .category').slideToggle();
    // }
  });

  /**
   * Add active class when clicking on nav item
   */
  // $('.nav>li').click(function () {
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //   } else {
  //     $(this).addClass('active');
  //   }
  // });

  $('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
  }, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(500);
  });

  $('.danhmuc .nav-tabs>li>a').click(function () {
    $('.danhmuc .tab-content .item').addClass('zoom');
  });

  var call = false;
  $(window).scroll(function () {
    var hT = $('#solieu').offset().top;
    var hH = $('#solieu').outerHeight();
    var hB = hT + hH;
    var wS = $(window).scrollTop();
    var wH = $(window).height();
    var wB = wS + wH;
    if (wS > (hT - 500) && wS < hB) {
      if (call == false) {
        $('.solieu').find('span:not(.intro)').each(function () {
          autoASC(parseInt($(this).text()), $(this));
        });
        call = true;
        // wS > (hT+hH-wH)
      }
    } else {
      call = false;
    }
  });

});

function autoASC(a, $this) {
  var text = 0;
  setInterval(function () {
    if (text <= a) {
      $this.text(text);
      text = text + 5;
    }
  }, (50 / a));
}

$(document).ready(function() {
  var lastScroll = 0;
  $(window).scroll(function () {
    var nowScroll = $(this).scrollTop();
    if (nowScroll < lastScroll && nowScroll != 0) {
      $('#goTop').addClass('goTop');
      // $('nav').addClass('fixed');
    } else {
      $('#goTop').removeClass('goTop');
      // $('nav').removeClass('fixed');
    }
    lastScroll = nowScroll;
  });
})
