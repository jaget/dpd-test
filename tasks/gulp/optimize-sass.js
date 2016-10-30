'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')(),
    config = require('./gulp-config'),
    _whitelist = require('./css-whitelist'),
    browserSync = require('browser-sync');

// require custom modules
var customPlumber = require('./custom-modules/plumber');

gulp.task('optimize:sass', function() {
    return gulp.src('.tmp/public/css/styles.css')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.combineMq({
            beautify: false
        }))
        // .pipe(plugins.purifycss(['**/*.html', '**/*.njk'],{
        //     rejected: true,
        //     info: true,
        //     whitelist: _whitelist
        // }))
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write(config.mapsDest))
        .pipe(gulp.dest('.tmp/public/css/'))
        ;
});