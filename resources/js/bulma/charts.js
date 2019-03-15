/*! charts.js | Bulkit | CSS Ninja */

/* ==========================================================================
All Template Charts
========================================================================== */

$(document).ready(function(){

    "use strict";

    /* ==========================================================================
    Peity charts
    ========================================================================== */

    //Small bar chart widget
    $(".small-bars").peity("bar", {
        fill: ["#fff"],
        height: 30,
        width: '15%'
    })

    //Stat widget bars
    $(".widget-bars").peity("bar", {
        fill: ["#fff"],
        height: 45,
        width: '100%'
    })

    //Projects widget pies
    $(".project-pies").peity("pie", {
        fill: ["#7F00FF", "#ddd"],
        innerRadius: null,
        radius: 8,
        height: 32,
        width: '100%'
    })

    //Activity widget line
    $(".widget-lines").peity("line", {
        fill: ["#fff"],
        stroke: "#fff",
        height: 45,
        width: '100%'
    })

    //Best managers widget donuts
    $(".manager-pies").peity("pie", {
        fill: ["#00D1B2", "#fff"],
        innerRadius: null,
        radius: 8,
        height: 45,
        width: '100%'
    })

    //Feed page updating chart
    var updatingChart = $(".updating-chart").peity("line", {
        width: '100%',
        height: 40,
        fill: "#8c19ff",
        stroke: "#fff",
        strokeWidth: 2
    })

    setInterval(function () {
        var random = Math.round(Math.random() * 10)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000)

    //Peity js page charts
    if ($('.peityjs-pie, .peityjs-pieAlt, .peityjs-donut, .peityjs-donutAlt, .peityjs-line, .peityjs-bar, .peityjs-line-updating').length) {

        //Peity pies
        $(".peityjs-pie").peity("pie", {
            height: 55,
            width: 55,
            fill: ["#00D1B2", "#999"],
        })

        $(".peityjs-pieAlt").peity("pie", {
            height: 55,
            width: 55,
            fill: ["#00D1B2", "#7F00FF", "#536dfe", "#999"],
        })
        //Peity donuts
        $(".peityjs-donut").peity("donut", {
            height: 55,
            width: 55,
            fill: ["#00D1B2", "#999"],
            innerRadius: 20,
        })

        $(".peityjs-donutAlt").peity("donut", {
            height: 55,
            width: 55,
            fill: ["#00D1B2", "#7F00FF", "#536dfe", "#999"],
        })
        //Peity lines
        $(".peityjs-line").peity("line", {
            delimiter: ",",
            height: 25,
            max: null,
            min: 0,
            strokeWidth: 1,
            width: '100%'
        })
        //Peity bars
        $(".peityjs-bar").peity("bar", {
            delimiter: ",",
            height: 25,
            max: null,
            min: 0,
            padding: 0.1,
            width: '100%'
        })

        //Updating charts
        var updatingChart = $(".peityjs-line-updating").peity("line", {
            delimiter: ",",
            height: 50,
            max: null,
            min: 0,
            strokeWidth: 1,
            width: '100%'
        })

        setInterval(function () {
            var random = Math.round(Math.random() * 10)
            var values = updatingChart.text().split(",")
            values.shift()
            values.push(random)

            updatingChart
                .text(values.join(","))
                .change()
        }, 1000)
    }

    /* ==========================================================================
    Chart js charts
    ========================================================================== */

    //Dashboard charts
    var ctx2 = $("#lineChart");
    var ctx3 = $("#doughnutChart");


    if ($('#lineChart').length) {
        var dashLineChart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
                datasets: [{
                    data: [85698, 196325, 225149, 120589, 45036, 68749],
                    backgroundColor: ["rgba(127, 0, 255,1)"],
                    borderColor: 'rgba(127, 0, 255,0.9)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(127, 0, 255,1)',
                }, {
                    data: [241032, 329211.43, 178431, 205987, 153687, 178964],
                    backgroundColor: ["rgba(0, 209, 178,0.6)"],
                    borderColor: 'rgba(0, 209, 178,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(0, 209, 178,1)',
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        scaleLabel: {
                            display: false,
                        },
                    }],
                    yAxes: [{
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            fontSize: 9,
                            fontColor: '#999',
                            autoSkip: true,
                            maxTicksLimit: 6,
                            callback: function (value) {
                                var ranges = [
                                    { divider: 1e6, suffix: 'M' },
                                    { divider: 1e3, suffix: 'k' }
                                ];
                                function formatNumber(n) {
                                    for (var i = 0; i < ranges.length; i++) {
                                        if (n >= ranges[i].divider) {
                                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                        }
                                    }
                                    return n;
                                }
                                return '$' + formatNumber(value);
                            }
                        }
                    }],
                },
                tooltips: {
                    backgroundColor: "rgba(68, 79, 96,0.7)",
                    xPadding: 10,
                    yPadding: 15,
                    cornerRadius: 4,
                    borderColor: "rgba(68, 79, 96,0.7)",
                    caretSize: 4,
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: true,
                        fontSize: 11,
                        fontColor: '#A9ABAC',
                    }
                },
                title: {
                    display: false,
                    text: 'Main suppliers',
                    fontSize: 14,
                    fontColor: '#A9ABAC',
                    fontStyle: 'normal',
                },
            }

        });
    }

    if ($('#doughnutChart').length) {
        var doughnutDashChart = new Chart(ctx3, {
            type: 'doughnut',

            data: {
                datasets: [{
                    data: [57, 21, 22,],
                    backgroundColor: ["rgba(127, 0, 255,1)", "rgba(0, 209, 178,0.6)"],
                }],
                labels: [
                    " Completed",
                    " Approved",
                    " Pending",
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 60,
            }
        });
    }

    //Chart js page Bar chart
    if ($('#cjs-barChart').length) {
        new Chart(document.getElementById("cjs-barChart"), {
            type: 'bar',
            data: {
                labels: ["France", "Germany", "UK", "spain", "Belgium"],
                datasets: [
                    {
                        label: "Last month Sales ($)",
                        backgroundColor: ["#00D1B2", "#7F00FF", "#536dfe", "#039BE5", "#999"],
                        data: [12478, 15267, 11734, 19784, 12433]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: { display: false },
                title: {
                    display: false,
                    text: ''
                },
                scales: {
                    xAxes: [{
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        scaleLabel: {
                            display: false,
                        },
                    }],
                    yAxes: [{
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            fontSize: 9,
                            fontColor: '#999',
                            autoSkip: true,
                            maxTicksLimit: 6,
                            callback: function (value) {
                                var ranges = [
                                    { divider: 1e6, suffix: 'M' },
                                    { divider: 1e3, suffix: 'k' }
                                ];
                                function formatNumber(n) {
                                    for (var i = 0; i < ranges.length; i++) {
                                        if (n >= ranges[i].divider) {
                                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                        }
                                    }
                                    return n;
                                }
                                return '$' + formatNumber(value);
                            }
                        }
                    }],
                },
                tooltips: {
                    backgroundColor: "rgba(68, 79, 96,0.7)",
                    xPadding: 10,
                    yPadding: 15,
                    cornerRadius: 4,
                    borderColor: "rgba(68, 79, 96,0.7)",
                    caretSize: 4,
                },
            }
        });
    }
    //Chart js page line chart
    if ($('#cjs-lineChart').length) {
        new Chart(document.getElementById("cjs-lineChart"), {
            type: 'line',
            data: {
                labels: ['jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'],
                datasets: [{
                    data: [7, 6, 2, 3, 1, 3, 5, 9, 3, 6],
                    label: "Deals lost",
                    borderColor: "#rgba(127, 0, 255,1)",
                    fill: true,
                    backgroundColor: ["rgba(127, 0, 255,0.6)"],
                    borderColor: 'rgba(127, 0, 255,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(127, 0, 255,1)',
                }, {
                    data: [14, 12, 8, 9, 13, 12, 18, 16, 13, 7],
                    label: "Deals won",
                    borderColor: "#rgba(0, 209, 178,1)",
                    fill: true,
                    backgroundColor: ["rgba(0, 209, 178,0.6)"],
                    borderColor: 'rgba(0, 209, 178,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(0, 209, 178,1)',
                }, {
                    data: [1, 3, 0, 0, 0, 5, 1, 0, 0, 1],
                    label: "Deals canceled",
                    borderColor: "#rgba(153, 153, 153,1)",
                    fill: true,
                    backgroundColor: ["rgba(153, 153, 153,0.9)"],
                    borderColor: 'rgba(153, 153, 153,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(153, 153, 153,1)',
                },
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
                scales: {
                    xAxes: [{
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(153, 153, 153, 0.1)",
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
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            fontSize: 9,
                            fontColor: '#999',
                            autoSkip: true,
                            maxTicksLimit: 6,
                        }
                    }],
                },
                tooltips: {
                    backgroundColor: "rgba(68, 79, 96,0.7)",
                    xPadding: 10,
                    yPadding: 15,
                    cornerRadius: 4,
                    borderColor: "rgba(68, 79, 96,0.7)",
                    caretSize: 4,
                },
            }
        });
    }
    //Chart js page Pie chart
    if ($('#cjs-pieChart').length) {
        new Chart(document.getElementById("cjs-pieChart"), {
            type: 'pie',
            data: {
                labels: ["Paid invoices", "Rejected invoices", "Pending invoices", "Overdue invoices"],
                datasets: [{
                    label: "",
                    backgroundColor: ["#00D1B2", "#999", "#7F00FF", "#536dfe"],
                    data: [421, 49, 208, 39]
                }]
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
                layout: {
                    padding: {
                        top: 20,
                        left: 20,
                        right: 20,
                        bottom: 20,
                    }
                }
            }
        });
    }
    //Chart js page Radar Chart
    if ($('#cjs-radarChart').length) {
        new Chart(document.getElementById("cjs-radarChart"), {
            type: 'radar',
            data: {
                labels: ["Html", "CSS", "React js", "Angular", "Vue js"],
                datasets: [
                    {
                        label: "Marc Walters",
                        fill: true,
                        backgroundColor: "rgba(0, 209, 178,0.6)",
                        borderColor: "rgba(0, 209, 178,1)",
                        pointBorderColor: "rgba(0, 209, 178,1)",
                        pointBackgroundColor: "#fff",
                        data: [98, 100, 15, 0, 35]
                    }, {
                        label: "John Doe",
                        fill: true,
                        backgroundColor: "rgba(127, 0, 255,0.6)",
                        borderColor: "rgba(127, 0, 255,1)",
                        pointBorderColor: "rgba(127, 0, 255,1)",
                        pointBackgroundColor: "#fff",
                        data: [50, 45, 85, 63, 98]
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
                scale: {
                    ticks: {
                        fontSize: 9,
                        fontColor: '#999',
                        autoSkip: true,
                        maxTicksLimit: 4,
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
            }
        });
    }
    //Chart js page Polar Chart
    if ($('#cjs-polarChart').length) {
        new Chart(document.getElementById("cjs-polarChart"), {
            type: 'polarArea',
            data: {
                labels: ["Paid invoices", "Rejected invoices", "Pending invoices", "Overdue invoices"],
                datasets: [
                    {
                        label: "",
                        backgroundColor: ["#00D1B2", "#999", "#7F00FF", "#536dfe"],
                        data: [108, 49, 89, 39]
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
                scale: {
                    ticks: {
                        fontSize: 12,
                        fontColor: '#999',
                        autoSkip: false,
                        maxTicksLimit: 0,
                    }
                },
                layout: {
                    padding: {
                        top: 10
                    }
                }
            }
        });
    }
    //Chart js page doughnut chart
    if ($('#cjs-doughnutChart').length) {
        new Chart(document.getElementById("cjs-doughnutChart"), {
            type: 'doughnut',
            data: {
                labels: ["Paid invoices", "Rejected invoices", "Pending invoices", "Overdue invoices"],
                datasets: [{
                    label: "",
                    backgroundColor: ["#00D1B2", "#999", "#7F00FF", "#536dfe"],
                    data: [421, 49, 208, 39]
                }]
            },
            options: {
                cutoutPercentage: 65,
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
                layout: {
                    padding: {
                        top: 20,
                        left: 20,
                        right: 20,
                        bottom: 20,
                    }
                }
            }
        });
    }
    //Chart js page Horizontal bar chart
    if ($('#cjs-hbarChart').length) {
        new Chart(document.getElementById("cjs-hbarChart"), {
            type: 'horizontalBar',
            data: {
                labels: ["France", "Germany", "UK", "spain", "Belgium"],
                datasets: [
                    {
                        label: "Last month Sales ($)",
                        backgroundColor: ["#00D1B2", "#7F00FF", "#536dfe", "#039BE5", "#999"],
                        data: [12478, 15267, 11734, 19784, 12433]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: { display: false },
                title: {
                    display: false,
                    text: ''
                },
                scales: {
                    xAxes: [{
                        display: true,
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
                            callback: function (value) {
                                var ranges = [
                                    { divider: 1e6, suffix: 'M' },
                                    { divider: 1e3, suffix: 'k' }
                                ];
                                function formatNumber(n) {
                                    for (var i = 0; i < ranges.length; i++) {
                                        if (n >= ranges[i].divider) {
                                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                        }
                                    }
                                    return n;
                                }
                                return '$' + formatNumber(value);
                            }
                        }
                    }],
                    yAxes: [{
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                    }],
                },
                tooltips: {
                    backgroundColor: "rgba(68, 79, 96,0.7)",
                    xPadding: 10,
                    yPadding: 15,
                    cornerRadius: 4,
                    borderColor: "rgba(68, 79, 96,0.7)",
                    caretSize: 4,
                },
            }
        });
    }
    //Chart js page Grouped bar chart
    if ($('#cjs-gbarChart').length) {
        new Chart(document.getElementById("cjs-gbarChart"), {
            type: 'bar',
            data: {
                labels: ["jan", "feb", "mar", "apr"],
                datasets: [
                    {
                        label: "Paid",
                        backgroundColor: "#7F00FF",
                        data: [154, 134, 189, 161]
                    }, {
                        label: "Pending",
                        backgroundColor: "#00D1B2",
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
                        display: true,
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
    //Chart js page Mixed chart
    if ($('#cjs-mixedChart').length) {
        new Chart(document.getElementById("cjs-mixedChart"), {
            type: 'bar',
            data: {
                labels: ["jan", "feb", "mar", "apr"],
                datasets: [{
                    label: "Pending invoices",
                    type: "line",
                    borderColor: "#999",
                    data: [9, 5, 3, 8],
                    fill: false,
                    pointBorderColor: "#999",
                    pointBackgroundColor: "#fff",
                }, {
                    label: "Paid invoices",
                    type: "line",
                    borderColor: "#3e95cd",
                    data: [42, 49, 35, 85],
                    fill: false,
                    pointBorderColor: "#3e95cd",
                    pointBackgroundColor: "#fff",
                }, {
                    label: "Won deals",
                    type: "bar",
                    backgroundColor: "rgba(0, 209, 178,0.7)",
                    data: [51, 48, 32, 78],
                }, {
                    label: "Lost deals",
                    type: "bar",
                    backgroundColor: "rgba(127, 0, 255,0.7)",
                    backgroundColorHover: "#3e95cd",
                    data: [12, 9, 8, 14]
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
                        display: true,
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
    //Chart js page Bubble chart
    if ($('#cjs-bubbleChart').length) {
        new Chart(document.getElementById("cjs-bubbleChart"), {
            type: 'bubble',
            data: {
                labels: "Africa",
                datasets: [
                    {
                        label: ["Invoice.io"],
                        backgroundColor: "rgba(83, 109, 254,0.7)",
                        borderColor: "rgba(83, 109, 254,1)",
                        data: [{
                            x: 528,
                            y: 31,
                            r: 15
                        }]
                    }, {
                        label: ["Mortimer & Sons"],
                        backgroundColor: "rgba(0, 209, 178,0.7)",
                        borderColor: "rgba(0, 209, 178,1)",
                        data: [{
                            x: 978,
                            y: 22,
                            r: 10
                        }]
                    }, {
                        label: ["Techify Ltd."],
                        backgroundColor: "rgba(153,153,153,0.7)",
                        borderColor: "rgba(153,153,153,1)",
                        data: [{
                            x: 341,
                            y: 26,
                            r: 15
                        }]
                    }, {
                        label: ["Someco Inc."],
                        backgroundColor: "rgba(127, 0, 255,0.7)",
                        borderColor: "rgba(127, 0, 255,1)",
                        data: [{
                            x: 427,
                            y: 15,
                            r: 15
                        }]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: ''
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: false,
                            labelString: ""
                        },
                        gridLines: {
                            color: "rgba(153, 153, 153, 0.1)",
                        },
                        ticks: {
                            fontSize: 10,
                            fontColor: '#999',
                            autoSkip: true,
                            maxTicksLimit: 6,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: false,
                            labelString: ""
                        },
                        gridLines: {
                            color: "rgba(153, 153, 153, 0.1)",
                        },
                        ticks: {
                            fontSize: 10,
                            fontColor: '#999',
                            autoSkip: true,
                            maxTicksLimit: 6,
                        }
                    }]
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
            }
        });
    }

    /* ==========================================================================
    Billboard js charts
    ========================================================================== */

    //Billboard js page line chart
    if ($('#billboard-lineChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Paid", 120, 149, 98, 131, 152, 139],
                    ["Canceled", 50, 20, 10, 40, 15, 25],
                    ['Pending', 75, 87, 56, 68, 62, 41]
                ],
                "colors": {
                    "Paid": "#00D1B2",
                    "Canceled": "#7F00FF",
                    "Pending": "#536dfe"
                },
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-lineChart"
        });
    }

    //Billboard js page timeseries chart
    if ($('#billboard-timeseriesChart').length) {
        var chart = bb.generate({
            "data": {
                "x": "x",
                "columns": [
                    ["x", "2017-01-01", "2017-02-01", "2017-03-01", "2017-04-01", "2017-05-01", "2017-06-01"],
                    ["Paid", 30, 200, 100, 400, 150, 250],
                    ["Pending", 130, 340, 200, 500, 250, 350],
                    ['Canceled', 12, 17, 14, 21, 28, 19]
                ],
                "colors": {
                    "Paid": "#00D1B2",
                    "Canceled": "#7F00FF",
                    "Pending": "#536dfe"
                },
            },
            "axis": {
                "x": {
                    "type": "timeseries",
                    "tick": {
                        "format": "%Y-%m"
                        //"format": "%Y-%m-%d"
                    }
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-timeseriesChart"
        });
    }

    //Billboard js page spline chart
    if ($('#billboard-splineChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Paid", 30, 200, 100, 400, 150, 250],
                    ["Pending", 130, 100, 140, 200, 150, 50]
                ],
                "colors": {
                    "Paid": "#00D1B2",
                    "Pending": "#536dfe"
                },
                "type": "spline"
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-splineChart"
        });
    }

    //Billboard js page line chart with regions
    if ($('#billboard-lineRegionChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Paid", 30, 200, 100, 400, 150, 250],
                    ["Pending", 50, 20, 10, 40, 15, 25]
                ],
                "colors": {
                    "Paid": "#00D1B2",
                    "Pending": "#536dfe"
                },
                "regions": {
                    "Paid": [
                        {
                            "start": 1,
                            "end": 2,
                            "style": "dashed"
                        },
                        {
                            "start": 3
                        }
                    ],
                    "Pending": [
                        {
                            "end": 3
                        }
                    ]
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-lineRegionChart"
        })
    }

    //Billboard js page step chart
    if ($('#billboard-stepChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Paid", 300, 350, 300, 0, 0, 100],
                    ["pending", 130, 100, 140, 200, 150, 50]
                ],
                "colors": {
                    "Paid": "#00D1B2",
                    "Pending": "#536dfe"
                },
                "types": {
                    "Paid": "step",
                    "pending": "area-step"
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-stepChart"
        });
    }

    //Billboard js page area chart
    if ($('#billboard-areaChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Paid", 300, 350, 300, 0, 0, 0],
                    ["Pending", 130, 100, 140, 200, 150, 50]
                ],
                "colors": {
                    "Paid": "#00D1B2",
                    "Pending": "#536dfe"
                },
                "types": {
                    "Paid": "area",
                    "Pending": "area-spline"
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-areaChart"
        });
    }

    //Billboard js page bar chart
    if ($('#billboard-barChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Deals won", 34, 41, 45, 49, 27, 41],
                    ["Deals lost", 7, 4, 11, 8, 2, 8],
                    ['Deals canceled', 1, 0, 2, 5, 3, 2]
                ],
                "colors": {
                    "Deals won": "#00D1B2",
                    "Deals lost": "#7F00FF",
                    "Deals canceled": "#536dfe"
                },
                "type": "bar"
            },
            "bar": {
                "width": {
                    "ratio": 0.5
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-barChart"
        });
    }

    //Billboard js page stacked bar chart
    if ($('#billboard-stackedbarChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Deals won", 34, 41, 45, 49, 27, 41],
                    ["Deals lost", 7, 4, 11, 8, 2, 8],
                    ['Deals canceled', 1, 0, 2, 5, 3, 2]
                ],
                "colors": {
                    "Deals won": "#00D1B2",
                    "Deals lost": "#7F00FF",
                    "Deals canceled": "#536dfe"
                },
                "type": "bar",
                "groups": [
                    [
                        "Deals won",
                        "Deals lost",
                        "Deals canceled",
                    ]
                ]
            },
            "grid": {
                "y": {
                    "lines": [
                        {
                            "value": 0
                        }
                    ]
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-stackedbarChart"
        });
    }

    //Billboard js page scatter plot chart
    if ($('#billboard-scatterPlotChart').length) {
        var chart = bb.generate({
            "data": {
                "xs": {
                    "setosa": "setosa_x",
                    "versicolor": "versicolor_x",
                    "virginica": "virginica_x"
                },
                "columns": [
                    ["setosa_x", 3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3],
                    ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8],
                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
                ],
                "colors": {
                    "setosa": "#00D1B2",
                    "versicolor": "#7F00FF",
                },
                "type": "scatter"
            },
            "axis": {
                "x": {
                    "label": "x label",
                    "tick": {
                        "fit": false
                    }
                },
                "y": {
                    "label": "y label"
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-scatterPlotChart"
        });
    }

    //Billboard js page scatter Pie chart
    if ($('#billboard-pieChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Completed tasks", 83],
                    ["Pending tasks", 49]
                ],
                "colors": {
                    "Completed tasks": "#00D1B2",
                    "Pending tasks": "#7F00FF",
                },
                "type": "pie",
                "onclick": function (d, i) { console.log("onclick", d, i); },
                "onover": function (d, i) { console.log("onover", d, i); },
                "onout": function (d, i) { console.log("onout", d, i); }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-pieChart"
        });
    }

    //Billboard js page donut chart
    if ($('#billboard-donutChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Completed tasks", 83],
                    ["Pending tasks", 49]
                ],
                "colors": {
                    "Completed tasks": "#00D1B2",
                    "Pending tasks": "#7F00FF",
                },
                "type": "donut",
                "onclick": function (d, i) { console.log("onclick", d, i); },
                "onover": function (d, i) { console.log("onover", d, i); },
                "onout": function (d, i) { console.log("onout", d, i); }
            },
            "donut": {
                "title": ""
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-donutChart"
        });
    }

    //Billboard js page gauge chart
    if ($('#billboard-gaugeChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["Completed", 91.4]
                ],
                "type": "gauge",
                "onclick": function (d, i) { console.log("onclick", d, i); },
                "onover": function (d, i) { console.log("onover", d, i); },
                "onout": function (d, i) { console.log("onout", d, i); }
            },
            "gauge": {},
            "color": {
                "pattern": [
                    "#FF0000",
                    "#F97600",
                    "#F6C600",
                    "#7F00FF"
                ],
                "threshold": {
                    "values": [
                        30,
                        60,
                        90,
                        100
                    ]
                }
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-gaugeChart"
        });
    }

    //Billboard js page gauge chart
    if ($('#billboard-combinationChart').length) {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["data1", 30, 20, 50, 40, 60, 50],
                    ["data2", 200, 130, 90, 240, 130, 220],
                    ["data3", 300, 200, 160, 400, 250, 250],
                    ["data4", 200, 130, 90, 240, 130, 220],
                    ["data5", 130, 120, 150, 140, 160, 150],
                ],
                "colors": {
                    "data1": "#00D1B2",
                    "data2": "#7F00FF",
                    "data3": "#536dfe",
                    "data4": "#999",
                    "data5": "#536dfe",
                },
                "type": "bar",
                "types": {
                    "data3": "spline",
                    "data4": "line",
                    "data6": "area",
                    "data1": "bar",
                    "data2": "bar",
                    "data5": "bar"
                },
                "groups": [
                    [
                        "data1",
                        "data2"
                    ]
                ]
            },
            "size": {
                "height": 260,
            },
            "bindto": "#billboard-combinationChart"
        });
    }

})