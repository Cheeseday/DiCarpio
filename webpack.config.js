const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const bootstrap = require('bootstrap');
//const PugPlugin = require('pug-plugin');
const globule = require("globule");
const fs = require("fs");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

const mixins = globule
    .find(["src/components/libs/*.pug", "!src/components/libs/_libs.pug"])
    .map((path) => path.split('/').pop())
    .reduce((acc, currentItem) => acc + `include ${currentItem}\n`, ``);

fs.writeFile("src/components/libs/_libs.pug", mixins, (err) => {
    if (err) throw err;
    console.log("Mixins are generated automatically!");
});

const paths = globule.find(["src/pages/**/**/*.pug"]);

module.exports = {
    mode: mode,
    //entry: './src/index.js',
    entry: {
        // The Pug file is the entry-point for all scripts and styles.
        // Source scripts and styles must be specified directly in Pug.
        // Do not need to define JS and SCSS in the webpack entry.
        main: './src/stylesheets/main.scss',
        main: './src/index.js',
        //fresh_fish: './src/pages/categories/fresh_frozen_fish/fresh_frozen_fish.pug',
        //index: './src/pages/index.pug',      // output dist/index.html
        //about: './src/views/about/index.pug' // output dist/about.html
        // ...
      },
    output: {
        filename: '[name].[contenthash].js',
        //assetModuleFilename: "assets/[hash][ext]",
        assetModuleFilename: "assets/[hash][ext][query]",
        // assetModuleFilename: pathData => {
        //     const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
        //     return `${filepath}/[hash][ext][query]`;
        // },
        clean: true,
        //path: path.join(__dirname, 'dist/'), // new
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/assets/images/'),
        },
    },
    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/index.pug",
        //     filename: "index.html"
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pug/pages/categories.pug",
        //     filename: "categories.html"
        // })
        ...paths.map((path) => {
            return new HtmlWebpackPlugin({
                template: path,
                filename: `${path.split(/\/|.pug/).splice(-2, 1)}.html`,
            });
        }),
        // new PugPlugin({         //new
        //     js: { 
        //       // output filename of extracted JS file from source script defined in Pug
        //       filename: 'assets/js/[name].[contenthash:8].js',
        //     },
        //     css: {
        //       // output filename of extracted CSS file from source style defined in Pug
        //       filename: 'assets/css/[name].[contenthash:8].css',
        //     },
        // }),
    ],
    module: {
        rules: [
            {
            test: /\.html$/i,
            loader: "html-loader",
            },
            /* {
                test: /\.(sa|sc|c)ss$/,
                include: [
                    path.resolve(__dirname, 'src', 'stylesheets')
                ],
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            }, */
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // include: [
                //     path.resolve(__dirname, 'src', 'src/stylesheets')
                // ],
            },
              {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            // {
            //     test: /\.pug$/,            //new
            //     loader: PugPlugin.loader, // PugPlugin already contain the pug-loader
            // },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            }
        ]
    },
}