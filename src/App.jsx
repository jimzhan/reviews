import React from 'react';
import { Locations, Location } from 'react-router-component';

import Home from './views/Home';
import About from './views/About';

class App extends React.Component {
  render() {
    return (
      <Locations>
        <Location path="/" handler={Home} />
        <Location path="/about" handler={About} />
      </Locations>
    );
  }
}

export default App;
