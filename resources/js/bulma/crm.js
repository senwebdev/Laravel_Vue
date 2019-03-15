/*! crm.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard CRM JS file
========================================================================== */

$(document).ready(function(){

    "use strict";

    if ($('#crm-deal').length) {

        //Init combo boxes
        $().initComboBox();
        $().initStackedComboBox();

        //Toggle active cards on load
        $('.deal-card-content.is-active').slideToggle('fast');

        //Init togglable cards
        $('.deal-card-header.is-toggle').on('click', function(){
            $(this).toggleClass('is-active');
            $(this).closest('.deal-card').find('.deal-card-content').toggleClass('is-active').slideToggle('fast');
        })

        //Toggle deal actions
        $('.action-card .action').on('click', function(){
            var targetAction = $(this).attr('data-action');
            $('.action').removeClass('is-active');
            $(this).addClass('is-active');
            $('.action-wrap').addClass('is-hidden');
            $('#' + targetAction).removeClass('is-hidden');
        })

        //Fileuploader Thumbnails theme
        $('input[name="thumbnails"]').fileuploader({
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'docx', 'xsls', 'xlsx', 'pptx', 'pdf'],
            changeInput: ' ',
            theme: 'thumbnails',
            enableApi: true,
            addMore: true,
            thumbnails: {
                box: '<div class="fileuploader-items">' +
                    '<ul class="fileuploader-items-list">' +
                    '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner"><span>+</span></div></li>' +
                    '</ul>' +
                    '</div>',
                item: '<li class="fileuploader-item">' +
                    '<div class="fileuploader-item-inner">' +
                    '<div class="thumbnail-holder">${image}</div>' +
                    '<div class="actions-holder">' +
                    '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
                    '<span class="fileuploader-action-popup"></span>' +
                    '</div>' +
                    '<div class="progress-holder">${progressBar}</div>' +
                    '</div>' +
                    '</li>',
                item2: '<li class="fileuploader-item">' +
                    '<div class="fileuploader-item-inner">' +
                    '<div class="thumbnail-holder">${image}</div>' +
                    '<div class="actions-holder">' +
                    '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
                    '<span class="fileuploader-action-popup"></span>' +
                    '</div>' +
                    '</div>' +
                    '</li>',
                startImageRenderer: true,
                canvasImage: false,
                _selectors: {
                    list: '.fileuploader-items-list',
                    item: '.fileuploader-item',
                    start: '.fileuploader-action-start',
                    retry: '.fileuploader-action-retry',
                    remove: '.fileuploader-action-remove'
                },
                onItemShow: function (item, listEl) {
                    var plusInput = listEl.find('.fileuploader-thumbnails-input');

                    plusInput.insertAfter(item.html);

                    if (item.format == 'image') {
                        item.html.find('.fileuploader-item-icon').hide();
                    }
                }
            },
            afterRender: function (listEl, parentEl, newInputEl, inputEl) {
                var plusInput = listEl.find('.fileuploader-thumbnails-input'),
                    api = $.fileuploader.getInstance(inputEl.get(0));

                plusInput.on('click', function () {
                    api.open();
                });
            },
            /*
            // while using upload option, please set
            // startImageRenderer: false
            // for a better effect
            upload: {
                url: './php/upload_file.php',
                data: null,
                type: 'POST',
                enctype: 'multipart/form-data',
                start: true,
                synchron: true,
                beforeSend: null,
                onSuccess: function(data, item) {
                    setTimeout(function() {
                        item.html.find('.progress-holder').hide();
                        item.renderThumbnail();
                    }, 400);
                },
                onError: function(item) {
                    item.html.find('.progress-holder').hide();
                    item.html.find('.fileuploader-item-icon i').text('Failed!');
                },
                onProgress: function(data, item) {
                    var progressBar = item.html.find('.progress-holder');

                    if(progressBar.length > 0) {
                        progressBar.show();
                        progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                    }
                }
            },
            dragDrop: {
                container: '.fileuploader-thumbnails-input'
            },
            onRemove: function(item) {
                $.post('php/upload_remove.php', {
                    file: item.name
                });
            },
            */
        });

        //Load more button
        $('.timeline-load .button').on('click', function(){
            var $this = $(this);
            $this.addClass('is-loading');
            setTimeout(function(){
                $this.removeClass('is-loading');
            }, 1000)
        })

    }

})