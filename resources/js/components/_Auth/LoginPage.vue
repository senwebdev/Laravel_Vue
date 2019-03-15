<template>

    <section class="hero is-fullheight is-light-grey is-bold">

        <div class="hero-body">

            <div class="container">

                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <div v-if="alert.message" class="notification notification-margin" :class="alert.css" v-text="alert.message"></div>
                        <div v-if="message.message" class="notification notification-margin" :class="message.css" v-text="message.message"></div>

                        <form id="classic" class="login-form-wrapper" @submit.prevent="authenticate">

                            <div id="login-form" class="animated preFadeInLeft fadeInLeft">

                                <div class="flex-card auth-card is-light-raised light-bordered card-overflow">

                                    <div class="auth-card-header header-primary">
                                        <a href="index.html">
                                            <!--<img src="assets/images/logos/bulkit-w.png" alt="">-->
                                        </a>
                                    </div>

                                    <div class="field pb-10">

                                        <input-text :type="'email'"
                                                    :cssClass="'form-control'"
                                                    :placeHolder="'Email Address'"
                                                    :name="'email'"
                                                    :icon="{ size: 'is-medium', align: 'is-right', slIcon: 'sl-icon-envolope'}"
                                                    :inputClass="'is-large'"
                                                    v-validate="'required|email'"
                                                    :label="'inputEmail'"
                                                    :error="errors.has('email') ? errors.first('email') : ''"
                                                    v-model="form.email"/>

                                    </div>

                                    <div class="field">

                                        <input-text :type="'password'"
                                                    :cssClass="'form-control'"
                                                    :placeHolder="'Password'"
                                                    :name="'password'"
                                                    :icon="{ size: 'is-medium', align: 'is-right', slIcon: 'sl-icon-lock'}"
                                                    :inputClass="'is-large'"
                                                    v-validate="'required'"
                                                    :label="'inputPassword'"
                                                    :error="errors.has('password') ? errors.first('password') : ''"
                                                    v-model="form.password"/>

                                    </div>

                                    <p class="has-text-left pt-10 pb-10">
                                        <router-link to="/auth/register" class="no-account" href="#">Dont have an account?</router-link>
                                    </p>

                                    <div class="pt-10 pb-10">
                                        <button class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh">
                                            Login
                                            <div v-if="processing" class="btnProcessing"></div>
                                        </button>
                                    </div>

                                </div>

                                <p class="has-text-centered">
                                    <router-link to="/auth/forgotten" class="forgot">Forgot password?</router-link>
                                </p>

                                <p v-if="link" class="has-text-centered">
                                    <router-link to="/auth/resend-confirm" class="forgot">Resend Confirmation Code</router-link>
                                </p>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>

<script>

    import InputText from '@templates/Input/Text';

    export default {

        name: "LoginPage",

        props: {
            message: {
                type: Object,
                required: false,
                default: function () { return {} }
            },
            link: {
                type: String,
                required: false,
                default: ''
            },
        },

        components: { InputText },

        data () {

            return {
                form: {
                    email: '',
                    password: ''
                },
                alert: {
                    css: '',
                    message: ''
                },
                processing: false
            }
        },

        methods: {

            authenticate () {

                // Start the processing image.
                this.processing = true;

                // Clear any error messages that might be showing.
                this.alert.message = "";
                this.message.message = "";

                // Validate the input fields.
                this.$validator.validateAll()
                .then(result => {

                    // On successful results.
                    if(result) {

                        // Process the login form.
                        this.processAuthentication()
                    }
                    else {

                        // Stop the processing image.
                        this.processing = false;

                        // Show user the error message.
                        this.alert.css = 'is-warning';
                        this.alert.message = "There are some issues with the information provided.";
                    }

                });

            },

            processAuthentication () {

                // Clear any error messages that might be showing.
                this.alert.message = "";
                this.message.message = "";

                this.$store.dispatch('loginUser', { form: this.form, vm: this} )
                .then(res => {

                    // On success, send the user to the dashboard.
                    this.$router.push({ name: 'Dashboard'});
                })
                .catch(err => {

                    // Advise of the error message.
                    this.alert.css = 'is-warning';
                    this.alert.message = err.message;

                    // Stop the processing image.
                    this.processing = false;

                });
            }
        }
    }
</script>
