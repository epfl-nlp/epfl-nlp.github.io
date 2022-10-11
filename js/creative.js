/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    var after_base_url = window.location.href.split(window.location.host)[1].split('.')[0];
    if (after_base_url == '/' || after_base_url == '/index') {
        // check position to switch nav style
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        })
        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })
    }
    else {
        // add class when we first land on the page
        $('#mainNav').removeClass('affix-top');
        $('#mainNav').addClass('affix');
    }

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
