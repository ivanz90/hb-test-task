'use strict'

global.$ = {
    gulp: require('gulp'),
    load: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    del: require('del'),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};    

$.path.tasks.forEach(taskPath => {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'sass:dev',
        'img:dev',
        'svg',
        'libsJS:dev',
        'js:dev'
    )   
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'sass:build',
        'img:dev',
        'svg',
        'libsJS:build',
        'js:build'
    )   
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel('watch', 'server')
));



/* 

Plugins

* gulp-pug
* gulp-sass
* sourcemaps
* autoprefixer
* rename
* gulp-concat
* gulp-load-plugins
* browser-sync
* del
* plumber
*gulp-uglify

*/