// ==================================================
// * Project Name   :  Collab – Online Learning Platform Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  15 April 2023, Saturday
// * Author         :  Merkulove (https://themeforest.net/user/merkulove)
// * Developer      :  webrok (https://www.fiverr.com/webrok?up_rollout=true)
// ==================================================

(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.site_header').addClass("sticky")
    } else {
      $('.site_header').removeClass("sticky")
    }
  });
  // sticky header - end
  // --------------------------------------------------

  // OffCanvas - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.offCanvas_close_btn, .offCanvas_overlay').on('click', function () {
      $('.filter_offcanvas.position-fixed').removeClass('active');
      $('.offCanvas_overlay').removeClass('active');
    });

    $('.offCanvas_open_btn').on('click', function () {
      $('.filter_offcanvas.position-fixed').addClass('active');
      $('.offCanvas_overlay').addClass('active');
    });
  });
  // OffCanvas - End
  // --------------------------------------------------

  // Dropdown - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $(".dropdown").on('mouseover', function () {
      $(this).find('> .dropdown-menu').addClass('show');
    });
    $(".dropdown").on('mouseout', function () {
      $(this).find('> .dropdown-menu').removeClass('show');
    });
  });
  // Dropdown - End
  // --------------------------------------------------

})(jQuery);

  // sorting Js
	// Sorting Portfolio JS
	try {
    var mixer = mixitup('#Container', {
        controls: {
            toggleDefault: 'none'
        }
    });
} catch (err) {}