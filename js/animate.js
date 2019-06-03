function scrollMouse(classFirst, nameClassAdd) {
  /*$(classFirst).addClass('hidden');*/
  $(classFirst).each(function () {
    var spaceTop = $(this).offset().top;
    var chieucao = $(this).height();
    var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
    var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
    var scrollSpaceTop = $(window).scrollTop();
    if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop < scrollSpaceTop + $(window).height())) {
      $(this).addClass(nameClassAdd);
    }
    else $(this).removeClass(nameClassAdd);
  });
}
/* zoomIn - run-right1 - zoomIn - slideRight - tuvana - zoomIn10 - slideLeft*/
var width = $(window).width();


if ($(window).width() < 768) {
  $(window).scroll(function () {
    scrollMouse('.uudiem .content-left ul li', 'paused');
    scrollMouse('.danhmuc .tab-content .item', 'paused');
    scrollMouse('.about .content .item', 'paused');
    scrollMouse('.choose .nav-tabs li', 'paused');
    scrollMouse('.team .item', 'paused');
    scrollMouse('.services .item', 'paused');
    scrollMouse('.pp-content .item ul li', 'paused');
    scrollMouse('.baiviet-content .item', 'paused');
  });
}
else {
  $(window).scroll(function () {
    scrollMouse('.uudiem .content-left ul li', 'test');
    scrollMouse('.danhmuc .tab-content .item', 'zoom');
    scrollMouse('.about .content .item', 'rotateInDownRight');
    scrollMouse('.choose .nav-tabs li', 'bigEntrance');
    scrollMouse('.team .item', 'hatch2');
    scrollMouse('.services .item', 'pullUp');
    scrollMouse('.pp-content .item ul li', 'stretchLeft');
    scrollMouse('.baiviet-content .item', 'rotateInDownRight');
  });
}