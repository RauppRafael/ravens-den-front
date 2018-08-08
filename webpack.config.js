var path = require('path')
var webpack = require('webpack')
let CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',

            '@env': path.resolve('./.env.js'),
            '@views': path.resolve('./src/views'),
            '@assets': path.resolve('./src/assets'),
            '@mixins': path.resolve('./src/packages/mixins'),
            '@packages': path.resolve('./src/packages'),
            '@components': path.resolve('./src/components'),

            '@scss': path.resolve('./src/assets/scss'),
            '@colors': path.resolve('./src/assets/scss/colors.scss'),
            '@variables': path.resolve('./src/assets/scss/variables.scss'),
            '@animations': path.resolve('./src/assets/scss/animations/animations.scss'),
            '@scss-mixins': path.resolve('./src/assets/scss/mixins/mixins.scss'),
            '@animation-mixins': path.resolve('./src/assets/scss/animations/animation-mixins.scss'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            // $: 'jquery/dist/jquery.min',
            // jQuery: 'jquery/dist/jquery.min',
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets/static',
                to: '',
                toType: 'dir'
            },
        ])
    ],
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
