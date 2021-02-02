const mix = require('laravel-mix');

const site = {
  // Set your local development site URL here
  localUrl: 'http://yoursite.local',
}

mix.js('src/assets/js/main.js', 'dist')
  .sass('src/assets/styles/main.scss', 'main.css')
  .copy('./node_modules/jquery/dist/jquery.js', 'dist')
  .copy('src/*.php', 'dist')
  .copy('src/assets/images', 'dist/images')
  .copy('src/assets/fonts', 'dist/fonts')
  .browserSync({
    proxy: site.localUrl,
    files: [
      'src/*.php',
      'src/assets/styles/**/*',
      'src/assets/js/**/*'
    ]
  })
  .setPublicPath('dist');
