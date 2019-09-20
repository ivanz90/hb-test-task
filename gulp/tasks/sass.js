// let plumber = require('gulp-plumber'),
//     scss = require('gulp-sass'),
//     autoprefixer = require('gulp-autoprefixer'),
//     csso = require('gulp-csso'),
//     csscomb = require('gulp-csscomb'),
//     sourcemaps = require('gulp-sourcemaps');

let stylesPath = {
    input: "src/static/sass/",
    output: "app/css"
};

module.exports = function() {
    $.gulp.task('sass:dev', function () {
        return $.gulp.src(stylesPath.input + 'style.scss')
        .pipe($.load.plumber())
        .pipe($.load.sourcemaps.init())
        .pipe($.load.sass())
        .pipe($.load.autoprefixer({
            Browserslist: ['last 15 versions'],
            cascade: false
        }))
        .pipe($.load.groupCssMediaQueries())
        .pipe($.load.sourcemaps.write())
        .pipe($.gulp.dest(stylesPath.output))
        .pipe($.bs.reload({
                stream:true
        }));
    });

    $.gulp.task('sass:build', function () {
        return $.gulp.src(stylesPath.input + 'style.scss')
        .pipe($.load.sass())
        .pipe($.load.autoprefixer({
            Browserslist: ['last 15 versions'],
            cascade: false
        }))
        .pipe($.load.groupCssMediaQueries())
        .pipe($.load.csso())
        .pipe($.load.rename('style.min.css'))
        .pipe($.gulp.dest(stylesPath.output))
    });
}