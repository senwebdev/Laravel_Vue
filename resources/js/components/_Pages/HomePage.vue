<template>
    <section>
        <h1>This is the homepage!</h1>
        <Navigation></Navigation>
    </section>
</template>

<script>

    import Navigation from '@partials/Navigation';

    export default {
        name: "HomePage",
        components: { Navigation }
    }
</script>
