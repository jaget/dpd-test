'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./gulp-config');

gulp.task('lint:js', function () {
    return gulp.src([config.jsDest + '/**/*.js', '!'+config.jsDest + '/**/*.min.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail', {
            ignoreWarning: true,
            ignoreInfo: true
        }))
        .pipe(plugins.jscs({
            fix: true,
            configPath: '.jscsrc'
        }))
        //.pipe(gulp.dest(config.jsDest))
        ;
});