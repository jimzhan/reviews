import React, { Component } from 'react';
import { Link } from 'react-router-component';


class About extends Component {
  render() {
    return (
      <div>
        <nav><Link href="/">Home</Link></nav>
        <h2>About Page</h2>
      </div>
    );
  }
}

export default About;
