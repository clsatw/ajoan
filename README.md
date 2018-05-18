# CustomerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

// roach
npm i express --save
create a index.js on app root folder. a basic 
// production build
ng build --prod   // to create built files in ./dist folder, so index.js can render index.html from it folder
node index

ng g m shared
make all feature modules import SharedModule

how to deploy the site:
    ng buid --prod
    mon
    pm2 start server.js


to do lists:
    1. amazon echo
    2. ifttt news auto update on webiste site to enrich content.
    2. follwer
    3. camera
    4. enable ftp service on mean server for dlink camera motion detector
    5. beautify website
    6. google analystics
    7. esp8266 deep sleep 
    9. iot button
    10. mDns for firmware update
    11. iot bulb at home 
    12  angular language service -- done
    13 nativescript

    https://medium.com/@intellix/production-ready-angular-cli-v1-0-0-with-i18n-and-localised-urls-1f3cf16cc204
    // i18n - internationization
    0. add <i18n='@@xxx'> for texts that will displayed in different languages in all html files (must do all html at a time)
    1. ng xi18n --outputPath=src/locale or npm run extract to create a en-us messages.xlf file on locale folder
    2. copy the xlf file to messages.zh-hant.xlf (for tranditional chinese)
    3. edit messages.zh-hant.xlf by adding <target> tags below <source> tags
    4. npm run build and npm run build:zh-hant to generate output on /dist and /dist/zh-hant
    5. amend server.js to enable locale and render index.html under /dist base on locale
    6. node server.js 