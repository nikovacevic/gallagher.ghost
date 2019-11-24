$(function () {
  UI = {};
  UI.viewportHeight = $(window).height();
  UI.viewportWidth = $(window).width();
  UI.fullScreenNav = $("nav#full-screen-nav");

  UI.init = function () {
    // Set ATF image
    $("section.atf").css('height', UI.viewportHeight);

    // Set fixed images
    $("section.fixed-image").css('height', UI.viewportHeight*0.45);
    setTimeout(function () {
      $("body").removeClass('loading');
    }, 250)
  }

  // Full-screen nav toggle
  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
  }
  $('.toggle-menu').click(function (e, ui) {
    UI.toggleFullScreenNav(UI.fullScreenNav);
  });

  // Collapse full-screen nav on navigation
  UI.fullScreenNav.find('a').click(function (e, ui) {
    UI.toggleFullScreenNav(UI.fullScreenNav);
  });
});

$(document).ready(function () {
  UI.init();
});
