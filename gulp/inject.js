'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('inject', ['scripts', 'less'], function () {

  var injectStyles = gulp.src([
    path.join(conf.paths.src, '/css/**/less.css'),
    path.join(conf.paths.src, '/css/**/*.used.css'),
    path.join('https://fonts.googleapis.com/css?family=Roboto:400,300,700&subset=latin,cyrillic')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/js/**/*.module.js'),
    path.join(conf.paths.src, '/js/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js')
  ])
  .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
