/*! components-modals.js | Bulkit | CSS Ninja */

/* ==========================================================================
Bulma modals implementation
========================================================================== */

$(document).ready(function($){

    "use strict";

    //Modal user select toggle
    $('.modal-card-body .card-select i').on("click", function(){
        $(this).toggleClass('is-active');
        $(this).closest('.flex-card').toggleClass('is-active');
        $('.save-btn').removeClass('is-disabled');
    })

    //Modal image gallery with slick carousel
    $('.modal-trigger.gallery-trigger').on("click", function(){
        //Prevents carousel from initiating on a non loaded image
        setTimeout(function(){
            $('.slick-gallery').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                autoplay: true,
                infinite: false
            });
        }, 100);
    })

    //Success message modal
    if ($('#success-icon').length) {
        var resetSuccess = $('#success-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.success-trigger').on("click", function(){
            new Vivus('success-icon', {
                type: 'oneByOne',
                duration: 60,
                animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                selfDestroy: true,
                file: 'assets/images/illustrations/icons/modals/success.svg'
            });
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function(){
            $('#success-icon svg').replaceWith( resetSuccess );
        })
    }
    //Error message modal
    if ($('#error-icon').length) {
        var resetError = $('#error-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.error-trigger').on("click", function(){
            new Vivus('error-icon', {
                type: 'oneByOne',
                duration: 60,
                animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                selfDestroy: true,
                file: 'assets/images/illustrations/icons/modals/error.svg'
            });
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function(){
            $('#error-icon svg').replaceWith( resetError );
        })
    }
    //Warning message modal
    if ($('#warning-icon').length) {
        var resetWarning = $('#warning-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.warning-trigger').on("click", function(){
            new Vivus('warning-icon', {
                type: 'oneByOne',
                duration: 60,
                animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                selfDestroy: true,
                file: 'assets/images/illustrations/icons/modals/warning.svg'
            });
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function(){
            $('#warning-icon svg').replaceWith( resetWarning );
        })
    }
    //Info message modal
    if ($('#info-icon').length) {
        var resetInfo = $('#info-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.info-trigger').on("click", function(){
            new Vivus('info-icon', {
                type: 'oneByOne',
                duration: 60,
                animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                selfDestroy: true,
                file: 'assets/images/illustrations/icons/modals/info.svg'
            });
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function(){
            $('#info-icon svg').replaceWith( resetInfo );
        })
    }

})

