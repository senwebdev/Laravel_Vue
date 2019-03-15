<template>

    <div class="navbar-item drop-pop is-centered nav-icon">

        <a href="#" class="nav-inner" @click="dropdown">
            <i class="sl sl-icon-envelope-open">
                <notification-circle v-if="notificationCircle"></notification-circle>
            </i>
        </a>

        <div class="drop-wrapper emails-drop" v-show="showDropdown" v-if="notificationCircle">
            <div class="drop-inner has-arrow">
                <div class="emails-header has-text-centered">
                    <h3>Messages</h3>
                </div>
                <div class="emails-body">

                    <usermessages-dropdown></usermessages-dropdown>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import NotificationCircle from '@templates/NotificationCircle';
    import UsermessagesDropdown from '@templates/User/Dropdown/Messages';

    export default {

        name: "Message",

        components: { UsermessagesDropdown, NotificationCircle },

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
                this.findElByName("Application").messageDropdown = true;
                this.findElByName("Notification").showDropdown = false;
                this.findElByName("Profile").showDropdown = false;

                setTimeout(() => {
                    this.findElByName("Application").messageDropdownIsOpen = true
                }, 500);
            }

        }
    }
</script>
