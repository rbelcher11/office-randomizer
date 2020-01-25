const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mainConfig = (env, argv= {}) => {

    const {
        restEndpoint
    } = argv;

    return {
        context: path.resolve(__dirname, './src'),
        devtool: (argv.mode === 'production' ? 'none' : 'source-map'),
        devServer: {
            historyApiFallback: true,
            hot: false,
            port: 3000,
            liveReload: true,
        },
        entry: {
            'main': './index.jsx'
        },
        mode: argv.mode,
        module: {
            rules: [{
                test: /\.js(|x)?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', {
                                corejs: '3.x',
                                targets: {
                                    browsers: '> 10%, not dead'
                                },
                                useBuiltIns: 'usage',
                            }],
                        ],
                    }
                }]
            }, {
                test: /\.(png|jp(e*)g|gif|ttf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './images/[hash].[ext]',
                    }
                }]
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }]
        },
        output: {
            chunkFilename: '[name].[hash].bundle.js',
            filename: (chunkData) => {
                return chunkData.chunk.name === 'service-worker' ? '[name].js' : '[name].[hash].js';
            },
            path: path.resolve(__dirname, './dist'),
            pathinfo: false,
            publicPath: '/'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                configuration: JSON.stringify({
                    restEndpoint
                })
            }),
            new HtmlWebpackPlugin({
                template: 'index.html',
                excludeChunks: ['service-worker']
            }),
            new MiniCssExtractPlugin({
                filename: '[name]-[hash].css',
                chunkFilename: '[id]-[hash].css'
            }),
            new CopyWebpackPlugin([
                'manifest.json'
            ])
        ],
        resolve: {
            extensions: ['.mjs', '.js', '.jsx']
        },
        target: 'web'
    };

};

module.exports = mainConfig;
