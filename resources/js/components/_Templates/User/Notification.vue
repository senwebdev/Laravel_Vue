<template>

    <div class="navbar-item drop-pop is-centered nav-icon">

        <a href="#" class="nav-inner" @click="dropdown">
            <i class="sl sl-icon-bell">
                <notification-circle v-if="notificationCircle"></notification-circle>
            </i>
        </a>

        <div class="drop-wrapper notifications-drop" v-show="showDropdown" v-if="notificationCircle">
            <div class="drop-inner has-arrow">
                <div class="notifications-header has-text-centered">
                    <h3>Alerts</h3>
                </div>
                <div class="notifications-body">

                    <usernotifications-dropdown></usernotifications-dropdown>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import NotificationCircle from '@templates/NotificationCircle';
    import UsernotificationsDropdown from '@templates/User/Dropdown/Notifications';

    export default {

        name: "Notification",

        components: { UsernotificationsDropdown, NotificationCircle },

        data() {
            return {
                showDropdown: false,
                notificationCircle: false
            }
        },

        methods: {

            // Activate the dropdown
            dropdown () {

                this.showDropdown = !this.showDropdown;
                this.findElByName("Application").notificationDropdown = true;
                this.findElByName("Message").showDropdown = false;
                this.findElByName("Profile").showDropdown = false;

                setTimeout(() => {
                    this.findElByName("Application").notificationDropdownIsOpen = true
                }, 500);
            }

        },

    }
</script>
