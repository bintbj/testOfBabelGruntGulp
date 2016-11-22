var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
//定义lint任务，验证代码
//gulp采取pipe方法，用流的方法向下传递
gulp.task('lint', function () {
	return gulp.src('src/test.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
//定义compress任务亚索代码
gulp.task('compress', function() {
	return gulp.src('src/test.js')
	.pipe(uglify())
	.pipe(gulp.dest('build'));
});
//将lint和compress组合起来
gulp.task('default', ['lint', "compress"]);
