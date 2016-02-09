'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-component';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>HomePage</h2>
        <Link href="/about">About Me</Link>
      </div>
    );
  }
}

export default Home;
