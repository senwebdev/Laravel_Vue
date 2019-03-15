<template>

    <ul class="profile">
        <li>
            <img class="main-menu-avatar user" src="@assets/images/avatars/helen.jpg" alt="Helen" @click="openSecondaryMenu('profile')">
        </li>
    </ul>

</template>

<script>
    export default {
        name: "Photo",
        methods: {

            // Description of the method.
            openSecondaryMenu ( value) {

             this.findElByName("PageHeader").openSecondaryMenu(value);

            }

          }
    }
</script>

<style scoped>

</style>
