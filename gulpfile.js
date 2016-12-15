"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); //opens a url in a browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); //use conventional text streams with Gulp
var concat = require('gulp-concat'); //concatenates files
var lint = require('gulp-eslint'); //lint JS files, including JSX
var exec = require('child_process').exec //command line from gulp

var config = {
	PORT: 5000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',
		css: [
			'./src/local.css',
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/toastr/toastr.css'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
};

gulp.task('connect',function(){
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});	

gulp.task('api',function(){
	exec('node src/api/app.js');
});

gulp.task('open',['api','connect'],function(){
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ":" + config.port + '/'}));
});

gulp.task('html',function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js',function(){
	browserify({
		entries: config.paths.mainJs,
		debug: true
	})
	.transform(reactify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.dist + '/scripts'))
	.pipe(connect.reload());
});

gulp.task('css',function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images',function(){
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());

	//publish favicon
	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint',function(){
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format())
});

gulp.task('watch',function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.css, ['css']);
	gulp.watch(config.paths.js, ['js','lint']);
});

gulp.task('default',['html','css','js','images','lint','open','watch']);


