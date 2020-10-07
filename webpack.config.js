const path = require("path")
// enables built in webpack methods (i.e. provideplugin)
const webpack = require("webpack")
// imports analyzer
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
// imports manifest thing
const WebpackPwaManifest = require("webpack-pwa-manifest");


module.exports = {
    // root of bundle and beginning of dependency graph
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    // directs bundled code to folder we designate
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    // necessary to optimize and emit images
    module: {
        rules: [
            {
                test: /\.jpg$/i, //regex to find jpgs
                use:[
                    {
                        //only emits the files
                        loader: 'file-loader', //actual loader implementation
                        options: {
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    // enables webpack to recognize global variable $ used by jquery
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to HTML file in the dist folder
        }),
        // formats and creates manifest.json
        new WebpackPwaManifest({
            name: "Food Event",
            short_name: "Foodies",
            description: "An app that allows you to view upcoming food events.",
            background_color: "#01579b",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
              src: path.resolve("assets/img/icons/icon-512x512.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join("assets", "icons")
            }]
        })
    ],
    // determines mode webpack with run (i.e. production, development, etc)
    mode: 'development'
}