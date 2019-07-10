'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pleeease = require('gulp-pleeease');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('js', () => {
    browserify('./src/js/main.js', { debug: false })
        .transform(babelify.configure({
            presets: ['@babel/preset-env']
        }))
        .transform('browserify-shim', { global: true })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./wptheme/dist/js'));
});

gulp.task('js:watch', () => {
    gulp.watch('./src/js/*.js', gulp.task('js'));
});

gulp.task('sass', () => {
    gulp.src('./src/scss/main.scss')
        .pipe(
            sass({outputStyle: 'compressed'})
            .on('error', sass.logError)
        )
        .pipe(pleeease({
            fallbacks: {
                autoplefixer: ['last 4 versions']
            }
        }))
        .pipe(gulp.dest('./wptheme/dist/css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/scss/*.scss', gulp.task('sass'));
});

// default task
gulp.task('default', gulp.parallel('sass:watch', 'js:watch'));
