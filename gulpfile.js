'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pleeease = require('gulp-pleeease');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('js', function(){
    browserify('./src/js/main.js', { debug: false })
        .transform(babelify.configure({
            presets: ['es2015']
        }))
        .transform('browserify-shim', { global: true })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./wptheme/dist/js'));
});

gulp.task('js:watch', function(){
    gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('sass', function(){
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

gulp.task('sass:watch', function(){
    gulp.watch('./src/scss/*.scss', ['sass']);
});

// default task
gulp.task('default', ['sass:watch', 'js:watch']);
