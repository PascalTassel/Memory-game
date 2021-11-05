let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('../dist/')
  .js('js/index.js', 'js/memory.js')
  .sass('scss/memory.scss', 'css')
  .options({
    processCssUrls: false,
    cssNano: {
      'preset' : 'default',
    }
  });