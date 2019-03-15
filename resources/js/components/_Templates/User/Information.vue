<template>

    <div class="fab js-hamburger">

        <div class="profile-container">

            <div :class="innerClose ? 'innerClose' : 'inner'">

                <div class="container is-fluid">

                    <div id="profile-cover" class="columns">

                        <div class="cover-overlay"></div>

                        <div class="column is-10 is-offset-1 heading-wrapper">

                            <div class="profile-heading">

                                <div class="columns">

                                    <div class="column is-2 has-text-centered">
                                        <div class="image is-128x128 avatar">
                                            <div class="avatar-overlay">
                                                <i class="fa fa-camera fa-2x"></i>
                                            </div>
                                            <user-photo></user-photo>
                                        </div>
                                    </div>

                                    <div class="column is-4 name">
                                        <p>
                                            <span class="title light-text is-bold">Helen Miller</span>
                                        </p>
                                        <p class="tagline light-text">Sales Manager @ Acme Inc.</p>
                                        <div>
                                            <button class="button dash-btn ripple primary-btn btn-outlined follow rounded width-100">
                                                <i class="fa fa-check"></i>Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div class="column is-2 followers has-text-centered is-hidden-mobile">
                                        <p class="stat-val">74</p>
                                        <p class="stat-key">Projects</p>
                                    </div>
                                    <div class="column is-2 following has-text-centered is-hidden-mobile">
                                        <p class="stat-val">179</p>
                                        <p class="stat-key">Deals</p>
                                    </div>
                                    <div class="column is-2 likes has-text-centered is-hidden-mobile">
                                        <p class="stat-val">963</p>
                                        <p class="stat-key">Leads</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <!-- Profile menu FAB -->
                        <div class="profile-fab">
                            <div class="fab-wrapper">
                                <button id="show-notifications" class="notifications fab-btn mini ripple" data-toggle="tooltip" data-placement="left" data-title="Notifications" data-original-title="">
                                    <i class="material-icons">notifications</i>
                                </button>
                                <button id="show-team" class="team fab-btn mini ripple" data-toggle="tooltip" data-placement="top" data-title="Team" data-original-title="">
                                    <i class="material-icons">group</i>
                                </button>
                                <button id="show-details" class="details fab-btn mini ripple" data-toggle="tooltip" data-placement="top" data-title="Profile" data-original-title="">
                                    <i class="material-icons">subject</i>
                                </button>
                                <button id="profile-fab-trigger" class="fab-btn pop-fab">
                                    <span class="profile-menu-wrapper">
                                        <span class="icon-box-toggle">
                                            <span class="rotate">
                                                <i class="icon-line-top"></i>
                                                <i class="icon-line-center"></i>
                                                <i class="icon-line-bottom"></i>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <!-- /Profile menu FAB -->
                    </div>


                        <!-- Profile Sections -->
                        <div class="container">
                            <div class="columns">
                                <div class="column is-10 is-offset-1">
                                    <div class="profile-sections-wrapper">

                                        <!-- Profile details -->
                                        <div id="profile-details">
                                            <div class="columns">

                                                <!-- Details sub view -->
                                                <div id="profile-view" class="column is-10 is-offset-1" :class="{'is-hidden': editProfile}">
                                                    <div class="flex-card is-top light-bordered raised animated preFadeInUp fadeInUp">
                                                        <div class="edit-button edit-trigger has-text-left">
                                                            <button class="button btn-dash secondary-btn raised ripple no-lh rounded" @click="editUserProfile">Edit profile</button>
                                                        </div>
                                                        <!-- Profile details card -->
                                                        <div class="card-body">
                                                            <div class="columns">
                                                                <div class="column is-6">
                                                                    <div class="info-section">
                                                                        <!-- Personal info -->
                                                                        <h1 class="info-heading">Personal info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Full name :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Helen Miller
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Age :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        27 years
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Country :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        United States
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Contact info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Email :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        hmiller@acme.io
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Mobile :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        +1 556 548 55
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Office :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        +1 589 654 32
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="column is-6">
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Company info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Company :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Acme Inc.
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Department :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        Sales &amp; Marketing
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Position :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Sales Manager
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Social</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        <i class="fa fa-twitter"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        twitter/helenMiller
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        <i class="fa fa-linkedin"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        linkedin/helenMiller
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="taglist mt-30">
                                                                                <span class="tag squared is-outlined is-primary">Sales</span>
                                                                                <span class="tag squared is-outlined is-info">Marketing</span>
                                                                                <span class="tag squared is-outlined is-primary">Customers</span>
                                                                                <span class="tag squared is-outlined is-secondary">Cart</span>
                                                                                <span class="tag squared is-outlined is-secondary">Checkout</span>
                                                                                <span class="tag squared is-outlined is-secondary">Automation</span>
                                                                                <span class="tag squared is-outlined is-info">Emailing</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- Personal info -->
                                                            </div>
                                                        </div>
                                                        <!-- Profile details card -->
                                                    </div>
                                                </div>
                                                <!-- /Details sub view -->
                                                <!-- Edit sub view -->
                                                <div id="edit-view" class="column is-10 is-offset-1" :class="{'is-hidden': !editProfile}">
                                                    <div class="flex-card is-top light-bordered raised animated preFadeInUp fadeInUp">
                                                        <div class="edit-button has-text-centered">
                                                            <h3 class="title">Edit Profile</h3>
                                                            <div class="cross-container edit-trigger" @click="editUserProfile">
                                                                <span class="top"></span>
                                                                <span class="bottom"></span>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
                                                            <!-- Edit form -->
                                                            <form>
                                                                <div class="columns">
                                                                    <div class="column is-6">
                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">person_outline</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>First name</label>
                                                                        </div>

                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">mail_outline</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>Email</label>
                                                                        </div>
                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">smartphone</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>Mobile</label>
                                                                        </div>


                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">settings</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>Department</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="column is-6">
                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">person</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>Last name</label>
                                                                        </div>
                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">domain</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>Company</label>
                                                                        </div>
                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">phone</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>Office</label>
                                                                        </div>
                                                                        <div class="control-material is-secondary has-icon">
                                                                            <input class="material-input" type="text" required="">
                                                                            <i class="material-icons">room</i>
                                                                            <span class="material-highlight"></span>
                                                                            <span class="bar"></span>
                                                                            <label>Position</label>
                                                                        </div>

                                                                        <div class="has-text-centered mt-30">
                                                                            <button class="button btn-dash secondary-btn is-raised is-fullwidth rounded ripple no-lh" data-ripple-color="">Save changes</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <!-- /Edit form -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /Edit sub view -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

</template>

<script>

    import UserPhoto from '@templates/User/Photo';

    export default {

        name: "Information",

        components: { UserPhoto },

        data() {
            return {
                innerClose: false,
                editProfile: false
            }
        },

        methods: {

            // Open up the edit profile form.
            editUserProfile () {
                this. editProfile = !this. editProfile;
            }

        }
    }
</script>
