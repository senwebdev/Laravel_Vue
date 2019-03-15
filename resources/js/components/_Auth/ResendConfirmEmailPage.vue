<template>

    <section class="hero is-fullheight is-light-grey is-bold">

        <div class="hero-body">

            <div class="container">

                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <div v-if="error.message" class="notification notification-margin" :class="error.css" v-text="error.message"></div>
                        <div v-if="alert.message" class="notification notification-margin" :class="alert.css" v-text="alert.message"></div>

                        <form id="classic" class="login-form-wrapper" @submit.prevent="resendConfirmationCode">

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

                                    <div class="pt-10 pb-10">
                                        <button class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh">
                                            Resend Comfirmation Code
                                            <div v-if="processing" class="btnProcessing"></div>
                                        </button>
                                    </div>

                                </div>

                                <p class="has-text-centered">
                                    <router-link to="/auth/login" class="forgot">Go to login page</router-link>
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

        name: "ResendConfirmEmailPage",

        components: { InputText },

        data () {
            return {
                form: {
                    email: ''
                },
                alert: {
                    message: '',
                    css: ''
                },
                error: {
                    message: '',
                    css: ''
                },
                processing: false
            }
        },

        methods: {

            resendConfirmationCode() {

                // Show the processing.
                this.processing = true;

                // Set the error message to null.
                this.error.message = '';
                this.alert.message = '';

                // Run the validator.
                this.$validator.validateAll()

                    .then(result => {

                        if(result) {
                            // Successfull validator.
                            this.processResendConfirmationCode()
                        }
                        else {

                            // Stop the processing animation.
                            this.processing = false;

                            // Error with the validator. Advise the user.
                            this.error.message = "There are some issues with the information provided.";
                            this.error.css = "is-danger";
                        }

                    });
            },

            processResendConfirmationCode() {

                // Set error and message to null.
                this.error.message = '';
                this.alert.message = '';

                // Fire a dispatch to the store regarding the forgotten password.
                this.$store.dispatch('resendConfirmationEmail', { form: this.form, vm: this} )
                    .then(response => {

                        // Stop the processing animation.
                        this.processing = false;

                        this.alert.message = 'That has been processed. Please check your email.';
                        this.alert.css = 'is-success';
                    })
                    .catch(err => {

                        // Stop the processing animation.
                        this.processing = false;

                        if (this.serverError(err.message) === 'confirmed' ) {
                            this.error.message = 'That email has already been confirmed. You can log into the system.';
                            this.error.css = 'is-warning';
                        }

                        if (this.serverError(err.message) === 'invalid' ) {
                            this.error.message = 'That email has not been recognised. Please check and try again.';
                            this.error.css = 'is-danger';
                        }
                    });


            }
        }
    }
</script>
