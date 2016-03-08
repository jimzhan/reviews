import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';


const configureForDevelopment = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      createLogger()
    ),
    DevTools.instrument()
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

// TODO production optimizations.
const configureForProduction = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      createLogger()
    )
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

if (process.env.NODE_ENV === 'production') {
  module.exports = configureForProduction;
} else {
  module.exports = configureForDevelopment;
}
