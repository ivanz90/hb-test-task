module.exports = function() {
    $.gulp.task('server', function() {
        $.bs.init({
            notify: false,
            server: {
                baseDir: "./app"
            }
        });
    });
}