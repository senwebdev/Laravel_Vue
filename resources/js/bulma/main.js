/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file 
========================================================================== */

$(document).ready(function($){
    
    "use strict";

    //Disable sidebar links in development
    $('.is-submenu').each(function(){
        $(this).attr('href', 'javascript:void(0);');
    })

    //Mobile menu toggle
    if ($('.custom-burger').length) {
        $('.custom-burger').on("click", function(){
            $(this).toggleClass('is-active');
            if ($('.navbar-menu').hasClass('is-active')) {
                $('.navbar-menu').removeClass('is-active');
                $('.navbar-fade.navbar-light').removeClass('is-dark-mobile');
            } else {
                $('.navbar-menu').addClass('is-active');
                $('.navbar-fade.navbar-light').addClass('is-dark-mobile');
            }
            //Revert navbar to initial color state
            if ($('.navbar-faded').hasClass('is-dark-mobile')) {
                $('.navbar-faded').removeClass('is-dark-mobile');
            }
            $('.navbar.is-static').toggleClass('is-dark-mobile');
        });
    }
    
    

    //Highlight current page navbar menu item
    if ($('.nav').length) {
        // Get current page URL
        var url = window.location.href;

        // remove # from URL
        url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

        // remove parameters from URL
        url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

        // select file name
        url = url.substr(url.lastIndexOf("/") + 1);

        // If file name not available
        if(url == ''){
            url = 'index.html';
        }

        // Loop all menu items
        $('.nav .navbar-item, li.has-children ul li a.is-submenu, a.footer-nav-link').each(function(){

            // select href
            var href = $(this).attr('href');

            // Check filename
            if(url == href){

                // Add active class
                $(this).addClass('is-active');
            }
        });
    }

    //Page loader
    if ($('.pageloader').length) {

        $('.pageloader').toggleClass('is-active');

        $(window).on('load', function() {
            var pageloaderTimeout = setTimeout( function() {
                $('.pageloader').toggleClass('is-active');
                $('.infraloader').toggleClass('is-active')
                clearTimeout( pageloaderTimeout );
            }, 700 );
        })
    }

    //Website sidebar
    $(".navigation-menu > li.has-children a.parent-link").on("click", function(i){
        i.preventDefault();
        if( ! $(this).parent().hasClass("active") ){
            $(".navigation-menu li ul").slideUp();
            $(this).next().slideToggle();
            $(".navigation-menu li").removeClass("active");
            $(this).parent().addClass("active");
        }
        else{
            $(this).next().slideToggle();
            $(".navigation-menu li").removeClass("active");
        }
    });
    //sidebar category toggle
    $('.category-link').on("click", function(){
        $('.category-link.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })
    //Sidebar close button
    $('.hamburger-btn').on("click", function(){
        $('#navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle, .navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle').toggleClass('active');
    })
    //Menu buttons sync
    $('#navigation-trigger, .navigation-trigger, .navigation-close').on("click", function(){
        $('.side-navigation-menu').toggleClass('is-active');
    })
    //Data navigation menu setup
    $('.category-link').on("click", function(){
        var category_id = $(this).attr('data-navigation-menu');
        $('.navigation-menu-wrapper').addClass('is-hidden');
        $("#" + category_id).removeClass('is-hidden');
    })
    //Manage close links visibility to display only one at a time
    $('.side-navigation-menu').on("mouseenter", function(){
        $('#navigation-trigger').css('opacity', '0');
        $('.navigation-close').css('opacity', '1');
    })
    $('.side-navigation-menu').on("mouseleave", function(){
        $('#navigation-trigger').css('opacity', '1');
        $('.navigation-close').css('opacity', '0');
    })


    // Popovers init
    if ($('[data-toggle="popover"]').length) {
        $('[data-toggle="popover"]').ggpopover();
    }

    // tooltips init
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').ggtooltip();
    }
    
    //Responsive toggle 
    $('.custom-burger').on('click', function(){
        $(this).find('.icon-box-toggle').toggleClass('active');
    })
    
    
    //Navbar fade
    if ($('.navbar-wrapper.navbar-fade.navbar-light').length) {
        $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
        $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
        $(window).on('scroll', function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 65) {
                $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent navbar-light').addClass('navbar-faded');
            } else{
                $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent navbar-light');
            }
        });
    }
    
    //Navbar fade
    if ($('.navbar-wrapper.navbar-fade.navbar-default').length) {
        $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
        $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
        $(window).on('scroll', function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 65) {
                $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent').addClass('navbar-faded');
            } else{
                $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent');
            }
        });
    }
    
    //Navbar Clone
    if ($('.is-cloned').length) {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 50) {
                $(".is-cloned").addClass('is-active');
            } else{
                $(".is-cloned").removeClass('is-active');
            }
        });
    }

    //Attribute background images
    if ($('.has-background-image').length) {
        $(".has-background-image").each(function() {
            var bgImage = $(this).attr('data-background');
            if (bgImage !== undefined) {
                $(this).css('background-image', 'url(' + bgImage + ')');
            } 
        }
    )}

    //Media card background images
    if ($('.media-card-image').length) {
        $(".media-card-image").each(function() {
            var mediaCardImage = $(this).attr('data-background');
            if (mediaCardImage !== undefined) {
                $(this).css('background-image', 'url(' + mediaCardImage + ')');
            } 
        }
    )}

    //Parallax setup
    function parallaxBG() {
        $('.parallax').prepend('<div class="parallax-overlay"></div>');
        $(".parallax").each(function() {
            var attrImage = $(this).attr('data-background');
            var attrColor = $(this).attr('data-color');
            var attrOpacity = $(this).attr('data-color-opacity');
            var attrPositionX = $(this).attr('data-position-x');
            if (attrImage !== undefined) {
                $(this).css('background-image', 'url(' + attrImage + ')');
            }
            if (attrColor !== undefined) {
                $(this).find(".parallax-overlay").css('background-color', '' + attrColor + '');
            }
            if (attrOpacity !== undefined) {
                $(this).find(".parallax-overlay").css('opacity', '' + attrOpacity + '');
            }
            if (attrPositionX !== undefined) {
                $(this).css('background-position-x', '' + attrPositionX + '');
            }
        });
    }
    parallaxBG();

    if ("ontouchstart" in window) {
        document.documentElement.className = document.documentElement.className + " touch";
    }
    if (!$("html").hasClass("touch")) {
        $(".parallax").css("background-attachment", "fixed");
    }

    function fullscreenFix() {
        var h = $('body').height();
        $(".content-b").each(function(i) {
            if ($(this).innerHeight() > h) {
                $(this).closest(".fullscreen").addClass("overflow");
            }
        });
    }
    $(window).resize(fullscreenFix);
    fullscreenFix();

    function backgroundResize() {
        var windowH = $(window).height();
        $(".parallax").each(function(i) {
            var path = $(this);
            var contW = path.width();
            var contH = path.height();
            var imgW = path.attr("data-img-width");
            var imgH = path.attr("data-img-height");
            var ratio = imgW / imgH;
            var diff = 0;
            diff = diff ? diff : 0;
            var remainingH = 0;
            if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
                remainingH = windowH - contH;
            }
            imgH = contH + remainingH + diff;
            imgW = imgH * ratio;
            if (contW > imgW) {
                imgW = contW;
                imgH = imgW / ratio;
            }
            path.data("resized-imgW", imgW);
            path.data("resized-imgH", imgH);
            path.css("background-size", imgW + "px " + imgH + "px");
        });
    }
    $(window).resize(backgroundResize);
    $(window).focus(backgroundResize);
    backgroundResize();

    function parallaxPosition(e) {
        var heightWindow = $(window).height();
        var topWindow = $(window).scrollTop();
        var bottomWindow = topWindow + heightWindow;
        var currentWindow = (topWindow + bottomWindow) / 2;
        $(".parallax").each(function(i) {
            var path = $(this);
            var height = path.height();
            var top = path.offset().top;
            var bottom = top + height;
            if (bottomWindow > top && topWindow < bottom) {
                var imgH = path.data("resized-imgH");
                var min = 0;
                var max = -imgH + heightWindow;
                var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow;
                top = top - overflowH;
                bottom = bottom + overflowH;
                var value = 0;
                if ($('.parallax').is(".titlebar")) {
                    value = min + (max - min) * (currentWindow - top) / (bottom - top) * 2;
                } else {
                    value = min + (max - min) * (currentWindow - top) / (bottom - top);
                }
                var orizontalPosition = path.attr("data-oriz-pos");
                orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
                $(this).css("background-position", orizontalPosition + " " + value + "px");
            }
        });
    }
    if (!$("html").hasClass("touch")) {
        $(window).resize(parallaxPosition);
        $(window).scroll(parallaxPosition);
        parallaxPosition();
    }
    if (navigator.userAgent.match(/Trident\/7\./)) {
        $('body').on("mousewheel", function() {
            event.preventDefault();
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }

    // Back to Top button behaviour
    var pxShow = 600;
    var scrollSpeed = 500;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });

    // Chat widget button
    var chatShow = 100;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= chatShow) {
            $("#bulchat").addClass('visible');
        } else {
            $("#bulchat").removeClass('visible');
        }
    });  

    //Tabs Nav
    var $tabsNav = $('.tabs-nav'),
        $tabsNavLis = $tabsNav.children('li');

    $tabsNav.each(function() {
        var $this = $(this);
        $this.next().children('.tab-content').stop(true, true).hide().first().show();
    });

    $tabsNavLis.on('click', function(e) {
        var $this = $(this);
        $this.siblings().removeClass('active').end().addClass('active');
        $this.parent().next().children('.tab-content').stop(true, true).hide().siblings($this.find('a').attr('href')).fadeIn();
        e.preventDefault();
    });

    var hash = window.location.hash;
    var anchor = $('.tabs-nav a[href="' + hash + '"]');

    if (anchor.length === 0) {
        $(".tabs-nav li:first").addClass("active").show();
        $(".tab-content:first").show();
    } else {
        anchor.parent('li').click();
    }

    //Navigation Tabs
    $('.navigation-tabs ul li').on('click', function() {
        var tab_id = $(this).attr('data-tab');

        $(this).siblings('li').removeClass('is-active');
        $(this).closest('.navigation-tabs').children('.navtab-content').removeClass('is-active');
        //$('.navtab-content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#"+tab_id).addClass('is-active');
    })

    //Scrollspy nav
    $('li.scrollnav-item').on('click', function() {
        $('li.scrollnav-item.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })

    //Preloader
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
    })

    //Datepicker initialization
    if ($('#is-datepicker').length) {
        $('#is-datepicker').dateDropper();
    }

    //Timepicker initialization
    if ($('#is-timepicker').length) {
        $('#is-timepicker').timeDropper({
            primaryColor: '#4FC1EA',
            borderColor:"#4FC1EA",
            backgroundColor:"#FFF",
            init_animation: 'fadeIn',
        });
    }

    //Animates an item with g-item class on hover
    $('.g-item').on("mouseenter", function(){
        $(this).addClass('gelatine');
    })
    $('.g-item').on("mouseleave", function(){
        $(this).removeClass('gelatine');
    })

    // Scroll to hash
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 550, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    //Basic slick carousel (testimonials)
    if ($('.testimonials').length) {
        $('.testimonials').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            autoplay: true,

        });
    }

    //Vertical slick carousel (vertical testimonials)
    if ($('.vertical-testimonials').length) {
        $('.vertical-testimonials').slick({
            autoplay: true,
            arrows: false,
            dots: false,
            slidesToShow: 4,
            centerPadding: "0",
            centerMode: true,
            draggable: false,
            infinite: true,
            pauseOnHover: false,
            swipe: false,
            touchMove: false,
            vertical: true,
            speed: 1000,
            autoplaySpeed: 2500,
            useTransform: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            adaptiveHeight: true,

        });
    }

    //Flat slick carousel
    if ($('.flat-testimonials').length) {
        $('.flat-testimonials').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
        });
    }

    //Image slick carousel
    if ($('.image-carousel').length) {
        $('.image-carousel').slick({
            centerMode: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            centerPadding: '60px',
            prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
            nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //Single image slick carousel
    if ($('.single-image-carousel').length) {
        $('.single-image-carousel').slick({
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
            nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        //centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        //centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //Multiple images slick carousel
    if ($('.multiple-image-carousel').length) {
        $('.multiple-image-carousel').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
            nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //Video embed init
    if ($('#video-embed').length) {
        Video('#video-embed');
    }

    //Counter up init
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    //Chosen select init
    if ($('.chosen-select').length) {
        $(".chosen-select").chosen({
            disable_search_threshold: 6,
            width: '100%'
        });
    }

    //Chosen select multiple init
    if ($('.chosen-multiple').length) {
        $(".chosen-multiple").chosen({
            disable_search_threshold: 10,
            max_selected_options: 5,
            width: '100%'
        });
    }


    //Accordion init
    var $accor = $('.accordion');
    $accor.each(function() {
        $(this).toggleClass('ui-accordion ui-widget ui-helper-reset');
        $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
        $(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
        $(this).find("div").hide();
    });
    var $trigger = $accor.find('h3');
    $trigger.on('click', function(e) {
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
    $('.trigger, .trigger.opened').on('click', function(a) {
        $(this).toggleClass('active');
        a.preventDefault();
    });
    $(".trigger").on('click', function() {
        $(this).next(".toggle-container").slideToggle(300);
    });
    $(".trigger.opened").addClass("active").next(".toggle-container").show();
    
    //Cover video
    if ($('.covervid-video').length) {
        $('.covervid-video').coverVid(1920, 1080);
    }


});

!function ($) {

    "use strict"; // jshint ;_;

    var ggTooltip = function (element, options) {
        this.init('ggtooltip', element, options)
    }

    ggTooltip.prototype = {
        constructor: ggTooltip,

        init: function (type, element, options) {
            var eventIn, eventOut;

            this.type = type;
            this.$element = $(element);
            this.options = this.getOptions(options);
            this.enabled = true;

            if (this.options.trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (this.options.trigger != 'manual') {
                eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus';
                eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur';
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));;
            }

            this.options.selector ?
                (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
                this.fixTitle();
        },

        getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());

            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay
                    , hide: options.delay
                };
            }

            return options;
        },

        enter: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);

            if (!self.options.delay || !self.options.delay.show) return self.show();

            clearTimeout(this.timeout);
            self.hoverState = 'in';
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'in') self.show();
            }, self.options.delay.show);
        },

        leave: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);

            if (this.timeout) clearTimeout(this.timeout);
            if (!self.options.delay || !self.options.delay.hide) return self.hide();

            self.hoverState = 'out';
            this.timeout = setTimeout(function () {
                if (self.hoverState == 'out') self.hide();
            }, self.options.delay.hide);
        },

        show: function () {
            var $tip
                , inside
                , pos
                , actualWidth
                , actualHeight
                , placement
                , tp;

            if (this.hasContent() && this.enabled) {
                $tip = this.tip();
                this.setContent();

                if (this.options.animation) {
                    $tip.addClass('fade');
                }

                placement = typeof this.options.placement == 'function' ?
                    this.options.placement.call(this, $tip[0], this.$element[0]) :
                    this.options.placement;

                inside = /in/.test(placement);

                $tip
                    .detach()
                    .css({ top: 0, left: 0, display: 'block' })
                    .insertAfter(this.$element);

                pos = this.getPosition(inside);

                actualWidth = $tip[0].offsetWidth;
                actualHeight = $tip[0].offsetHeight;

                switch (inside ? placement.split(' ')[1] : placement) {
                    case 'bottom':
                        tp = { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
                        break;
                    case 'top':
                        tp = { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 }
                        break;
                    case 'left':
                        tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth }
                        break;
                    case 'right':
                        tp = { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
                        break;
                }

                $tip
                    .offset(tp)
                    .addClass(placement)
                    .addClass('in');
            }
        },

        setContent: function () {
            var $tip = this.tip(), title = this.getTitle();

            $tip.find('.ggtooltip-inner').css({ 'background': this.options.backcolor, 'color': this.options.textcolor, 'border-color' : this.options.bordercolor  });
            $tip.find('.ggtooltip-arrow').css('border-' + this.options.placement + '-color', this.options.backcolor);
            $tip.find('.ggtooltip-arrow-shadow').css('border-' + this.options.placement + '-color', this.options.bordercolor);
            $tip.find('.ggtooltip-inner')[this.options.html ? 'html' : 'text'](title);
            $tip.removeClass('fade in top bottom left right');
        },

        hide: function () {
            var that = this
                , $tip = this.tip();

            $tip.removeClass('in');

            function removeWithAnimation() {
                var timeout = setTimeout(function () {
                    $tip.off($.support.transition.end).detach();
                }, 500);

                $tip.one($.support.transition.end, function () {
                    clearTimeout(timeout);
                    $tip.detach();
                });
            }

            $.support.transition && this.$tip.hasClass('fade') ?
                removeWithAnimation() :
                $tip.detach();

            return this;
        },

        fixTitle: function () {
            var $e = this.$element;
            if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
                $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        hasContent: function () {
            return this.getTitle();
        },

        getPosition: function (inside) {
            return $.extend({}, (inside ? { top: 0, left: 0 } : this.$element.offset()), {
                width: this.$element[0].offsetWidth
                , height: this.$element[0].offsetHeight
            });
        },

        getTitle: function () {
            var title
                , $e = this.$element
                , o = this.options;

            title = $e.attr('data-original-title')
                || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

            return title;
        },

        tip: function () {
            return this.$tip = this.$tip || $(this.options.template);
        },

        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function () {
            this.enabled = true;
        },

        disable: function () {
            this.enabled = false;
        },

        toggleEnabled: function () {
            this.enabled = !this.enabled;
        },

        toggle: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);
            self[self.tip().hasClass('in') ? 'hide' : 'show']();
        },

        destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type);
        }
    }

    var old = $.fn.ggtooltip;

    $.fn.ggtooltip = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('ggtooltip')
                , options = typeof option == 'object' && option
            if (!data) $this.data('ggtooltip', (data = new ggTooltip(this, options)))
            if (typeof option == 'string') data[option]()
        });
    }

    $.fn.ggtooltip.Constructor = ggTooltip;

    $.fn.ggtooltip.defaults = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="ggtooltip"><div class="ggtooltip-arrow-shadow"></div><div class="ggtooltip-arrow"></div><div class="ggtooltip-inner"></div></div>',
        trigger: 'hover',
        title: '',
        delay: 0,
        html: false,
        backcolor: '#00ffcc',
        textcolor: '#000000',
        bordercolor: '#0066cc'
    }


    $.fn.ggtooltip.noConflict = function () {
        $.fn.ggtooltip = old;
        return this;
    }

}(window.jQuery);
/*! embed.js v1.0.0 | Custom youtube and vimeo embed plugin */

