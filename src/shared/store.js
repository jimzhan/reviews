import { createStore, applyMiddleware } from 'redux';

import createLogger from 'redux-logger';
import rootReducer from '../reducers';


const logger = createLogger({
  level: 'console',
});


export function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    logger
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export const store = configure({});