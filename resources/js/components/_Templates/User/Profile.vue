<template>

    <div class="navbar-item drop-pop is-centered nav-icon">

        <a href="#" class="nav-inner" @click="dropdown">
            <user-photo></user-photo>
        </a>

        <div class="drop-wrapper emails-drop" v-show="showDropdown">
            <div class="drop-inner has-arrow">
                <div class="emails-header has-text-centered">
                    <h3>Profile</h3>
                </div>
                <div class="emails-body fullwidth">
                    <userprofile-dropdown></userprofile-dropdown>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    import UserPhoto from '@templates/User/Photo';
    import UserprofileDropdown from '@templates/User/Dropdown/Profile';

    export default {
        name: "Profile",

        components: { UserPhoto, UserprofileDropdown },

        data() {
            return {
                showDropdown: false
            }
        },

        methods: {
            // Activate the dropdown
            dropdown () {
                this.showDropdown = !this.showDropdown;
                this.findElByName("Application").profileDropdown = true;
                this.findElByName("Message").showDropdown = false;
                this.findElByName("Notification").showDropdown = false;

                setTimeout(() => {
                    this.findElByName("Application").profileDropdownIsOpen = true
                }, 500);
            }

        }
    }
</script>
