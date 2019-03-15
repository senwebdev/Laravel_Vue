<template>

    <section class="hero is-fullheight is-light-grey is-bold">

        <div class="hero-body">

            <div class="container">

                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <div v-if="alert.message" class="notification notification-margin" :class="alert.css" v-text="alert.message"></div>

                            <p class="has-text-centered">
                                <router-link v-if="link === 'confirmed'" to="/auth/login" class="forgot">Go to login page</router-link>
                            </p>
                            <p class="has-text-centered">
                                <router-link v-if="link === 'invalid'" to="/auth/resend-confirm" class="forgot">Resend Confirmation code</router-link>
                            </p>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>

<script>

    import USER_CONFIRM_EMAIL from '@queries/confirmEmail.gql';

    export default {

        name: "ConfirmEmailPage",

        data() {
            return {
                link: '',
                alert: {
                    message: '',
                    css: ''
                }
            }
        },

        apollo: {
            confirmUserEmail: {
                query: USER_CONFIRM_EMAIL,
                variables() {
                    return { token: this.$route.params.token}
                },
                result( data ) {

                    // Set the link to determine user action.
                    this.link = this.serverError(data.error.message);

                    // If there is an error.
                    if (this.serverError(data.error.message) === 'confirmed') {

                        // User has already confirmed email.
                        this.alert.message = 'You have already confirmed your email. Please log into the site.';
                        this.alert.css = 'is-warning';
                        return
                    }

                    // If there is an error.
                    if (this.serverError(data.error.message) === 'invalid') {

                        // The token is invalid.
                        this.alert.message = 'There seems to be an issue with your token. Please request a new code.';
                        this.alert.css = 'is-danger';
                        return
                    }

                    // Send user to login page to sign in.
                    this.$router.push({ name: 'Login',
                        params: {
                            message: {
                                css: 'is-success',
                                message: 'Email confirmed. You can now log in.'
                            }
                        }
                    });
                },
                error(error) {
                    console.log(error)
                }
            }
        }
    }
</script>
