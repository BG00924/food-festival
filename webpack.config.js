const path = require("path")
// enables built in webpack methods (i.e. provideplugin)
const webpack = require("webpack")



module.exports = {
    // root of bundle and beginning of dependency graph
    entry: './assets/js/script.js',
    // directs bundled code to folder we designate
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // enables webpack to recognize global variable $ used by jquery
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    // determines mode webpack with run (i.e. production, development, etc)
    mode: 'development'
}