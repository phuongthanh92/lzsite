// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-cssnano');
var connect = require('gulp-connect');

gulp.task('connect', function(){
    connect.server({
        root: 'public',
        livereload: true
    });
});

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(livereload());
});

gulp.task('livereload', function (){
    gulp.src('./public/**/*')
        .pipe(connect.reload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['assets/scss/**/*'], ['sass']);
});

// Default Task
gulp.task('default', ['connect', 'sass', 'watch']);