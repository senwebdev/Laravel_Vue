<template>

    <section class="hero is-fullheight is-light-grey is-bold">

        <div class="hero-body">

            <div class="container">

                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <div v-if="alert.message" class="notification notification-margin" :class="alert.css" v-text="alert.message"></div>

                        <form id="classic" class="login-form-wrapper" @submit.prevent="register">

                            <div id="login-form" class="animated preFadeInLeft fadeInLeft">

                                <div class="flex-card auth-card is-light-raised light-bordered card-overflow">

                                    <div class="auth-card-header header-primary">
                                        <a href="index.html">
                                            <!--<img src="assets/images/logos/bulkit-w.png" alt="">-->
                                        </a>
                                    </div>

                                    <div class="field pb-10">

                                        <input-text :type="'name'"
                                                    :cssClass="'form-control'"
                                                    :placeHolder="'Name'"
                                                    :name="'name'"
                                                    :icon="{ size: 'is-medium', align: 'is-right', slIcon: 'sl-icon-user'}"
                                                    :inputClass="'is-large'"
                                                    v-validate="'required'"
                                                    :label="'inputName'"
                                                    :error="errors.has('name') ? errors.first('name') : ''"
                                                    v-model="form.name"/>

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

                                        <input-text ref="password"
                                                    :type="'password'"
                                                    :cssClass="'form-control'"
                                                    :placeHolder="'Password'"
                                                    :name="'password'"
                                                    :icon="{ size: 'is-medium', align: 'is-right', slIcon: 'sl-icon-lock'}"
                                                    :inputClass="'is-large'"
                                                    v-validate="'required|min:6'"
                                                    :label="'inputPassword'"
                                                    :error="errors.has('password') ? errors.first('password') : ''"
                                                    v-model="form.password"/>

                                    </div>

                                    <div class="field">

                                        <input-text :type="'password'"
                                                    :cssClass="'form-control'"
                                                    :placeHolder="'Confirm Password'"
                                                    :name="'confirm password'"
                                                    :icon="{ size: 'is-medium', align: 'is-right', slIcon: 'sl-icon-lock'}"
                                                    :inputClass="'is-large'"
                                                    v-validate="'required|confirmed:password'"
                                                    :label="'inputConfirmPassword'"
                                                    :error="errors.has('confirm password') ? errors.first('confirm password') : ''"
                                                    v-model="form.confirm_password"/>

                                    </div>

                                    <p class="has-text-left pt-10 pb-10">
                                        <router-link to="/auth/login" class="no-account" href="#">Have an account?</router-link>
                                    </p>

                                    <div class="pt-10 pb-10">
                                        <button class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh">
                                            Register
                                            <div v-if="processing" class="btnProcessing"></div>
                                        </button>
                                    </div>

                                </div>

                                <p class="has-text-centered">
                                    <router-link to="/auth/forgotten" class="forgot">Forgot password?</router-link>
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

        name: "RegisterPage",

        components: { InputText },

        data () {

            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                },
                alert: {
                    css: '',
                    message: ''
                },
                processing: false
            }
        },

        methods: {

            register () {

                // Show the processing.
                this.processing = true;

                // Set alert to be null.
                this.alert.message = "";

                // Run the validator.
                this.$validator.validateAll()
                .then(result => {

                    if(result) {

                        // On success of validator, process the registration.
                        this.processRegister()
                    }
                    else {

                        // ON error of validator advise the user.
                        this.processing = false;
                        this.alert.css = 'is-danger';
                        this.alert.message = "There are some issues with the information provided.";
                    }

                });

            },

            processRegister () {

                // Fire a store dispatch to register the new user.
                this.$store.dispatch('registerUser', {form: this.form, vm: this } )
                .then(response => {

                    // Send the user to the login page, and advise of email verification.
                    this.$router.push({ name: 'Login',
                                        params: {
                                            message: {
                                                css: 'is-success',
                                                message: 'Thank you for registering. Please check your email.'
                                            }
                                        }
                    });
                })
                .catch(error => {
                    // Advise the user of the error.
                    this.warning = "That email address is currently active. Please log into the site with the email and password.";
                });

                // Stop the processing animation.
                this.processing = false;

            }
        }
    }
</script>
