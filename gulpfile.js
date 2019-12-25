var gulp       	 = require('gulp'),
		less			   = require('gulp-less'),
		browserSync  = require('browser-sync'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglifyjs'),
		cssnano      = require('gulp-cssnano'),
		rename       = require('gulp-rename'),
		autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function(){
	return gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
	return gulp.src('src/js/scripts.js')
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js/'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('libsjs', ['scripts'], function() {
	return gulp.src([
		// 'libs/jquery/jquery-1.11.1.min.js',
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js'));
});

gulp.task('libscss', ['less'], function(){
	return gulp.src([
			// 'libs/mosaik/cubeportfolio.min.css',
			// 'libs/animate/animate.css',
		])
		.pipe(concat('libs.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('src/css/'))
});

gulp.task('watch', ['libscss', 'libsjs'], function() {
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);
