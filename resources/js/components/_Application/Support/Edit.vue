<template>

        <div class="content column is-11">

            <Breadcrumbs :breadcrumbs="breadcrumbs"></Breadcrumbs>

            <!-- Dashboard Wrapper -->
            <div class="dashboard-wrapper">

                <div class="columns">
                    <div class="column">
                        <!-- Main content -->
                        <div id="main-dashboard" class="section-wrapper">
                            <!-- Dashboard content -->
                            <div class="columns dashboard-columns">

                                <!-- YOUR CONTENT COLUMNS GO HERE -->

                            </div>
                            <!-- /Dashboard content -->
                        </div>
                        <!-- /Main content -->
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

        name: "EditSupport",

        components: { Breadcrumbs },

        props: [ "breadcrumbs" ]

    }

</script>

