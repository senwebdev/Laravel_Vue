<template>

    <div>

        <nav class="main-menu is-dark">

            <div class="main-menu-inner">

                <ul>
                    <li class="main-logo">
                        <a href="/"><img src="@assets/images/logos/square-green.svg" alt=""></a>
                    </li>
                    <li class="side-icon" :class="{ 'is-active' : this.$route.meta.active === 'Dashboard'}" @click.prevent="closeNavDash">
                        <i class="sl sl-icon-speedometer"></i>
                    </li>

                    <li class="side-icon side-icon-menu" :class="{ 'is-active' : this.$route.meta.active === 'Support'}" data-child-menu="support-menu" @click="changeNavTitle('Support')">
                        <i class="sl sl-icon-support"></i>
                    </li>

                </ul>

            </div>
        </nav>

        <nav class="child-menu" :class="{ 'is-sidebar-translated' : openSideNav }">

            <div class="child-menu-inner">

                <ul>
                    <li class="child-header" :class="{ 'is-sidebar-translated' : openSideNav }">
                        <div class="sidebar-title" v-text="navTitle"></div>
                        <a id="close-child-menu" class="menu-wrapper">
                            <span class="icon-box-toggle ef-4" :class="{ 'active' : openSideNav }" @click="closeNav">
                                <span class="rotate">
                                    <i class="icon-line-top">  	 </i>
                                    <i class="icon-line-center">  </i>
                                    <i class="icon-line-bottom">  </i>
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>

                <ul id="support-menu" class="sidebar-menu is-active animated preFadeInRIght fadeInRight" :class="{ 'is-active' : navTitle === 'Support'}">

                    <li>
                        <router-link class="parent-link" to="/dashboard/support">
                            <span class="material-icons">format_list_bulleted</span>List of Support
                        </router-link>
                    </li>

                    <li>
                        <router-link class="parent-link" to="/dashboard/support/add">
                            <span class="material-icons">add</span>Create New Support
                        </router-link>
                    </li>

                </ul>

            </div>

        </nav>


    </div>
</template>

<script>
    export default {
        name: "PageSidebar",
        data() {
            return {
                navTitle: "Dashboard",
                openSideNav: false
            }
        },
        methods:{

            changeNavTitle ( str ) {
                this.navTitle = str;
                this.openSideNav = true;
                this.findElByName("PageHeader").pushHeader = true;
                this.findElByName("Application").showProfile = false;
                this.findElByName("Profile").showDropdown = false;
            },

            closeNav () {
                this.openSideNav = false;
                this.findElByName("PageHeader").pushHeader = false;
            },

            closeNavDash () {
                this.navTitle = "Dashboard";
                this.openSideNav = false;
                this.findElByName("PageHeader").pushHeader = false;
                this.findElByName("Application").showProfile = false;
                this.$router.push({ name: 'Dashboard' });
            }
        }

    }
</script>
