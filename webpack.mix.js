const mix = require('laravel-mix');

const site = {
  // Set your local development site URL here
  localUrl: 'http://yoursite.local',
}

mix.js('src/assets/scripts/main.js', 'dist')
  .sass('src/assets/styles/main.scss', 'main.css')
  .copy('./node_modules/jquery/dist/jquery.js', 'dist')
  .copy('src/views/', 'dist')
  .copy('src/assets/images', 'dist/images')
  .copy('src/assets/fonts', 'dist/fonts')
  .copy('src/assets/fonts/**', 'fonts')
  .copy('node_modules/slick-carousel/slick/fonts/**', 'dist/fonts')
  .copy('node_modules/slick-carousel/slick/ajax-loader.gif', 'dist/images')
  .copy('src/assets/iconfonts/**', 'dist/iconfonts')
  .browserSync({
    proxy: site.localUrl,
    files: [
      'src/*.php',
      'src/assets/styles/**/*',
      'src/assets/scripts/**/*'
    ]
  })
  .setPublicPath('dist');
