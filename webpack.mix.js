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

mix
  .js('assets/src/js/index.js', 'assets/js/memory.js')
  .sass('assets/src/scss/memory.scss', 'assets/css/memory.css')
  .options({
    processCssUrls: false,
    cssNano: {
      'preset' : 'default',
    }
  });
