var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src([
        'public/*',
        'govuk_modules/*',
        '.port.tmp',
        '*.log'
    ], {read: false})
        .pipe(clean())
});
