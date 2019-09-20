let imgPATH = {
    "input": ["./src/static/img/**/*.{png,jpg,jpeg,gif,svg}",
        '!./dev/static/img/svg/*'],
    "ouput": "./app/img/"
};


module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(imgPATH.input)
            .pipe($.gulp.dest(imgPATH.ouput));
    });
}    
