// Main site page.
import SitePage from '@components/Site';
import HomePage from '@pages/HomePage';
// Main Auth page.
import AuthPage from '@components/Auth';
// Authentication pages.
import ResetPage from '@auth/ResetPage';
import ForgottenPage from '@auth/ForgottenPage';
import RegisterPage from '@auth/RegisterPage';
import LoginPage from '@auth/LoginPage';
import ConfirmEmailPage from '@auth/ConfirmEmailPage';
import ResendConfirmEmailPage from '@auth/ResendConfirmEmailPage';
import ResendPage from '@auth/ResendPage';
// Main Application page.
import ApplicationPage from '@components/Application';
// Application pages.
import Dashboard from '@application/Dashboard';
import Support from '@application/Support';
import AddSupport from '@application/Support/Add';
import EditSupport from '@application/Support/Edit';

export const routes = [

    {
        path: '/',
        component: SitePage,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomePage
            }
        ]
    },
    {
        path: '/auth',
        component: AuthPage,
        children: [
            {
                path: 'resend-confirm',
                name: 'ResendConfirmEmail',
                component: ResendConfirmEmailPage,
            },
            {
                path: 'confirm/:token',
                name: 'ConfirmEmail',
                component: ConfirmEmailPage,
            },
            {
                path: 'resend',
                name: 'Resend',
                component: ResendPage,
            },
            {
                path: 'reset/:token',
                name: 'Reset',
                component: ResetPage,
            },
            {
                path: 'forgotten',
                name: 'Forgotten',
                component: ForgottenPage,
            },
            {
                path: 'register',
                name: 'Register',
                component: RegisterPage,
            },
            {
                path: 'login',
                name: 'Login',
                props: true,
                component: LoginPage,
            },
        ]
    },
    {
        path: '/dashboard',
        component: ApplicationPage,
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: Dashboard,
                props:{
                    breadcrumbs: [
                        {
                            name: "Dashboard",
                            path: "",
                            icon: "sl sl-icon-speedometer"
                        }
                    ]
                },
                meta: {
                    requiresAuth: true,
                    active: 'Dashboard'
                },
            },
            {
                path: 'support',
                name: 'Support',
                component: Support,
                props:{
                    breadcrumbs: [
                        {
                            name: "Dashboard",
                            path: "/dashboard",
                            icon: "sl sl-icon-speedometer"
                        },
                        {
                            name: "Support",
                            path: "",
                            icon: "sl sl-icon-support"
                        }
                    ]
                },
                meta: {
                    requiresAuth: true,
                    active: 'Support'
                },
            },
            {
                path: 'support/add',
                name: 'AddSupport',
                component: AddSupport,
                props:{
                    breadcrumbs: [
                        {
                            name: "Dashboard",
                            path: "/dashboard",
                            icon: "sl sl-icon-speedometer"
                        },
                        {
                            name: "Support",
                            path: "/dashboard/support",
                            icon: "sl sl-icon-support"
                        },
                        {
                            name: "Add Support",
                            path: "",
                            icon: "sl sl-icon-plus"
                        }
                    ]
                },
                meta: {
                    requiresAuth: true,
                    active: 'Support'
                },
            },
            {
                path: 'support/edit/:id',
                name: 'EditSupport',
                component: EditSupport,
                props:{
                    breadcrumbs: [
                        {
                            name: "Dashboard",
                            path: "/dashboard",
                            icon: "sl sl-icon-speedometer"
                        },
                        {
                            name: "Support",
                            path: "/dashboard/support",
                            icon: "sl sl-icon-support"
                        },
                        {
                            name: "Edit Support",
                            path: "",
                            icon: "sl sl-icon-pencil"
                        }
                    ]
                },
                meta: {
                    requiresAuth: true,
                    active: 'Support'
                },
            }
        ]
    }

];
