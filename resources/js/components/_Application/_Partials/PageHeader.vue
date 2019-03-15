<template>

    <section>

        <nav class="navbar dashboard-nav has-shadow" :class="{ 'is-pushed' : pushHeader }">

            <div class="container is-fluid">

                <div class="navbar-brand">

                    <div class="navbar-item reader-switch is-hidden-desktop is-hidden-tablet">
                        <div class="field">
                            <input id="reader-mode-switch" type="checkbox" name="reader-mode-switch" class="switch is-outlined is-primary is-small styled-checkbox" v-model="changeWidth" checked>
                            <label id="reader-mode-toggle" for="reader-mode-switch"></label>
                        </div>
                    </div>

                    <a id="mobile-dashboard-trigger" class="navbar-item hamburger-btn is-hidden-desktop" href="javascript:void(0);" @click="closeSecondaryMenu">
                        <span class="menu-toggle">
                            <span class="icon-box-toggle" :class="{ 'active' : !initialHide }">
                                <span class="rotate">
                                    <i class="icon-line-top"></i>
                                    <i class="icon-line-center"></i>
                                    <i class="icon-line-bottom"></i>
                                </span>
                            </span>
                        </span>
                    </a>

                </div>

                <div class="navbar-menu">

                    <div class="navbar-end">

                        <user-notification></user-notification>

                        <user-message></user-message>

                        <user-profile></user-profile>

                    </div>

                </div>

            </div>
        </nav>

        <div class="mobile-nav is-hidden-desktop is-active" :class="[{ 'is-hidden' : initialHide }, {'is-fullwidth': fullWidth}]">

            <div class="container is-fluid">

                <div class="mobile-nav-inner">

                    <a class="mobile-item">
                        <i class="sl sl-icon-bell" @click="openSecondaryMenu('alerts')"></i>
                        <span class="new-circle gelatine"></span>
                    </a>

                    <a class="mobile-item">
                        <i class="sl sl-icon-envelope-open" @click="openSecondaryMenu('messages')"></i>
                        <span class="new-circle gelatine"></span>
                    </a>

                    <a class="mobile-item">

                        <user-photo></user-photo>

                    </a>

                </div>

            </div>

        </div>

        <div class="mobile-nav is-hidden-desktop secondary-menu" v-show="showAlerts || showMessages || showProfile"  :class="{'is-fullwidth': fullWidth}">

            <div class="container is-fluid">

                <div class="mobile-nav-inner">

                    <usernotifications-dropdown v-show="showAlerts" ></usernotifications-dropdown>

                    <usermessages-dropdown v-show="showMessages"></usermessages-dropdown>

                    <userprofile-dropdown v-show="showProfile" ></userprofile-dropdown>

                </div>

            </div>

        </div>

    </section>

</template>

<script>

    import UserNotification from '@templates/User/Notification';
    import UserMessage from '@templates/User/Message';
    import UserPhoto from '@templates/User/Photo';
    import UserProfile from '@templates/User/Profile';
    import UsernotificationsDropdown from '@templates/User/Dropdown/Notifications';
    import UsermessagesDropdown from '@templates/User/Dropdown/Messages';
    import UserprofileDropdown from '@templates/User/Dropdown/Profile';

    export default {

        name: "PageHeader",

        components: { UserNotification, UserMessage, UserPhoto, UserProfile, UsernotificationsDropdown, UsermessagesDropdown, UserprofileDropdown },

        data() {
            return {
                pushHeader: false,
                initialHide: true,
                showAlerts: false,
                showMessages: false,
                showProfile: false,
                changeWidth: 'checked',
                fullWidth: false
            }
        },
        methods: {

            openSecondaryMenu ( str ) {

                this.initialHide = false;

                if (str === 'alerts') {

                    this.showAlerts = true;
                    this.showMessages = false;
                    this.showProfile = false;

                }
                else if (str === 'messages') {

                    this.showAlerts = false;
                    this.showMessages = true;
                    this.showProfile = false;

                }
                else {

                    this.showAlerts = false;
                    this.showMessages = false;
                    this.showProfile = true;
                }
            },

            closeSecondaryMenu() {

                this.initialHide = !this.initialHide;
                this.showAlerts = false;
                this.showMessages = false;
                this.showProfile = false;
            }
        },

        watch: {

            changeWidth ( ) {

                if(this.fullWidth === false) {
                    $('body').addClass('reader-mode');
                    this.fullWidth = true;
                    this.findElByName("Information").innerClose = true;
                }
                else {
                    $('body').removeClass('reader-mode');
                    this.fullWidth = false;
                    this.findElByName("Information").innerClose = false;
                }

            }
        }
    }
</script>
