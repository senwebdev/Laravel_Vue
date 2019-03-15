<template>

        <page-loader v-if="initLoading"></page-loader>

        <section v-else @click="siteWideClick">

            <user-information :class="{'is-active': showProfile}"></user-information>

            <page-loader v-if="pageLoading"></page-loader>
            <page-sidebar></page-sidebar>
            <page-header></page-header>

            <div class=”content”>

                <div id="dashboard-wrapper" class="columns">

                    <div class="column"></div>

                    <router-view></router-view>

                    <div class="column"></div>

                </div>

            </div>

            <page-footer></page-footer>

        </section>

</template>

<script>

    import UserInformation from '@templates/User/Information';
    import PageLoader from "@application/_Partials/PageLoader";
    import PageSidebar from "@application/_Partials/PageSidebar";
    import PageHeader from "@application/_Partials/PageHeader";
    import PageFooter from "@application/_Partials/PageFooter";
    import User_Query from "@queries/users.gql";

    export default {

        name: "Application",

        components: { UserInformation, PageLoader, PageSidebar, PageHeader, PageFooter },

        data() {
            return {
                initLoading: true,
                pageLoading: false,
                showProfile: false,
                notificationDropdown: false,
                messageDropdown: false,
                profileDropdown: false,
                notificationDropdownIsOpen: false,
                messageDropdownIsOpen: false,
                profileDropdownIsOpen: false,
                user: []
            }
        },

        methods: {

            // Site wide click event.
            siteWideClick () {

                //
                if (this.notificationDropdown && this.notificationDropdownIsOpen) {
                    this.findElByName("Notification").showDropdown = false;
                    this.notificationDropdownIsOpen = false;
                    this.notificationDropdown = false;
                }
                if (this.messageDropdown && this.messageDropdownIsOpen) {
                    this.findElByName("Message").showDropdown = false;
                    this.messageDropdownIsOpen = false;
                    this.messageDropdown = false;
                }
                if (this.profileDropdown && this.profileDropdownIsOpen) {
                    this.findElByName("Profile").showDropdown = false;
                    this.profileDropdownIsOpen = false;
                    this.profileDropdown = false;
                }


            }

        },

        created () {

            this.$store.dispatch('checkUser', {vm: this})
            .then(resp => {

                // Check the user has confirmed email.
                if(resp.data.me.email_verified_at === null ) {
                    this.$store.commit('logout');
                    this.$router.push({ name: 'Login', params: { message: { css: 'is-warning', message: 'Please could you confirm your email.'}, link: 'resend-confirm'} } )
                }

                // Stope the loading process.
                this.initLoading = false;
            })
            .catch(err => {
                this.$router.push({ name: 'Login', params: { message: { css: 'is-warning', message: 'Please could you log into the system.'}} } )
            });

        }

    }
</script>