var Video = function (container) {

    var video_url = $(container).data("url");


    function get_video_thumb(url, callback) {
        var id = get_video_id(url);
        if (id['type'] == 'y') {
            return processYouTube(id);
        } else if (id['type'] == 'v') {

            $.ajax({
                url: 'http://vimeo.com/api/v2/video/' + id['id'] + '.json',
                dataType: 'jsonp',
                success: function (data) {
                    callback({type: 'v', id: id['id'], url: data[0].thumbnail_large});
                }
            });
        }

        function processYouTube(id) {
            if (!id) {
                throw new Error('Unsupported YouTube URL');
            }

            callback({
                type: 'y',
                id: id['id'],
                url: 'http://i2.ytimg.com/vi/' + id['id'] + '/hqdefault.jpg'
            });
        }
    }

    function get_video_id(url) {
        var id;
        var a;
        if (url.indexOf('youtube.com') > -1) {
            if (url.indexOf('v=') > -1) {
                id = url.split('v=')[1].split('&')[0];
            }
            else if (url.indexOf('embed') > -1) {
                id = url.split('embed/')[1].split('?')[0];
            }
            ;
            return processYouTube(id);
        }
        else if (url.indexOf('youtu.be') > -1) {
            id = url.split('/')[1];
            return processYouTube(id);
        }
        else if (url.indexOf('vimeo.com') > -1) {
            if (url.match(/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/)) {
                id = url.split('/')[3];
            }
            else if (url.match(/^vimeo.com\/channels\/[\d\w]+#[0-9]+/)) {
                id = url.split('#')[1];
            }
            else if (url.match(/vimeo.com\/groups\/[\d\w]+\/videos\/[0-9]+/)) {
                id = url.split('/')[4];
            }
            else if (url.match(/player.vimeo.com\/video\/[0-9]+/)) {
                id = url.split('/')[2];
            }
            else {
                throw new Error('Unsupported Vimeo URL');
            }

        }
        else {
            throw new Error('Unrecognised URL');
        }
        a = {type: 'v', id: id};
        return a;
        function processYouTube(id) {
            if (!id) {
                throw new Error('Unsupported YouTube URL');
            }
            a = {type: 'y', id: id};
            return (a); // default.jpg OR hqdefault.jpg
        }
    }

    function callback(video) {

        $(container + ' .video-overlay').css({"background-image": "url('" + video.url + "')"});

        var frame;

        if (video.type == 'v') {
            frame = '<iframe src="https://player.vimeo.com/video/' + video.id + '?autoplay=1&color=3aafd6&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
        } else {
            frame = '<iframe src="https://www.youtube.com/embed/' + video.id + '?autoplay=1&color=white&rel=0" frameborder="0" allowfullscreen width="560" height="315" showinfo="0"></iframe>';
        }

        $(container).click(function () {
            $(container).fadeOut('fast', 'linear', function () {
                $(this).html(frame);
                $(this).fadeIn('fast');
            });
        })

    }

    get_video_thumb(video_url, callback);
}