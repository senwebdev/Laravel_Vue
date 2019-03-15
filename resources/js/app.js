// Call bootstrap
require('./bootstrap');

// Import main vue.
import Vue from 'vue';
// Import other vue packages.
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
// Import store.
import storeData from './_store';
// Import Abilities
import { abilitiesPlugin } from '@casl/vue';
import ability from './_Ability'

// Import routes.
import { routes } from './_routes';

// Import the Apollo Client
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import VueApollo from 'vue-apollo';

// Use vue applications.
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuex);
Vue.use(abilitiesPlugin, ability);

// Set the Vuex store.
const store = new Vuex.Store(storeData);

const httpLink = new HttpLink({
    // ToDo: Set a global url for application.
    uri: '/graphql',
    transportBatching: true,
    fetch(uri, opts) {
        // enforce our JSON headers
        delete opts.headers['accept'];
        delete opts.headers['content-type'];

        // set our auth headers for GraphQL
        opts.headers['Accept'] = opts.headers['Content-Type'] = 'application/json';
        opts.headers['Authorization'] = `Bearer ${store.getters['bearerToken']}`;
        //opts.headers['ClientId'] = store.getters['client/id'];

        // return our fetch
        return fetch(uri, opts);
    }
});

// Create the apollo client.
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

// Install apollo client.
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

// Import mixins.
import FindElByName from './_mixins/findElByName';
import GraphQLErrorMessage from './_mixins/graphqlErrorMessage';

// Use vue mixins.
Vue.mixin(FindElByName);
Vue.mixin(GraphQLErrorMessage);

const router = new VueRouter({
    routes,
    mode: 'history'
});

// Router guard - Authorized person only.
// router.beforeEach((to, from, next) => {
//
//     if(to.meta.requiresAuth) {
//
//         const userToken = localStorage.getItem('bearerToken');
//
//         if(userToken) {
//
//             store.dispatch('checkUser', userToken)
//             .then(resp =>{
//                 next();
//             })
//             .catch(err =>{
//                 next({ name: 'Login' } )
//             });
//
//             //next();
//         }else {
//             next({ name: 'Login' } )
//         }
//     }
//     next()
// });

// Use main App file.
import App from './components/App';

// Initialize the Vue application.
new Vue({
    name: "AppJS",
    apolloProvider,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
