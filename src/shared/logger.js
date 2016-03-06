import debug from 'debug';


localStorage.debug = 'App:*';

const extdebug = debug('App:[DEBUG]');
const info = debug('App:[INFO]');
const warn = debug('App:[WARN]');
const error = debug('App:[ERROR]');

export {
  extdebug as debug,
  info,
  warn,
  error,
};
