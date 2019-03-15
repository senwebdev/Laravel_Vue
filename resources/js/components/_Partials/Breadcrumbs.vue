<template>

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
        <ul>
            <li v-for="breadcrumb in breadcrumbs">
                <router-link v-if="breadcrumb.path !== ''" :to="breadcrumb.path">
                    <i :class="breadcrumb.icon"></i>
                    {{ breadcrumb.name }}
                </router-link>
                <span v-else>
                    <i :class="breadcrumb.icon"></i>
                    {{ breadcrumb.name }}
                </span>
            </li>
        </ul>
    </nav>
    <!-- /Breadcrumbs -->
    
</template>

<script>
    export default {
        name: "Breadcrumbs",
        props: ["breadcrumbs"]
    }
</script>
