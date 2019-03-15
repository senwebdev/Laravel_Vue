const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
            module: {
                rules: [
                    {
                        test: /\.(graphql|gql)$/,
                        exclude: /node_modules/,
                        loader: 'graphql-tag/loader',
                    },
                ],
            },
            resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@components': path.resolve(__dirname, 'resources/js/components'),
                '@application': path.resolve(__dirname, 'resources/js/components/_Application'),
                '@auth': path.resolve(__dirname, 'resources/js/components/_Auth'),
                '@pages': path.resolve(__dirname, 'resources/js/components/_Pages'),
                '@partials': path.resolve(__dirname, 'resources/js/components/_Partials'),
                '@templates': path.resolve(__dirname, 'resources/js/components/_Templates'),
                '@helpers': path.resolve(__dirname, 'resources/js/_helpers'),
                '@mixins': path.resolve(__dirname, 'resources/js/_mixins'),
                '@plugins': path.resolve(__dirname, 'resources/js/_plugins'),
                '@routes': path.resolve(__dirname, 'resources/js/_routes'),
                '@store': path.resolve(__dirname, 'resources/js/_store'),
                '@queries': path.resolve(__dirname, 'resources/js/_GraphQL/_queries'),
                '@mutations': path.resolve(__dirname, 'resources/js/_GraphQL/_mutations'),
                '@assets': path.resolve(__dirname, 'resources/sass'),

            }
        }
    })
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/bulma/dashboard.js', 'public/js')
    .combine([
        'resources/js/bulma/auth.js',
        'resources/js/bulma/components-modals.js',
        'resources/js/landingv3.js',
        'resources/js/bulma/main.js',
        'resources/js/bulma/core.js',
        'resources/js/bulma/common.js',
        'resources/js/bulma/documents.js',
        'resources/js/bulma/contacts.js',
        'resources/js/bulma/projects.js',
        'resources/js/bulma/kanban.js',
        'resources/js/bulma/crm.js',
        'resources/js/bulma/forums.js',
        'resources/js/bulma/support.js',
        'resources/js/bulma/datatable.js',
        'resources/js/bulma/charts.js'
        ],
        'public/js/bulma.js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/bulkit.scss', 'public/css')
    .sass('resources/sass/dashboard.scss', 'public/css');
