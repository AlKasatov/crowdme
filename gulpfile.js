let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rig = require('gulp-rigger'),
    bs = require('browser-sync').create(),
    del = require('del');

gulp.task('bsync', function () {
    bs.init({
        server: './dist',
        watch: true
    })
});

gulp.task('scss', function () {
    return gulp.src('app/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rig())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(rig())
        .pipe(gulp.dest('dist/'));
})

gulp.task('js', function () {
    return gulp.src('app/js/*.js')
        .pipe(rig())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('img', function () {
    return gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img/'));
})

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts/'));
})

gulp.task('build', gulp.parallel('scss', 'html', 'js', 'img', 'fonts'));
gulp.task('clean', function () {
    return del('./dist');
})

gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.scss', gulp.series('scss'));
    gulp.watch('app/**/*.html', gulp.series('html'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
    gulp.watch('app/img/**/*.*', gulp.series('img'));
})

gulp.task('default', gulp.series('clean', 'build', gulp.parallel('bsync', 'watch')))



