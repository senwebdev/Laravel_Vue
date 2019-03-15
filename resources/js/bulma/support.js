/*! support.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard Support Desk JS file
========================================================================== */

$(document).ready(function () {

    "use strict";

    if ($('#support-dashboard').length) {

        //Wait time
        $(".support-pie").peity("pie", {
            fill: ["#00D1B2", "#c6fff6"],
            innerRadius: null,
            radius: 8,
            height: 90,
            width: 90
        })

        //Chart js page Grouped bar chart
        if ($('#support-chart').length) {
            new Chart(document.getElementById("support-chart"), {
                type: 'bar',
                data: {
                    labels: ["Email", "Phone", "Twitter", "Facebook"],
                    datasets: [
                        {
                            label: "Open",
                            backgroundColor: "#ACBFC5",
                            data: [154, 134, 189, 161]
                        }, {
                            label: "Closed",
                            backgroundColor: "#DEE3E7",
                            data: [121, 92, 142, 112]
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                        text: ''
                    },
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: true,
                            fontSize: 11,
                            fontColor: '#A9ABAC',
                        }
                    },
                    tooltips: {
                        backgroundColor: "rgba(68, 79, 96,0.7)",
                        xPadding: 10,
                        yPadding: 15,
                        cornerRadius: 4,
                        borderColor: "rgba(68, 79, 96,0.7)",
                        caretSize: 4,
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            barThickness: 10,
                            //stacked: true,
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                            scaleLabel: {
                                display: true,
                            },
                            ticks: {
                                fontSize: 9,
                                fontColor: '#999',
                                autoSkip: true,
                                maxTicksLimit: 6,
                            }
                        }],
                        yAxes: [{
                            display: false,
                            //stacked: true,
                            gridLines: {
                                color: "rgba(153, 153, 153, 0.1)",
                            },
                            ticks: {
                                fontSize: 9,
                                fontColor: '#999',
                                autoSkip: true,
                                maxTicksLimit: 6,
                            }
                        }],
                    },
                }
            });
        }

        //Tickets left stack
        $('.shape-left').each(function () {
            var $this = $(this);
            var stepNumber = $(this).attr('data-step');
            var num = parseInt(stepNumber);
            var base = 3;
            if (stepNumber !== '0') {
                var distance = num * base;
                $this.css('bottom', distance + 'px');
            }
        })

        //Tickets right stack
        $('.shape-right').each(function () {
            var $this = $(this);
            var stepNumber = $(this).attr('data-step');
            var num = parseInt(stepNumber);
            var base = 3;
            if (stepNumber !== '0') {
                var distance = num * base;
                $this.css('bottom', distance + 'px');
            }
        })

    }

    if ($('#support-tickets').length) {
        //Tickets tables behaviour
        $('.tickets-table tbody input').on('change', function () {
            $(this).closest('tr').toggleClass('is-highlighted');
            $(this).closest('tr').find('.actions .dropdown, .actions > .button').toggleClass('is-hidden');

            var checkedRows = $('.contacts-table tbody input:checked').length;
        })

        $('.tickets-table th input').on('change', function () {
            var checkedRows = $('.tickets-table tbody input:checked').length;

            if (checkedRows >= 1) {
                $('input:checkbox').prop('checked', false);
                $('.tickets-table tbody tr').removeClass('is-highlighted');
                $('.actions .dropdown').removeClass('is-hidden');
                $('.actions > .button').addClass('is-hidden');
            }
            else {
                $('input:checkbox').prop('checked', this.checked);
                $('.tickets-table tbody tr').addClass('is-highlighted');
            }

        })

        //Adjust dropdowns
        adjustDropdowns();

        $(window).scroll(function () {
            adjustDropdowns();
        })

        function adjustDropdowns() {
            $('.ticket-list-dropdown').each(function () {
                var $this = $(this);

                if (($(this).offset().top + $(this).height()) >= ($(window).height() - 80)) {
                    $($this).addClass("is-up");
                }
                else {
                    $($this).removeClass("is-up");
                }
            })
        }
    }

    if ($('#support-ticket').length) {

        //Animate compose reply textarea
        $('#compose-reply').on('input', function(){
            var inputValue = $(this).val();
            if (!inputValue == '') {
                $('.compose-message').addClass('is-expanded');
            } else {
                $('.compose-message').removeClass('is-expanded');
            }
        })

        //Small uploader
        if ($('.small-uploader').length) {

            //Init combo boxes
            $().initComboBox();
            $().initImageComboBox();

            //Uploader behaviour
            $('#upload-attachments').on('change', function(){
                readURL(this);
            })

            function readURL(input) {
                var mainPreview = $(input).closest('.small-uploader').find('.main-preview');
                var thumbList = $(input).closest('.small-uploader').find('.uploader-previews');
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.fileName = input.files[0].name;
                    reader.fileSize = input.files[0].size;

                    reader.onload = function (e) {
                        $(mainPreview).attr('src', e.target.result);
                        var template = `
                            <div class="uploader-preview has-tooltip" data-placement="top" data-title="${e.target.fileName}">
                                <img src="${e.target.result} alt="">
                                <div class="remove">
                                    <a class="button">
                                        <i class="material-icons">close</i>
                                    </a>
                                </div>
                            </div>
                        `

                        $.when((thumbList).append(template)).done(function () {
                            $().initTooltips();
                            $('.uploader-preview .remove .button').off().on('click', function () {
                                $(this).closest('.uploader-preview').remove();
                                $('.ggtooltip').remove();
                            })
                        })
                    };

                    reader.readAsDataURL(input.files[0]);
                }
            }
        }

        //Save ticket
        $('#save-ticket').on('click', function(){
            var $this = $(this);
            $this.addClass('is-loading');
            setTimeout(function(){
                $this.removeClass('is-loading');
                $this.closest('.quickview').removeClass('is-active');
                $().successToast('im im-icon-Yes', 'your changes have been saved successfully.');
            }, 1000)
        })

    }
})