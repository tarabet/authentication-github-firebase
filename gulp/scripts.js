'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var less = require('gulp-less');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src(path.join(conf.paths.src, '/js/**/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
});

/* THIS TASK IS USED TO CONVERT LESS FILES TO CSS */
/* BEFORE USED, THE LESS-FILE HAS TO BE IMPORTED INTO LESS.LESS FILE */
gulp.task('less', function () {
  gulp.src(path.join(conf.paths.src, '/css/less.less'))
      .pipe(less())
      .pipe(gulp.dest(path.join(conf.paths.src, 'css/')));
});

