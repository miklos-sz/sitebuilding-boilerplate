const path = require('path');
const glob = require('glob');
const packageFile = require('./package.json');
const webfontsGenerator = require('webfonts-generator');
const iconFiles = glob.sync('src/assets/icons/*.svg');

if (!iconFiles || !iconFiles.length) {
    console.log('Webfont generator found no icons, skipping task.')
    return;
}

webfontsGenerator({
    files: iconFiles,
    dest: path.resolve('src/assets', 'iconfonts'),
    cssDest: path.resolve('src/assets', 'iconfonts', '_icons.scss'),
    fontName: packageFile.name + '-' + ~~(Date.now() / 1000),
    classPrefix: 'icon',
    cssFontsUrl: '../iconfonts/',
    cssTemplate: path.resolve('src/assets', 'styles', 'utilities', '_icons.hbs'),
    types: ['svg', 'ttf', 'woff', 'woff2', 'eot'],
}, function (error) {
    if (error) {
        console.error('Webfont generation failed!', error);
    } else {
        console.log('Webfont generation done!');
    }
});

console.log('cica')
