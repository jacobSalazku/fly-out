const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

var minifyJs = require('gulp-uglify')


function compileSass() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass(),sass.logError)
    .pipe(gulp.dest('./output'));
}

function scripts(){
  return gulp.src('./src/**/*.js')
    .pipe(minifyJs())
    .pipe(gulp.dest('./output'));
}

function watchTask() {
  gulp.watch('./sass/**/*.scss', compileSass);
  gulp.watch('./src/**/*.js', scripts);
}

exports.scripts = scripts;

exports.default = gulp.parallel(compileSass, scripts, watchTask);