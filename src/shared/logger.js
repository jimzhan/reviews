import debug from 'debug';


localStorage.debug = 'app:*';

const extdebug = debug('app:debug');
const info = debug('app:info');
const warn = debug('app:warn');
const error = debug('app:error');

export {
  extdebug as debug,
  info,
  warn,
  error,
};
