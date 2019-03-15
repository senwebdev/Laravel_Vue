<template>

    <section class="hero is-fullheight is-light-grey is-bold">

        <div class="hero-body">

            <div class="container">

                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <div v-if="error" class="notification is-warning notification-margin" v-text="error"></div>

                        <form id="classic" class="login-form-wrapper" @submit.prevent="resetPassword">

                            <div id="login-form" class="animated preFadeInLeft fadeInLeft">

                                <div class="flex-card auth-card is-light-raised light-bordered card-overflow">

                                    <div class="auth-card-header header-primary">
                                        <a href="index.html">
                                            <!--<img src="assets/images/logos/bulkit-w.png" alt="">-->
                                        </a>
                                    </div>

                                    <div class="field">

                                        <input-text :type="'email'"
                                                    :cssClass="'form-control'"
                                                    :placeHolder="'Email'"
                                                    :name="'email'"
                                                    :icon="{ size: 'is-medium', align: 'is-right', slIcon: 'sl-icon-lock'}"
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
                                                    v-validate="'required|min:6'"
                                                    :label="'inputPassword'"
                                                    :error="errors.has('password') ? errors.first('password') : ''"
                                                    v-model="form.password"/>

                                    </div>

                                    <div class="field">

                                        <input-text ref="password"
                                                    :type="'password'"
                                                    :cssClass="'form-control'"
                                                    :placeHolder="'Confirm Password'"
                                                    :name="'confirm password'"
                                                    :icon="{ size: 'is-medium', align: 'is-right', slIcon: 'sl-icon-lock'}"
                                                    :inputClass="'is-large'"
                                                    v-validate="'required|confirmed:password'"
                                                    :label="'inputConfirmPassword'"
                                                    :error="errors.has('password confirmation') ? errors.first('password confirmation') : ''"
                                                    v-model="form.password_confirmation"/>

                                    </div>

                                    <div class="pt-10 pb-10">

                                        <button class="button button-cta btn-align primary-btn is-fullwidth btn-outlined is-bold rounded raised no-lh">
                                            Reset Password
                                            <div v-if="processing" class="btnProcessing"></div>
                                        </button>

                                    </div>

                                </div>

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

        name: "ResetPage",

        components: { InputText },

        data () {

            return {
                form: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                    token: this.$route.params.token
                },
                error: null,
                processing: false
            }
        },

        methods: {

              resetPassword () {

                  // Show the processing.
                  this.processing = true;

                  // Set error message to null.
                  this.error = '';

                  // Run the validator.
                  this.$validator.validateAll()
                  .then(result => {

                      if(result) {

                          // On success, process the reset password.
                          this.processResetPassword()
                      }
                      else {

                          // Issue with the validator
                          this.error = "There are some issues with the information provided.";
                      }

                  });

              },

              processResetPassword () {

                  this.error = '';

                  this.$store.dispatch('resetPassword', { form: this.form, vm: this} )
                  .then(response => {

                      this.$router.push({ name: 'Login',
                          params: {
                              message: {
                                  css: 'is-success',
                                  message: 'Your password has been reset.'
                              }
                          }
                      });
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
