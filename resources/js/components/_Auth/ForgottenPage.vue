<template>

    <section class="hero is-fullheight is-light-grey is-bold">

        <div class="hero-body">

            <div class="container">

                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <div v-if="error" class="notification is-danger notification-margin" v-text="error"></div>
                        <div v-if="message" class="notification is-primary notification-margin" v-text="message"></div>

                        <form id="classic" class="login-form-wrapper" @submit.prevent="forgottenPassword">

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
                                            Reset password
                                            <div v-if="processing" class="btnProcessing"></div>
                                        </button>
                                    </div>

                                </div>

                                <p class="has-text-centered">
                                    <router-link to="/auth/login" class="return">Back to login</router-link>
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

        name: "ForgottenPage",

        components: { InputText },

        data () {
            return {
                form: {
                    email: ''
                },
                message: '',
                error: '',
                processing: false
            }
        },

        methods: {

            forgottenPassword () {

                // Show the processing.
                this.processing = true;

                // Set the error message to null.
                this.error = '';

                // Run the validator.
                this.$validator.validateAll()

                    .then(result => {

                        if(result) {
                            // Successfull validator.
                            this.processforgottenPassword()
                        }
                        else {

                            // Stop the processing animation.
                            this.processing = false;

                            // Error with the validator. Advise the user.
                            this.error = "There are some issues with the information provided.";
                        }

                    });
            },

            processforgottenPassword () {

                // Set error and message to null.
                this.error = '';
                this.message = '';

                // Fire a dispatch to the store regarding the forgotten password.
                this.$store.dispatch('forgottenPassword', { form: this.form, vm: this} )
                .then(response => {

                    // Return successfull message.
                    if (response.data.forgotPassword.status === 'EMAIL_SENT') {
                        this.message = response.data.forgotPassword.message;
                    }

                    // Return error message.
                    if (response.data.forgotPassword.status === 'EMAIL_NOT_SENT') {
                        this.error = response.data.forgotPassword.message;
                    }

                })
                .catch(err => {
                    // Return any other message.
                    this.error = err.data.forgotPassword.message;
                });
            }
        }
    }
</script>
