const mix = require('laravel-mix')
const path = require('path')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const analyzing = process.env.NODE_ENV === 'analyze';

module.exports = {
    plugin: [
        ...(analyzing ? [new BundleAnalyzerPlugin()] : [])
    ]
}

mix
  .js('resources/js/app.js', 'public/js')
  .vue({ version: 2 })
  .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/arabic.scss', 'public/css')
    .sass('resources/sass/english.scss', 'public/css')
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[contenthash]' },

  })
    .extend();
