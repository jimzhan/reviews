import gulp from 'gulp';
import eslint from 'gulp-eslint';


gulp.task('lint', () =>
  gulp.src([
    'src/**/*.js',
    'src/**/*.jsx',
    '!node_modules/**',
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);
