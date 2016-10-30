// require modules
var gulp = require('gulp');

// require config
var config = require('./gulp-config');

runSequence = require('run-sequence')
;

gulp.task('sync', function(callback){
    runSequence(
        'sync:all',
        'sync:db',
        callback
    );
});
gulp.task('sync:all', function() {
    return gulp.src(config.syncDirSrc.all)
        .pipe(gulp.dest('.tmp/public/'));
});
gulp.task('sync:db', function() {
    return gulp.src(config.syncDirSrc.db)
        .pipe(gulp.dest('.tmp/'));
});