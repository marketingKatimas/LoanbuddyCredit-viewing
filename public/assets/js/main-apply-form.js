// ==================================================
// * Project Name   :  LoanBuddy Credit
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  30 March 2026, Monday
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

  // Multy Countdown - Start
  // --------------------------------------------------
  $('.countdown_timer').each(function(){
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime(''
          + '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
          + '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
          + '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
          + '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
      });
    });
  });
  // Multy Countdown - End
  // --------------------------------------------------

  // Data Image - Start
  // --------------------------------------------------
  $("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
  // Data Image - End
  // --------------------------------------------------

  // Data Image Mobile Screens - Start
  // --------------------------------------------------
  $(document).ready(function() {
    function updateBackgrounds() {
        $("[data-background]").each(function() {
            // Check for mobile or desktop background based on screen width
            const isMobile = window.innerWidth <= 768;
            const desktopImage = $(this).attr("data-background");
            const mobileImage = $(this).attr("data-background-mobile");
            
            const isMobileSmallSize = window.innerWidth <= 500;

            // Apply the appropriate background
            const backgroundImage = isMobile ? mobileImage : desktopImage;
            $(this).css("background-image", "url(" + backgroundImage + ")");

            if (isMobileSmallSize) {
              $(this).css({
                "background-size": "auto",
                "background-position": "center",
                "background-repeat": "no-repeat"
              });
            }
            else {
              $(this).css({
                  "background-size": "cover",
                  "background-position": "center",
                  "background-repeat": "no-repeat"
              });
            }

        });
    }
    
    // Run on page load and on window resize
    updateBackgrounds();
    $(window).resize(updateBackgrounds);
  });
  // Data Image Mobile Screens - Start
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
