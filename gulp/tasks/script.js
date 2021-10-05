module.exports = function () {



	$.gulp.task('scripts:common', function () {
		// return $.gulp.src('sourse/js/common.js')

		return $.gulp.src(
			[
				$.sourse + '/js/common.js',
				// $.sourse + '/pug/**/*.js',
			])
			// .pipe($.babel())
			// .pipe($.tabify(2, true))
			.pipe($.gulp.dest($.public + '/js'))
			.pipe($.browserSync.stream());
	}
	);

}