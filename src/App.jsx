import React from 'react';
import { Provider } from 'react-redux';

import DevTools from './containers/DevTools';
import Counter from './components/Counter';

import { increase } from './actions/counter';
import configure from './shared/store';


const store = configure();


const App = () => (
  <Provider store={store}>
    <div>
      <Counter value={0} increase={ () => store.dispatch(increase(2)) }/>
      <DevTools />
    </div>
  </Provider>
);

export default App;
