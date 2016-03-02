import gulp from 'gulp';
import stream from 'webpack-stream';
import config from '../webpack.babel';


gulp.task('build', ['clean'], () =>
  gulp.src('src/index')
  .pipe(stream(config))
  .pipe(gulp.dest(config.output.path))
);
