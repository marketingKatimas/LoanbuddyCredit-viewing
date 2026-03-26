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
                "background-size": "100% 800px",
                "background-position": "top",
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