module.exports = function() {
    $.gulp.task('pug', function () {
        return $.gulp.src('src/pug/pages/*.pug')
        .pipe($.load.plumber())
        .pipe($.load.pug({
            pretty:true
        }))
        .pipe($.load.formatHtml({
			      indent_inner_html: true
		}))
        .pipe($.gulp.dest('app'))
        .on('end', $.bs.reload);
    });
}