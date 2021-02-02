# Sitebuilding Boilerplate

Simple and dynamic boilerplate for site development purposes.

| Data          |                                                          |      
|---------------|---------------------------------------------------------:|
| Maintainer    |                                            Miklós Szilas |
| Email         |[szilas.miklos@gmail.com](mailto:szilas.miklos@gmail.com) |
| Git repository|     http://github.com/miklos-sz/sitebuilding-boilerplate |

## Features

- PHP template files
- JavaScript and JQuery
- Bootstrap 4.5
- Laravel Mix
    - Live Reload with Browsersync
    -  Compile SASS files
    - Bundle JavaScript files
    - Copy assets (images & files)

## Installation
- if necessary, install 'nmp' over 'node.js' (https://www.npmjs.com/get-npm) then 'yarn' (``npm install yarn``)
- in the ``package.json``: feel free to fill out the `name` and `description` fields
- set up your local development server (Apache, Nginx, etc.), create a local development URL, such as '[http://yoursite.local](http://yoursite.local)'
  
- in the ``webpack.mix.js``: set ``localUrl`` to your own local development URL
- in the terminal, run: ``nvm use`` (current NPM version is in the ``.nvmrc`` file)
- then ``yarn install``

## Run 
- in the terminal, run ``yarn mix watch`` for live reload on ``http://localhost:3000``
