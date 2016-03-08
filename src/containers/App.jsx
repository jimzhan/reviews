import React from 'react';
import { Provider } from 'react-redux';

import DevTools from '../containers/DevTools';
import Counter from '../components/Counter';
import configure from '../shared/store';


const store = configure();


const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <DevTools />
    </div>
  </Provider>
);

export default App;
