/*! contacts.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard documents JS file
========================================================================== */

$(document).ready(function(){

    "use-strict";

    if ($('#contacts-list-wrapper').length) {

        if ($('.chosen-select-no-single').length) {
            //Chosen
            var config = {
                '.chosen-select-no-single': {
                    disable_search_threshold: 100,
                    width: "100%"
                },
            };
            for (var selector in config) {
                if (config.hasOwnProperty(selector)) {
                    $(selector).chosen(config[selector]);
                }
            }
        }

    }

    //Contacts tables
    if ($('#contacts-list-wrapper').length) {
        $('.contacts-table tbody input').on('change', function () {
            $(this).closest('tr').toggleClass('is-highlighted');
            $(this).closest('tr').find('.actions .dropdown, .actions > .button').toggleClass('is-hidden');

            var checkedRows = $('.contacts-table tbody input:checked').length;
        })

        $('.contacts-table th input').on('change', function () {
            var checkedRows = $('.contacts-table tbody input:checked').length;

            if (checkedRows >= 1) {
                $('input:checkbox').prop('checked', false);
                $('.contacts-table tbody tr').removeClass('is-highlighted');
                $('.actions .dropdown').removeClass('is-hidden');
                $('.actions > .button').addClass('is-hidden');
            }
            else {
                $('input:checkbox').prop('checked', this.checked);
                $('.contacts-table tbody tr').addClass('is-highlighted');
            }

        })

        adjustDropdowns();

        $(window).scroll(function () {
            adjustDropdowns();
        })

        function adjustDropdowns() {
            $('.contacts-list-dropdown').each(function () {
                var $this = $(this);

                if (($(this).offset().top + $(this).height()) >= ($(window).height() - 250)) {
                    $($this).addClass("is-up");
                }
                else {
                    $($this).removeClass("is-up");
                }
            })
        }
    }

    //Call modal datepicker
    $('#call-picker').datepicker();

    //wickedpicker 12 hours init
    $('#event-timepicker').wickedpicker();

})
