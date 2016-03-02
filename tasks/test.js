import gulp from 'gulp';
import mocha from 'gulp-mocha';


gulp.task('test', () =>
  gulp.src(['src/**/*.test.js'])
  .pipe(mocha({
    compilers: ['js:babel-core/register'],
  }))
);
