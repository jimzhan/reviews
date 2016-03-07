import React from 'react';
import { Provider } from 'react-redux';

import Counter from './components/Counter';
import configure from './store';


const store = configure({ value: 0 });


const App = () => (
    <Counter value={store.getState()}
      increase={ () => store.dispatch({ type: 'INCREMENT' }) }
    />
);

export default App;
