<template>
    <section class="hero is-fullheight is-light-grey is-bold">

        <div class="hero-body">

            <div class="container">

                <div class="columns is-vcentered">

                    <div class="column is-4 is-offset-4">

                        <div v-if="alert.message" class="notification notification-margin" :class="alert.css" v-text="alert.message"></div>
                        <div v-if="message.message" class="notification notification-margin" :class="message.css" v-text="message.message"></div>

                        <h1>Resend Email Confirmation</h1>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>

<script>
    export default {
        name: "ResendPage",
        data() {
            return {
                alert: '',
                message: ''
            }
        },
    }
</script>
