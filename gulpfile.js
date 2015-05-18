/*jslint node: true */
'use strict';

var gulp    = require('gulp'),
    nodemon = require('gulp-nodemon'),
    logger  = require('morgan');

gulp.task('start', function() {
  nodemon({
    script: 'bin/www'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('default', ['start'], function() {});
