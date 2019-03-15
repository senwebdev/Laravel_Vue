/*! core.js | Bulkit | CSS Ninja */

/* ==========================================================================
Core functions
========================================================================== */

$(document).ready(function(){

    "use strict";

    //Reusable functions in the app global scope
    (function ($) {

        //Init pageloader
        $.fn.initPageloader = function () {
            if ($('.pageloader').length) {

                $('.pageloader').toggleClass('is-active');

                $(window).on('load', function () {
                    var pageloaderTimeout = setTimeout(function () {
                        $('.pageloader').toggleClass('is-active');
                        $('.infraloader').toggleClass('is-active')
                        clearTimeout(pageloaderTimeout);
                    }, 700);
                })
            }
        };

        //Init mobile hamburger
        $.fn.initMobileMenu = function () {
            if ($('.nav-toggle').length) {
                $('.nav-toggle').on("click", function () {
                    $(this).toggleClass('is-active');
                    $(this).siblings('.nav-menu').toggleClass('is-active');
                })
            }
        };

        //Init dashboard layout
        //$.fn.initDashboardLayout = function () {
        //     //Main menu icon behaviour and push sidebar
        //     $('.side-icon').on("click", function () {
        //         $('.side-icon.is-active').removeClass('is-active');
        //         $(this).addClass('is-active');
        //         $('.menu-wrapper .icon-box-toggle').addClass('active');
        //         $('.child-menu').addClass('is-sidebar-translated');
        //         $('.dashboard-nav, #dashboard-wrapper').addClass('is-pushed');
        //         //disable reader mode switch when sidebar is opened
        //         $('.reader-switch label').addClass('is-disabled');
        //     })
        //
        //     $('.menu-wrapper').on("click", function () {
        //         $('.child-menu').toggleClass('is-sidebar-translated');
        //         $('.dashboard-nav, #dashboard-wrapper').toggleClass('is-pushed');
        //         //enable reader mode switch when sidebar is closed
        //         $('.reader-switch label').removeClass('is-disabled');
        //     })
        //
        //     $('.icon-box-toggle').bind('click', function (e) {
        //         $(this).toggleClass('active');
        //         e.preventDefault();
        //     });
        //
        //     //Sidebar menu submenu transitions
        //     $(".sidebar-menu > li.have-children a.parent-link").on("click", function (i) {
        //         i.preventDefault();
        //         if (!$(this).parent().hasClass("active")) {
        //             $(".sidebar-menu li ul").slideUp();
        //             $(this).next().slideToggle();
        //             $(".sidebar-menu li").removeClass("active");
        //             $(this).parent().addClass("active");
        //         }
        //         else {
        //             $(this).next().slideToggle();
        //             $(".sidebar-menu li").removeClass("active");
        //         }
        //     });
        //
        //     //Data child menu setup
        //     $('.main-menu ul li.side-icon').on("click", function () {
        //         var menu_id = $(this).attr('data-child-menu');
        //         $('.sidebar-menu.is-active').removeClass('is-active');
        //         $("#" + menu_id).addClass('is-active');
        //     })
        //
        //     //Reader mode (only for mobile)
        //     $('#reader-mode-toggle').on("click", function () {
        //         $('body').toggleClass('reader-mode');
        //         $('.mobile-nav').toggleClass('is-fullwidth');
        //     })
        //
        //     //Handle mobile nav
        //     $('#mobile-dashboard-trigger').on('click', function () {
        //         $('.mobile-nav').toggleClass('is-active');
        //         $('.dashboard-wrapper').toggleClass('is-pushed-nav-mobile');
        //     })
        //};

        //Init Quickview
        $.fn.initQuickview = function () {
            $('.quickview-trigger').on("click", function () {
                var quickID = $(this).attr('data-quickview');
                $('#' + quickID).addClass('is-active');
            })
            $('.quickview-close').on("click", function () {
                $(this).closest('.quickview').removeClass('is-active');
            })
        };

        //Init Profile
        $.fn.initProfile = function () {
            //FAB
            $('.profile-trigger').on('click', function () {
                $('.main-menu-avatar, .dot').toggleClass('vanish');
                if ($('.js-hamburger').hasClass('is-active')) {
                    $('.js-hamburger').removeClass('is-active');
                    $('body').removeClass('is-fixed');
                } else {
                    $('.js-hamburger').addClass('is-active');
                    //wait 700ms before adding the fixed class to the body to prevent unpleasant effects
                    setTimeout(function () {
                        $('body').addClass('is-fixed');
                    }, 700);
                }
            });

            //Profile Fab menu
            $('#profile-fab-trigger').on('click', function () {
                if ($(this).children('.icon-box-toggle').hasClass('is-active')) {
                    $(this).children('.icon-box-toggle').removeClass('is-active');
                    $('.profile-fab').toggleClass('is-open');
                } else {
                    $(this).children('.icon-box-toggle').addClass('is-active');
                    $('.profile-fab').toggleClass('is-open');
                }
            })
            //Close fab on menu click
            $('#show-details, #show-team, #show-notifications').on('click', function () {
                $('.profile-fab').removeClass('is-open');
                $('.pop-fab .icon-box-toggle').removeClass('active');
            })
            //Edit profile toggle
            $('.edit-trigger').on('click', function () {
                $('#profile-view').toggleClass('is-hidden');
                $('#edit-view').toggleClass('is-hidden');
            })

            //Navigation for profile sections
            $('#show-details').on('click', function () {
                $('#profile-notifications, #profile-team').addClass('is-hidden');
                $('#profile-details').removeClass('is-hidden');
            })
            $('#show-team').on('click', function () {
                $('#profile-notifications, #profile-details').addClass('is-hidden');
                $('#profile-team').removeClass('is-hidden');
            })
            $('#show-notifications').on('click', function () {
                $('#profile-details, #profile-team').addClass('is-hidden');
                $('#profile-notifications').removeClass('is-hidden');
            })
        };

        //Init dropdowns
        $.fn.initDropdowns = function () {
            $(function () {
                $('.dropdown-trigger').click(function () {
                    $('.dropdown').removeClass('is-active');
                    $(this).addClass('is-active');
                });

                $(document).click(function (e) {
                    var target = e.target;
                    if (!$(target).is('.dropdown img, .kill-drop') && !$(target).parents().is('.dropdown')) {
                        $('.dropdown').removeClass('is-active');
                    }
                    if ($(target).is('.kill-drop')) {
                        $('.dropdown').removeClass('is-active');
                    }
                });

            });
        };

        //Init navigation tabs
        $.fn.initNavigationTabs = function () {
            $('.navigation-tabs ul li').on("click", function () {
                var tab_id = $(this).attr('data-tab');

                $(this).siblings('li').removeClass('is-active');
                $(this).closest('.navigation-tabs').children('.navtab-content').removeClass('is-active');

                $(this).addClass('is-active');
                $("#" + tab_id).addClass('is-active');
            })
        };

        //main variable
        var modalID;

        //Init Modals
        $.fn.initModals = function () {
            //Triggering a modal
            $('.modal-trigger').on("click", function () {
                modalID = $(this).attr('data-modal');
                $('#' + modalID).toggleClass('is-active');
                $('#' + modalID + ' .modal-background').toggleClass('scaleInCircle');
                $('#' + modalID + ' .modal-content').toggleClass('scaleIn');
                $('#' + modalID + ' .modal-close').toggleClass('is-hidden');
                //Prevent sticky fixed nav and backtotop from overlapping modal
                $('#scrollnav, #backtotop').toggleClass('is-hidden');
                //Prevent body from scrolling when scrolling inside modal
                setTimeout(function () {
                    if ($('.dashboard-wrapper').length) {
                        $('body').addClass('is-fixed');
                    }
                }, 700);
            });

            //Closing a modal
            $('.modal-close, .modal-dismiss').on("click", function () {
                $('#' + modalID + ' .modal-background').toggleClass('scaleInCircle');
                $('#' + modalID + ' .modal-content').toggleClass('scaleIn');
                $('#' + modalID + ' .modal-close').toggleClass('is-hidden');
                //Restore native body scroll
                if ($('.dashboard-wrapper').length) {
                    $('body').removeClass('is-fixed');
                }
                setTimeout(function () {
                    $('.modal.is-active').removeClass('is-active');
                    //Restore sticky nav and backktotop
                    $('#scrollnav, #backtotop').toggleClass('is-hidden');

                }, 500);
            })
        };

        //Init Alert boxes
        $.fn.initAlertBoxes = function () {
            $('.alert-box-trigger').on('click', function(){
                var targetAlert = $(this).attr('data-alert-box');
                $('#' + targetAlert).addClass('is-active');
            })
            $('.close-alert').on('click', function(){
                $(this).closest('.alert-box').removeClass('is-active');
            })
        };

        //Init Ripple
        $.fn.initRipple = function () {
            if ($('.ripple').length) {
                (function (window, $) {

                    $(function () {

                        $('.ripple').on('click', function (event) {
                            event.preventDefault();

                            var $div = $('<div/>'),
                                btnOffset = $(this).offset(),
                                xPos = event.pageX - btnOffset.left,
                                yPos = event.pageY - btnOffset.top;



                            $div.addClass('ripple-effect');
                            var $ripple = $(".ripple-effect");

                            $ripple.css("height", $(this).height());
                            $ripple.css("width", $(this).height());
                            $div
                                .css({
                                    top: yPos - ($ripple.height() / 2),
                                    left: xPos - ($ripple.width() / 2),
                                    background: $(this).data("ripple-color")
                                })
                                .appendTo($(this));

                            window.setTimeout(function () {
                                $div.remove();
                            }, 2000);
                        });

                    });

                })(window, jQuery);
            }
        };

        //Init Chosen select
        $.fn.initChosenSelect = function () {
            $(".chosen-select").chosen({
                disable_search_threshold: 10,
                width: '100%'
            });
        };

        //Init Checkboxes
        $.fn.initCheckboxes = function () {
            $(":checkbox").addClass('styled-checkbox');
        };

        //Init Datepicker
        $.fn.initDatepicker = function () {
            $('[data-toggle="datepicker"]').datepicker();
        };

        //Init Timepicker
        $.fn.initTimepicker = function () {
            $('.timepicker-24').wickedpicker({
                twentyFour: true,
                timeSeparator: ':'
            });
        };

        //Init Accordion
        $.fn.initAccordion = function () {
            var $accor = $('.accordion');
            $accor.each(function () {
                $(this).toggleClass('ui-accordion ui-widget ui-helper-reset');
                $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
                $(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
                $(this).find("div").hide();
            });
            var $trigger = $accor.find('h3');
            $trigger.on('click', function (e) {
                var location = $(this).parent();
                if ($(this).next().is(':hidden')) {
                    var $triggerloc = $('h3', location);
                    $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
                    $triggerloc.find('span').removeClass('ui-accordion-icon-active');
                    $(this).find('span').addClass('ui-accordion-icon-active');
                    $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
                }
                e.preventDefault();
            });
            $(".toggle-container").hide();
            $('.trigger, .trigger.opened').on('click', function (a) {
                $(this).toggleClass('active');
                a.preventDefault();
            });
            $(".trigger").on('click', function () {
                $(this).next(".toggle-container").slideToggle(300);
            });
            $(".trigger.opened").addClass("active").next(".toggle-container").show();
        };

        //Init Tootltips
        $.fn.initTooltips = function () {
            if ($('[data-toggle="tooltip"]').length) {
                $('[data-toggle="tooltip"]').ggtooltip({
                    html: true,
                });
            }
        };

        //Init Popovers
        $.fn.initPopovers = function () {
            if ($('[data-toggle="popover"]').length) {
                // code to initialize popovers
                $('[data-toggle="popover"]').ggpopover();
            }
        };

        //Init Busy Switch
        $.fn.initBusySwitch = function () {
            $('#busySwitch').on('click', function () {
                $('.main-menu-avatar + .dot').toggleClass('is-busy');
                //Launch activation notification
                if ($(this).is(":checked")) {
                    iziToast.show({
                        theme: 'dark',
                        backgroundColor: '#eda514',
                        titleColor: '#fff',
                        messageColor: '#fff',
                        icon: 'fa fa-close',
                        title: 'Notification',
                        message: 'You are now in <b>Busy mode</b>',
                        position: 'topCenter',
                        transitionIn: 'flipInX',
                        transitionOut: 'flipOutX',
                        progressBarColor: '#444F60',
                        image: 'https://via.placeholder.com/250x250',
                        imageWidth: 70,
                        layout: 2,
                        onClosing: function () {
                            console.info('onClosing');
                        },
                        onClosed: function (instance, toast, closedBy) {
                            console.info('Closed | closedBy: ' + closedBy);
                        },
                        iconColor: '#fff'
                    });
                    //Launch deactivation notification
                } else {
                    iziToast.show({
                        theme: 'dark',
                        backgroundColor: '#00b289',
                        titleColor: '#fff',
                        messageColor: '#fff',
                        icon: 'fa fa-check',
                        title: 'Notification',
                        message: 'You are now <b>Available</b>',
                        position: 'topCenter',
                        transitionIn: 'flipInX',
                        transitionOut: 'flipOutX',
                        progressBarColor: '#444F60',
                        image: 'https://via.placeholder.com/250x250',
                        imageWidth: 70,
                        layout: 2,
                        onClosing: function () {
                            console.info('onClosing');
                        },
                        onClosed: function (instance, toast, closedBy) {
                            console.info('Closed | closedBy: ' + closedBy);
                        },
                        iconColor: '#fff'
                    });
                }
            })
        };

        //Init Task Fab
        $.fn.initTaskFab = function () {
            $('.fab-btn.complete').on('click', function () {
                $(this).toggleClass('is-active');
                $(this).find('.completed').toggleClass('gelatine');
            })
        };

        //Init Social Fab
        $.fn.initSocialFab = function () {
            $('.social-fab-trigger').on('click', function () {
                if ($(this).children('.plus-toggle').hasClass('is-active')) {
                    $(this).find('.plus-toggle').removeClass('is-active');
                    $(this).closest('.social-fab').toggleClass('is-open');
                } else {
                    $(this).find('.plus-toggle').addClass('is-active');
                    $(this).closest('.social-fab').toggleClass('is-open');
                }
            })
        };

        //Init Like button
        $.fn.initLikeButton = function () {
            $('.fab-btn.like').on('click', function () {
                $(this).toggleClass('is-active');
                $(this).find('.liked').toggleClass('gelatine');
            })
        };

        //Init Pop Dropdowns
        // $.fn.initPopDropdowns = function () {
        //     $('.drop-pop').on('click', function (event) {
        //         event.stopPropagation();
        //         $('.drop-wrapper').hide();
        //         $(this).children('.drop-wrapper').toggle();
        //     })
        //     //Close pop dropdowns on click outside
        //     $(window).on('click', function (event) {
        //         if (!$(event.target).find('.drop-wrapper').length) {
        //             if ($('.drop-wrapper').is(":visible")) {
        //                 $('.drop-wrapper').hide();
        //             }
        //         }
        //     });
        // };

        //Chat emulation
        $.fn.initChat = function () {
            $('#chat-input').on('keypress', function (e) {
                var key = e.which;
                if (key == 13)  // the enter key code
                {
                    //Post new chat message
                    var text = $('#chat-input').val();
                    $('#message-container').append('<div class="chat-message to"><div class="bubble-wrapper"><div class="timestamp">time</div><div class="chat-bubble">' + text + '</div></div><img class="gelatine" src="assets/images/avatars/helen.jpg" alt=""></div>');

                    //code to empty textarea after submit
                    var empty = "";
                    $("#chat-input").val(empty);

                    //prevents the keypress event to trigger a line jump
                    return false;
                }
            });
        };

        //Init Media Cards
        $.fn.initMediaCards = function () {
            if ($('.media-card-image').length) {
                $(".media-card-image").each(function () {
                    var mediaCardImage = $(this).attr('data-background');
                    if (mediaCardImage !== undefined) {
                        $(this).css('background-image', 'url(' + mediaCardImage + ')');
                    }
                }
                )
            }
        };

        //Init Vector Map
        $.fn.initVectorMap = function () {
            if ($('#vmap').length) {
                $('#vmap').vectorMap({
                    map: 'usa_en',
                    backgroundColor: null,
                    colors: {
                        mo: '#00D1B2',
                        fl: '#7f00ff',
                        or: '#00D1B2',
                        ar: '#7f00ff',
                        ca: '#7f00ff',
                        co: '#7f00ff',
                        tx: '#00d1b2',
                        mt: '#00d1b2',
                        wa: '#7f00ff',
                        id: '#7f00ff',
                        ga: '#7f00ff',
                        sc: '#7f00ff',
                        nv: '#00D1B2',
                        az: '#7f00ff',
                        de: '#00d1b2',
                        ia: '#7f00ff',
                        ki: '#7f00ff',
                        ky: '#7f00ff',
                        ct: '#7f00ff',
                        de: '#7f00ff',
                        mn: '#7f00ff',
                        sd: '#00D1B2',
                        wy: '#00D1B2',
                        ut: '#00d1b2',
                        nm: '#00d1b2',
                        nd: '#7f00ff',
                        ne: '#7f00ff',
                        ks: '#00D1B2',
                        ok: '#7f00ff',
                        la: '#7f00ff',
                        ms: '#7f00ff',
                        al: '#7f00ff',
                        wi: '#7f00ff',
                        mi: '#7f00ff',
                        il: '#7f00ff',
                        in: '#7f00ff',
                        oh: '#7f00ff',
                        tn: '#7f00ff',
                        nc: '#7f00ff',
                        wv: '#7f00ff',
                        va: '#7f00ff',
                        md: '#7f00ff',
                        nj: '#7f00ff',
                        pa: '#7f00ff',
                        ny: '#7f00ff',
                        ma: '#7f00ff',
                        nh: '#7f00ff',
                        vt: '#7f00ff',
                        me: '#7f00ff',
                        ak: '#00d1b2',
                        hi: '#7f00ff',
                    },
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: true,
                    borderColor: '#999',
                    showTooltip: true,
                    normalizeFunction: 'polynomial',
                });

                function sizeMap() {
                    var containerWidth = $('#vmap-container').width(),
                        containerHeight = (containerWidth / 1.4);

                    $('#vmap').css({
                        'width': containerWidth,
                        'height': containerHeight
                    });
                }

                sizeMap();
                $(window).on("resize", sizeMap);
            }
        };

        var initialColumnName = '';
        var currentBoard = '';

        //Rename Kanban Board
        $.fn.renameKanbanBoard = function () {
            $('.rename-board').on('click', function () {
                initialColumnName = $(this).closest('.board-box').find('.name').text();
                console.log(initialColumnName);
                $(this).closest('.board-box').find('.header-meta, .dropdown, .control').toggleClass('is-hidden');
                $(this).closest('.board-box').find('input').focus();
            })
            $('.rename-input').on('blur', function () {
                var inputText = $(this).val();
                $(this).val('');
                if (inputText.length == 0) {
                    $(this).closest('.board-box').find('.name').text(initialColumnName);
                    $(this).closest('.board-box').find('.header-meta, .dropdown, .control').toggleClass('is-hidden');
                } else {
                    $(this).closest('.board-box').find('.name').text(inputText);
                    $(this).closest('.board-box').find('.header-meta, .dropdown, .control').toggleClass('is-hidden');
                }
            })
        };

        //Delete Kanban Board
        $.fn.deleteKanbanBoard = function () {
            $('.delete-board').on('click', function () {
                currentBoard = $(this).closest('.board');
            })

            $('.delete-current-column').on('click', function () {
                currentBoard.remove();

                var columnCount = $('.boards-wrapper .board').length;
                if (columnCount > 3) {
                    $('#next-board, #prev-board').removeClass('is-disabled');
                } else {
                    $('#next-board, #prev-board').addClass('is-disabled');
                }

                iziToast.show({
                    class: 'success-toast',
                    icon: 'im im-icon-Delete-Window',
                    title: 'Board deleted successfully!',
                    message: '',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    iconColor: "#fff",
                    backgroundColor: '#7F00FF',
                    progressBarColor: '#444F60',
                    position: 'bottomRight',
                    transitionIn: 'fadeInDown',
                    close: false,
                    timeout: 2000,
                    zindex: 99999,
                });
            })
        };

        //Init Combo boxes
        $.fn.initComboBox = function () {
            $('.is-combo .combo-box').on('click', function () {
                $(this).toggleClass('is-active');
            })

            $('.combo-box .box-dropdown li').on('click', function (e) {

                var target = e.target;
                //Get selected item data
                var itemIconClass = $(this).find('.item-icon i').attr('class');
                var itemIcon = $(this).find('.item-icon i');
                var itemIconClass = $(this).find('.item-icon i').attr('class');
                var itemSvgIcon = $(this).find('.item-icon').html();
                var itemName = $(this).find('.item-name').text();
                var iconTemplate = '<i class="' + itemIconClass + '"></i>'
                var template = '';

                console.log(itemSvgIcon);

                if (!$(target).is('.box-dropdown li, body') && !$(target).parents().is('.box-dropdown')) {
                    $('.box-dropdown').removeClass('is-active');
                }
                if ($(target).is('body')) {
                    $('.box-dropdown').removeClass('is-active');
                }

                //Handle dropdown item active state toggle
                $(this).siblings('li.is-active').removeClass('is-active');
                $(this).addClass('is-active');
                //Update combo box selected value
                if (itemIcon.length) {
                    $(this).closest('.combo-box').find('.combo-item i').remove();
                    $(this).closest('.combo-box').find('.combo-item svg').remove();
                    $(this).closest('.combo-box').find('.combo-item').prepend(iconTemplate);
                    $(this).closest('.combo-box').find('.combo-item .selected-item').text(itemName);
                } else {
                    $(this).closest('.combo-box').find('.combo-item i').remove();
                    $(this).closest('.combo-box').find('.combo-item').prepend(itemSvgIcon);
                    $(this).closest('.combo-box').find('.combo-item .selected-item').text(itemName);
                }
            })
        };

        //Init Combo boxes
        $.fn.initImageComboBox = function () {
            $('.is-combo .image-combo-box').on('click', function () {
                $(this).toggleClass('is-active');
            })

            $('.image-combo-box .box-dropdown li').on('click', function (e) {

                var target = e.target;
                //Get selected item data
                var itemPic = $(this).find('.item-icon img').attr('src');
                var itemName = $(this).find('.item-name').text();

                if (!$(target).is('.box-dropdown li, body') && !$(target).parents().is('.box-dropdown')) {
                    $('.box-dropdown').removeClass('is-active');
                }
                if ($(target).is('body')) {
                    $('.box-dropdown').removeClass('is-active');
                }

                //Handle dropdown item active state toggle
                $(this).siblings('li.is-active').removeClass('is-active');
                $(this).addClass('is-active');
                //Update combo box selected value
                $(this).closest('.image-combo-box').find('.combo-item img').attr('src', itemPic);
                $(this).closest('.image-combo-box').find('.combo-item .selected-item').text(itemName);
            })
        };

        //Init Combo boxes
        $.fn.initStackedComboBox = function () {
            $('.is-combo .stacked-combo-box').on('click', function () {
                $(this).toggleClass('is-active');
            })

            $('.stacked-combo-box .box-dropdown li').on('click', function (e) {
                var target = e.target;
                //Get selected item data
                var itemPic = $(this).find('.item-icon img').attr('src');
                var itemName = $(this).find('.item-name').text();
                var itemRef = $(this).attr('data-skill');
                var initialText = 'Select one or more skills';

                var skillTemplate = `
                    <img id="${itemRef}" class="is-stacked" src="${itemPic}">
                `

                if (!$(target).is('.box-dropdown li, body') && !$(target).parents().is('.box-dropdown')) {
                    $('.box-dropdown').removeClass('is-active');
                }
                if ($(target).is('body')) {
                    $('.box-dropdown').removeClass('is-active');
                }

                //Handle dropdown item active state toggle
                $(this).toggleClass('is-active');
                console.log(skillTemplate);

                if (($('.stacked-combo-box li.is-active').length) == 0) {
                    $('#' + itemRef).remove();
                    $('#img-placeholder').removeClass('is-hidden');
                    $(this).closest('.stacked-combo-box').find('.selected-item').text(initialText);
                } else {
                    $('#img-placeholder').addClass('is-hidden');
                    $(this).closest('.stacked-combo-box').find('.selected-item').text('');
                    if ($('#' + itemRef).length) {
                        $('#' + itemRef).remove();
                    } else {
                        $(this).closest('.stacked-combo-box').find('.combo-item').prepend(skillTemplate);
                    }
                }
            })
        };

        //Init Success toasts
        $.fn.successToast = function (icon, message) {
            iziToast.show({
                class: 'success-toast',
                icon: icon,
                title: 'Success!',
                message: message,
                titleColor: '#fff',
                messageColor: '#fff',
                iconColor: "#fff",
                backgroundColor: '#7F00FF',
                progressBarColor: '#444F60',
                position: 'bottomRight',
                transitionIn: 'fadeInUp',
                close: false,
                timeout: 2000,
                zindex: 99999,
            });
        };


    }(jQuery));

})
