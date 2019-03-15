<template>

        <div class="content column is-11">

        <Breadcrumbs :breadcrumbs="breadcrumbs"></Breadcrumbs>

            <!-- Dashboard Wrapper -->
            <div id="support-dashboard" class="dashboard-wrapper">

                <div class="columns">
                    <div class="column">

                        <!-- Dashboard content -->
                        <div id="support-layout" class="columns dashboard-columns">

                            <div class="column is-12">
                                <!-- Page title -->
                                <div class="support-title-wrapper is-mobile">
                                    <img class="support-image" src="https://via.placeholder.com/150x150" alt="" data-demo-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJbbHqPh6pUzla6bf2punOireIBvRAFRuGdJSj0523UFr38TjZw">
                                    <div class="inner-wrap">
                                        <h3 class="support-title">Support Desk</h3>
                                        <div class="title-meta">
                                            <div class="meta">
                                                <i class="sl sl-icon-tag"></i>
                                                <span>45 open</span>
                                            </div>
                                            <div class="meta">
                                                <i class="sl sl-icon-shield"></i>
                                                <span>3 escalated</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Actions -->
                                    <div class="actions">
                                        <div class="activity-button quickview-trigger" data-quickview="support-activity-quickview">
                                            <i class="sl sl-icon-energy"></i>
                                        </div>
                                        <div class="dropdown button-dropdown dropdown-trigger is-right">
                                            <div class="button btn-dash secondary-btn btn-dash raised ripple has-icon" data-ripple-color="">
                                                <i class="material-icons">more_vert</i>
                                                Actions Speak louder
                                            </div>
                                            <!-- Dropdown menu -->
                                            <div class="dropdown-menu is-text-bigger" role="menu">
                                                <div class="dropdown-content">
                                                    <a href="#" class="dropdown-item">
                                                        <i class="sl sl-icon-tag"></i>
                                                        <span>
                                                                <span>New Ticket</span>
                                                                <span>Create a new ticket</span>
                                                            </span>
                                                    </a>
                                                    <a href="#" class="dropdown-item">
                                                        <i class="sl sl-icon-support"></i>
                                                        <span>
                                                                <span>Tickets</span>
                                                                <span>Open ticket list</span>
                                                            </span>
                                                    </a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item">
                                                        <i class="sl sl-icon-bell"></i>
                                                        <span>
                                                                <span>Notifications</span>
                                                                <span>Manage desk notifications</span>
                                                            </span>
                                                    </a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item">
                                                        <i class="sl sl-icon-equalizer"></i>
                                                        <span>
                                                                <span>Settings</span>
                                                                <span>Open global settings</span>
                                                            </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <!-- Support dashboard -->
                                <div class="support-dashboard">

                                    <div class="columns is-multiline">

                                        <div class="column is-4">
                                            <div class="flex-card support-box light-bordered">
                                                <h3 class="box-title has-text-centered">Waiting Time</h3>
                                                <div class="chrono">
                                                    <div class="count">
                                                        <span>12</span>
                                                    </div>
                                                    <span class="support-pie">4/5</span>
                                                    <div id="mainCircle">
                                                        <div id="buttonOneBasis">
                                                            <div id="buttonOne">
                                                            </div>
                                                        </div>
                                                        <div id="buttonTwoBasis">
                                                            <div id="buttonTwo">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-meta">
                                                    <p>My waiting time: 12 minutes</p>
                                                    <p>Average: 19 minutes</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-4">
                                            <div class="flex-card support-box light-bordered">
                                                <h3 class="box-title has-text-centered">Escalation</h3>
                                                <img class="box-image" src="./../../../sass/images/icons/support/chat-happy.svg" alt="">
                                                <div class="box-meta">
                                                    <p>0 of my tickets are escalated</p>
                                                    <p>Total: 0</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="column is-4">
                                            <div class="flex-card support-box light-bordered">
                                                <h3 class="box-title has-text-centered">Channels</h3>
                                                <div class="channels">
                                                    <div class="channel-icon">
                                                        <i class="fa fa-envelope"></i>
                                                    </div>
                                                    <div class="channel-icon">
                                                        <i class="fa fa-phone"></i>
                                                    </div>
                                                    <div class="channel-icon">
                                                        <i class="fa fa-twitter"></i>
                                                    </div>
                                                    <div class="channel-icon">
                                                        <i class="fa fa-facebook"></i>
                                                    </div>
                                                </div>
                                                <canvas id="support-chart"></canvas>
                                            </div>
                                        </div>

                                        <div class="column is-4">
                                            <div class="flex-card support-box light-bordered">
                                                <h3 class="box-title has-text-centered">Assigned</h3>
                                                <div class="stacks">
                                                    <div class="left">
                                                        <div class="shape-left" data-step="0"></div>
                                                        <div class="shape-left" data-step="1"></div>
                                                        <div class="shape-left" data-step="2"></div>
                                                        <div class="shape-left" data-step="3"></div>
                                                        <div class="shape-left" data-step="4"></div>
                                                    </div>
                                                    <div class="right">
                                                        <div class="shape-right" data-step="0"></div>
                                                        <div class="shape-right" data-step="1"></div>
                                                        <div class="shape-right" data-step="2"></div>
                                                        <div class="shape-right" data-step="3"></div>
                                                        <div class="shape-right" data-step="4"></div>
                                                        <div class="shape-right" data-step="5"></div>
                                                        <div class="shape-right" data-step="6"></div>
                                                        <div class="shape-right" data-step="7"></div>
                                                        <div class="shape-right" data-step="8"></div>
                                                        <div class="shape-right" data-step="9"></div>
                                                        <div class="shape-right" data-step="10"></div>
                                                        <div class="shape-right" data-step="11"></div>
                                                        <div class="shape-right" data-step="12"></div>
                                                        <div class="shape-right" data-step="13"></div>
                                                        <div class="shape-right" data-step="14"></div>
                                                        <div class="shape-right" data-step="15"></div>
                                                        <div class="shape-right" data-step="16"></div>
                                                        <div class="shape-right" data-step="17"></div>
                                                        <div class="shape-right" data-step="18"></div>
                                                        <div class="shape-right" data-step="19"></div>
                                                        <div class="shape-right" data-step="20"></div>
                                                        <div class="shape-right" data-step="21"></div>
                                                        <div class="shape-right" data-step="22"></div>
                                                        <div class="shape-right" data-step="23"></div>
                                                        <div class="shape-right" data-step="24"></div>
                                                        <div class="shape-right" data-step="25"></div>
                                                        <div class="shape-right" data-step="26"></div>
                                                        <div class="shape-right" data-step="27"></div>
                                                        <div class="shape-right" data-step="28"></div>
                                                        <div class="shape-right" data-step="29"></div>
                                                        <div class="shape-right" data-step="30"></div>
                                                        <div class="shape-right" data-step="31"></div>
                                                        <div class="shape-right" data-step="32"></div>
                                                        <div class="shape-right" data-step="33"></div>
                                                        <div class="shape-right" data-step="34"></div>
                                                        <div class="shape-right" data-step="35"></div>
                                                        <div class="shape-right" data-step="36"></div>
                                                        <div class="shape-right" data-step="37"></div>
                                                        <div class="shape-right" data-step="38"></div>
                                                        <div class="shape-right" data-step="39"></div>
                                                        <div class="shape-right" data-step="40"></div>
                                                    </div>
                                                </div>
                                                <div class="box-meta">
                                                    <p>32 of 254 tickets assigned to me</p>
                                                    <p>Average: 12 of 118</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-4">
                                            <div class="flex-card support-box light-bordered">
                                                <h3 class="box-title has-text-centered">Ticket Progress</h3>
                                                <img class="box-image" src="./../../../sass/images/icons/support/chat-alt.svg" alt="">
                                                <div class="box-meta">
                                                    <p>82% are currently in progress</p>
                                                    <p>Average: 74%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-4">
                                            <div class="flex-card support-box light-bordered">
                                                <h3 class="box-title has-text-centered">Reopening Rate</h3>
                                                <img class="box-image" src="./../../../sass/images/icons/support/reopen.svg" alt="">
                                                <div class="box-meta">
                                                    <p>0% tickets have been reopened</p>
                                                    <p>Average: 0%</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- /Dashboard content -->



                    </div>
                    <!-- /Main view -->
                </div>
            </div>
            <!-- /Dashboard Wrapper -->

        </div>

</template>

<script>

    import Breadcrumbs from '@partials/Breadcrumbs';

    export default {
        name: "Support",
        components: { Breadcrumbs },
        props: ["breadcrumbs"],
        mounted(){
            $(".support-pie").peity("pie", {
                fill: ["#00D1B2", "#c6fff6"],
                innerRadius: null,
                radius: 8,
                height: 90,
                width: 90
            });

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
        }


    }
</script>
