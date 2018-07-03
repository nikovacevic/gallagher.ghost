$(function () {
  UI = {};
  UI.viewportHeight = $(window).height();
  UI.viewportWidth = $(window).width();
  UI.fullScreenNav = $("nav#full-screen-nav");
  UI.headerNav = $("header>nav");

  UI.init = function () {
    // Set ATF image
    $("section.atf").css('height', UI.viewportHeight-$('header').height());
    $("section.atf").css('margin-top', $('header').height());

    // Set fixed images
    $("section.fixed-image").css('height', UI.viewportHeight*0.45);
    setTimeout(function () {
      $("body").removeClass('loading');
    }, 250)

    // Remove loading state
    setTimeout(function () {
      $("main, body").removeClass('loading');
    }, 200)
  }

  // Full-screen nav toggle
  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
    $("header").toggleClass('scrolling', !nav.hasClass('visible'));
  }
  $('.toggle-menu').click(function (e, ui) {
    UI.toggleFullScreenNav(UI.fullScreenNav);
  });

  // Set nav scrolling state
  $(window).scroll(function (e, ui) {
    if ($(document).scrollTop() > 30) {
      $('header').addClass('scrolling');
    } else {
      $('header').removeClass('scrolling');
    }
  });

  // Collapse full-screen nav on navigation
  UI.fullScreenNav.find('a').click(function (e, ui) {
    UI.toggleFullScreenNav(UI.fullScreenNav);
  });
});

$(document).ready(function () {
  UI.init();
});
