import USER_LOGIN from '@mutations/userLogin.gql';
import USER_LOGOUT from '@mutations/userLogout.gql';
import USER_REGISTER from '@mutations/userRegister.gql';
import USER_FORGOTTEN_PASSWORD from '@mutations/userForgottenPassword.gql';
import USER_RESET_PASSWORD from '@mutations/userResetPassword.gql';
import USER_RESEND_CONFIRMATION_CODE from '@mutations/userResendConfirmationCode.gql';
import CHECK_USER from '@queries/users.gql';

export default {

    state: {
        bearerToken: localStorage.getItem('bearerToken') || null
    },

    getters: {

        bearerToken (state) {
            return state.bearerToken;
        }

    },

    actions: {

        loginUser (context, credentials) {

            return new Promise((resolve, reject) => {
                // Mutation to login.
                credentials.vm.$apollo.mutate({
                    mutation: USER_LOGIN,
                    variables: {
                        username: credentials.form.email,
                        password: credentials.form.password
                    }
                })
                .then(response => {
                    // Set the user and bearer token variables.
                    const bearerToken = response.data.login.access_token;
                    // Fire of a mutation to set the bearerToken.
                    context.commit('setToken', bearerToken);
                    // Return promise.
                    resolve(response);
                })
                .catch(error => {
                    // Return error from Promise.
                    reject(error);
                });
            });
        },

        checkUser (context, func) {

            return new Promise((resolve, reject) => {

                // Query to check the user.
                func.vm.$apollo.query({
                    query: CHECK_USER,
                })
                .then( result => {
                    // Return promise.
                    resolve(result);
                })
                .catch(err =>{
                    // Return error from Promise.
                    reject(err);
                });

            });

        },

        logoutUser (context, credentials) {

            return new Promise((resolve, reject) => {
                // Mutation to login.
                credentials.vm.$apollo.mutate({
                    mutation: USER_LOGOUT,
                })
                .then(res => {
                    // Fire a mutation to log user out.
                    context.commit('logout');
                    // Return Promise.
                    resolve(res);
                })
                .catch(err => {
                    // Return error from Promise.
                    reject(err);
                });
            });

        },

        forgottenPassword (context, credentials) {

            return new Promise((resolve, reject) => {
                // Mutation to request a new password.
                credentials.vm.$apollo.mutate({
                    mutation: USER_FORGOTTEN_PASSWORD,
                    variables: {
                        ... credentials.form
                    }
                })
                .then(response => {
                    // Return promise.
                    resolve(response);
                })
                .catch(error => {
                    // Return error from Promise.
                    reject(error);
                });
            });
        },

        resetPassword (context, credentials) {

            return new Promise((resolve, reject) => {
                // Mutation to reset the password.
                credentials.vm.$apollo.mutate({
                    mutation: USER_RESET_PASSWORD,
                    variables: {
                        ... credentials.form
                    }
                })
                .then(response => {
                    // Return promise.
                    resolve(response);
                })
                .catch(error => {
                    // Return error from Promise.
                    reject(error);
                });
            });
        },

        registerUser (context, credentials) {

            return new Promise((resolve, reject) => {

                // Mutation to register a new user.
                credentials.vm.$apollo.mutate({
                    mutation: USER_REGISTER,
                    variables: {
                        ...credentials.form
                    }
                })
                .then(response => {
                    //
                    context.commit("registerSuccess", response.data);
                    // Return a Promise.
                    resolve(response);
                })
                .catch(error => {
                    // console.log(error);
                    reject(error);
                });

            });

        },

        resendConfirmationEmail (context, credentials) {

            return new Promise((resolve, reject) => {
                // Mutation to request a new password.
                credentials.vm.$apollo.mutate({
                    mutation: USER_RESEND_CONFIRMATION_CODE,
                    variables: {
                        ... credentials.form
                    }
                })
                    .then(response => {
                        // Return promise.
                        resolve(response);
                    })
                    .catch(error => {
                        // Return error from Promise.
                        reject(error);
                    });
            });

        }

    },

    mutations: {

        setToken (state, payload) {
            // Set the bearerToken to payload.
            state.bearerToken = payload;
            // Create the bearerToken in local storage.
            localStorage.setItem('bearerToken', payload);
        },

        logout (state) {
            // Set the bearerToken to null.
            state.bearerToken = null;
            // Remove the bearerToken in local storage.
            localStorage.removeItem("bearerToken");
        }
    }
};
