/*! forum.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard Forum JS file
========================================================================== */

$(document).ready(function () {

    "use strict";

    if ($('#forum-home').length) {

        //Show additional forum category info on hover
        $('.forum-container .toggle-button').on('click', function(){
            $(this).closest('.forum-wrap').find('.latest-posts-wrap').slideToggle('fast');
            $(this).toggleClass('is-active');
        });
    }

    if ($('#forum-channel').length) {

        //Adjust forum dropdowns
        adjustChannelDropdowns();

        $(window).scroll(function () {
            adjustChannelDropdowns();
        })

        function adjustChannelDropdowns() {
            $('.topic-card-dropdown').each(function () {
                var $this = $(this);

                if (($(this).offset().top + $(this).height()) >= ($(window).height() - 100)) {
                    $($this).addClass("is-up");
                }
                else {
                    $($this).removeClass("is-up");
                }
            })
        }

    }

    if ($('#forum-topic').length) {

        //Variables
        var topicTitle = $('.forum-title').text();
        var topicAuthor = $('.main-menu-avatar').attr('src');
        var authorImage = "<img src='" + topicAuthor + "'>"

        //Init summernote editor
        $('#summernote').summernote({
            placeholder: 'Reply to "' + topicTitle + '..."',
            tabsize: 2,
            height: 200,
            disableResizeEditor: true,
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['fontsize', ['fontsize']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['insert', ['link', 'picture']]
            ],
            callbacks: {
                onInit: function () {
                    $('.note-placeholder').prepend(authorImage);
                }
            }
        });

        //Show reply box
        $('#reply-button').on('click', function(){
            $('.reply-box').toggleClass('is-active');
        })

        //Post reply
        $('#post-reply').on('click', function(){
            var $this = $(this);
            $this.addClass('is-loading');
            setTimeout(function(){
                $this.removeClass('is-loading');
                $('.reply-box').toggleClass('is-active');
                $().successToast('im im-icon-Speach-Bubble11', 'Your reply has been posted');
            }, 1500);
        })

        //Cancel reply
        $('#cancel-reply').on('click', function(){
            $('.reply-box').toggleClass('is-active');
        })

    }

})