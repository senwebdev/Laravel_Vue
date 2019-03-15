<template>
    <ul class=" jq-dropdown-menu">
        <li>
            <a href="#" @click="showUserProfile">
                <i class="sl sl-icon-user mr-10"></i>
                Account
            </a>
        </li>

        <li>
            <a href="#">
                <i class="sl sl-icon-settings mr-10"></i>
                Settings
            </a>
        </li>
        <li class="jq-dropdown-divider"></li>
        <li>
            <a href="#" @click="logUserOut">
                Log out
            </a>
        </li>
    </ul>
</template>

<script>

    export default {

        name: "Profile",

        methods: {

            showUserProfile () {

                // Show user profile popup.
                this.findElByName("Application").showProfile = !this.findElByName("Application").showProfile;
            },

            logUserOut () {

                // Log the user out from the application.
                this.$store.dispatch('logoutUser', { vm: this} )
                .then(res => {
                    // On success, send the user to the login page.
                    this.$router.push({ name: 'Login',
                        params: {
                            message: {
                                css: 'is-success',
                                message: 'You have been logged out sucessfull.'
                            }
                        }
                    });
                })
                .catch(err => console.log(err));
            }

        }
    }
</script>
