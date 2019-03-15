/*! dashboard.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard core JS file
========================================================================== */

$(document).ready(function($){

    "use strict";

    //Get Layout type to display navbar shortcut links
    var getLayout = $('.dashboard-columns').attr('id');
    $('#subnav-' + getLayout).removeClass('is-hidden');

    //Set active page link
    var url = window.location.href;
    var activePage = url;
    $('.navbar-subnav a').each(function () {
        var linkPage = this.href;

        if (activePage == linkPage) {
            $(this).addClass("is-active");
        }
    });

    //Auto set mobile layout to reader mode on page load
    setTimeout(function(){
        if (window.matchMedia('(max-width: 767px)').matches) {
            $('#reader-mode-toggle').trigger('click');
            $('#reader-mode-switch').trigger('change');
        }
    }, 500);

    //Mobile menu toggle
    $().initMobileMenu();

    //$().initDashboardLayout();

    //Pop Dropdowns
    //$().initPopDropdowns();

    //Common dropdown
    $().initDropdowns();

    //Init Modals
    $().initModals();

    //Init Alert boxes
    $().initAlertBoxes();

    //Navigation Tabs
    $().initNavigationTabs();

    //Ripple effect
    $().initRipple();

    //Custom quickview initialization with data attributes
    $().initQuickview();

    //datepicker initialization
    $().initDatepicker();

    //wickedpicker 24 hours initialization
    $().initTimepicker();

    //Accordion initialization
    $().initAccordion();

    //Chosen select initialization
    $().initChosenSelect();

    //Adding the styled checkbox styles
    $().initCheckboxes();

    //Initialize tooltips
    $().initTooltips();

    //Initialize popovers
    $().initPopovers();

    //Busy switch behaviour
    $().initBusySwitch();

    //Complete task fab button
    $().initTaskFab();

    //Social Fab menu
    $().initSocialFab();

    //Like button
    $().initLikeButton();

    //Init Profile section
    $().initProfile();

    //Fake chat messages simulation
    $().initChat();

    //Media card background images
    $().initMediaCards();

    //Svg vector map
    $().initVectorMap();

});

